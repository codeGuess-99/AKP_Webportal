"use server";

import { google } from "googleapis";

function validateServerForm(data) {
  const errors = {};

  if (!data.name) {
    errors.name = "Name is required.";
  }

  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.service) {
    errors.service = "Please mention the service you are interested in.";
  }

  if (!data.message) {
    errors.message = "Message is required.";
  } else if (data.message.length < 20) {
    errors.message = "Message should be at least 20 characters.";
  }

  return errors;
}

function validateEmailConfig() {
  const missing = [];

  if (!process.env.GOOGLE_CLIENT_ID) {
    missing.push("GOOGLE_CLIENT_ID");
  }

  if (!process.env.GOOGLE_CLIENT_SECRET) {
    missing.push("GOOGLE_CLIENT_SECRET");
  }

  if (!process.env.GOOGLE_REFRESH_TOKEN) {
    missing.push("GOOGLE_REFRESH_TOKEN");
  }

  if (!process.env.GMAIL_FROM_EMAIL) {
    missing.push("GMAIL_FROM_EMAIL");
  }

  if (!process.env.CONTACT_TO_EMAIL) {
    missing.push("CONTACT_TO_EMAIL");
  }

  return missing;
}

function escapeHtml(value = "") {
  return value
    .toString()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sanitizeHeader(value = "") {
  return value
    .toString()
    .replace(/[\r\n]/g, " ")
    .trim();
}

function encodeBase64Url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function createMimeMessage({
  fromName,
  fromEmail,
  toEmail,
  replyTo,
  subject,
  textBody,
  htmlBody,
}) {
  const boundary = `aureon_boundary_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2)}`;

  const headers = [
    `From: "${sanitizeHeader(fromName)}" <${sanitizeHeader(fromEmail)}>`,
    `To: ${sanitizeHeader(toEmail)}`,
    replyTo ? `Reply-To: ${sanitizeHeader(replyTo)}` : null,
    `Subject: ${sanitizeHeader(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ].filter(Boolean);

  const message = [
    ...headers,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    textBody,
    "",
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    htmlBody,
    "",
    `--${boundary}--`,
  ].join("\r\n");

  return encodeBase64Url(message);
}

function createInternalNotificationEmail(data) {
  const textBody = `
New Contact Form Inquiry

Name: ${data.name}
Company: ${data.company || "Not provided"}
Email: ${data.email}
Service Interest: ${data.service}

Message:
${data.message}
  `.trim();

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin: 0 0 16px;">New Contact Form Inquiry</h2>

      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(data.company || "Not provided")}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Service Interest:</strong> ${escapeHtml(data.service)}</p>

      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

      <h3 style="margin: 0 0 8px;">Message</h3>
      <p style="white-space: pre-line;">${escapeHtml(data.message)}</p>
    </div>
  `.trim();

  return createMimeMessage({
    fromName: "Aureon Systems Website",
    fromEmail: process.env.GMAIL_FROM_EMAIL,
    toEmail: process.env.CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject: `New Contact Inquiry: ${data.service}`,
    textBody,
    htmlBody,
  });
}

function createUserConfirmationEmail(data) {
  const textBody = `
Hi ${data.name},

Thank you for contacting Aureon Systems LLC.

We have received your inquiry and our team will review your message. Someone from our team will follow up with you soon.

Inquiry Summary:
Name: ${data.name}
Company: ${data.company || "Not provided"}
Email: ${data.email}
Service Interest: ${data.service}

Message:
${data.message}

Regards,
Aureon Systems LLC
  `.trim();

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111827;">
      <h2 style="margin: 0 0 16px;">Thank you for contacting Aureon Systems LLC</h2>

      <p>Hi ${escapeHtml(data.name)},</p>

      <p>
        We have received your inquiry and our team will review your message.
        Someone from our team will follow up with you soon.
      </p>

      <div style="margin: 24px 0; padding: 18px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb;">
        <h3 style="margin: 0 0 12px;">Inquiry Summary</h3>

        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company || "Not provided")}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Service Interest:</strong> ${escapeHtml(data.service)}</p>

        <hr style="margin: 18px 0; border: none; border-top: 1px solid #e5e7eb;" />

        <p style="margin-bottom: 6px;"><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${escapeHtml(data.message)}</p>
      </div>

      <p>Regards,<br />Aureon Systems LLC</p>
    </div>
  `.trim();

  return createMimeMessage({
    fromName: "Aureon Systems LLC",
    fromEmail: process.env.GMAIL_FROM_EMAIL,
    toEmail: data.email,
    replyTo: process.env.CONTACT_TO_EMAIL,
    subject: "We received your inquiry | Aureon Systems LLC",
    textBody,
    htmlBody,
  });
}

async function getGmailClient() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  return google.gmail({
    version: "v1",
    auth: oauth2Client,
  });
}

async function sendGmailMessage(gmail, raw) {
  const response = await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw,
    },
  });

  return response.data;
}

export async function submitContactForm(formData) {
  const data = {
    name: formData.get("name")?.toString().trim() || "",
    company: formData.get("company")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    service: formData.get("service")?.toString().trim() || "",
    message: formData.get("message")?.toString().trim() || "",
  };

  const errors = validateServerForm(data);

  if (Object.keys(errors).length > 0) {
    console.log("Contact form validation failed:", errors);

    return {
      success: false,
      message: "Please fix the highlighted fields before submitting.",
      errors,
    };
  }

  const missingEnvVars = validateEmailConfig();

  if (missingEnvVars.length > 0) {
    console.error("Missing Gmail API environment variables:", missingEnvVars);

    return {
      success: false,
      message:
        "Email service is not configured correctly. Please contact support.",
      errors: {},
    };
  }

  console.log("Contact form data received on server:", data);

  try {
    const gmail = await getGmailClient();

    const internalEmailRaw = createInternalNotificationEmail(data);
    const confirmationEmailRaw = createUserConfirmationEmail(data);

    const internalEmailResponse = await sendGmailMessage(
      gmail,
      internalEmailRaw,
    );

    const confirmationEmailResponse = await sendGmailMessage(
      gmail,
      confirmationEmailRaw,
    );

    console.log("Internal contact email sent:", internalEmailResponse);
    console.log("User confirmation email sent:", confirmationEmailResponse);

    return {
      success: true,
      message:
        "Form data received successfully. A confirmation email has been sent.",
      data,
    };
  } catch (error) {
    console.error("Gmail API email send failed:", error);

    return {
      success: false,
      message:
        "Your form was valid, but the email could not be sent right now. Please try again later.",
      errors: {},
    };
  }
}
