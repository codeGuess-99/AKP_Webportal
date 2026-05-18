"use server";

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

  console.log("Contact form data received on server:", data);

  return {
    success: true,
    message: "Form data received successfully.",
    data,
  };
}
