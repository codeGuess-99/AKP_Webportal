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
  const errors = [];

  if (!process.env.GOOGLE_CLIENT_ID) {
    errors.push("GOOGLE_CLIENT_ID");
  }

  if (!process.env.GOOGLE_CLIENT_SECRET) {
    errors.push("GOOGLE_CLIENT_SECRET");
  }

  if (!process.env.GOOGLE_REFRESH_TOKEN) {
    errors.push("GOOGLE_REFRESH_TOKEN");
  }

  if (!process.env.GMAIL_FROM_EMAIL) {
    errors.push("GMAIL_FROM_EMAIL");
  }

  if (!process.env.CONTACT_TO_EMAIL) {
    errors.push("CONTACT_TO_EMAIL");
  }

  return errors;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function encodeBase64Url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function createEmailMessage(data) {
  const fromEmail = process.env.GMAIL_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  const subject = `New Contact Inquiry: ${data.service}`;

  const plainTextBody = `
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

  const boundary = `aureon_boundary_${Date.now()}`;

  const message = [
    `From: "Aureon Systems Website" <${fromEmail}>`,
    `To: ${toEmail}`,
    `Reply-To: ${data.email}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    plainTextBody,
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

async function sendEmailWithGmailApi(data) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const gmail = google.gmail({
    version: "v1",
    auth: oauth2Client,
  });

  const raw = createEmailMessage(data);

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
    const gmailResponse = await sendEmailWithGmailApi(data);

    console.log("Gmail API email sent successfully:", gmailResponse);

    return {
      success: true,
      message: "Form data received successfully.",
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
