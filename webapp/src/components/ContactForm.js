"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/contact/actions";

const initialForm = {
  name: "",
  company: "",
  email: "",
  service: "",
  message: "",
};

function validateForm(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.service.trim()) {
    errors.service = "Please mention the service you are interested in.";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 20) {
    errors.message = "Message should be at least 20 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);

    if (hasSubmittedOnce) {
      const updatedErrors = validateForm(updatedForm);
      setErrors(updatedErrors);

      if (Object.keys(updatedErrors).length === 0) {
        setStatus(null);
      } else {
        setStatus({
          type: "error",
          message: "Please fix the highlighted fields before submitting.",
        });
      }
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm(form);

    setHasSubmittedOnce(true);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields before submitting.",
      });

      return;
    }

    setIsPending(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("name", form.name.trim());
    formData.append("company", form.company.trim());
    formData.append("email", form.email.trim());
    formData.append("service", form.service.trim());
    formData.append("message", form.message.trim());

    console.log("Contact form data before server action:", {
      name: form.name.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
      service: form.service.trim(),
      message: form.message.trim(),
    });

    try {
      const result = await submitContactForm(formData);

      console.log("Server action response:", result);

      if (!result.success) {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });

        if (result.errors) {
          setErrors(result.errors);
        }

        return;
      }

      setErrors({});
      setStatus({
        type: "success",
        message: result.message || "Form data received successfully.",
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setStatus({
        type: "error",
        message: "Unable to submit the form right now. Please try again.",
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={form.name}
          placeholder="Your name"
          error={hasSubmittedOnce ? errors.name : ""}
          onChange={handleChange}
          disabled={isSubmitted}
          required
        />

        <Field
          label="Company"
          name="company"
          value={form.company}
          placeholder="Company name"
          error={hasSubmittedOnce ? errors.company : ""}
          onChange={handleChange}
          disabled={isSubmitted}
        />
      </div>

      <Field
        label="Email"
        name="email"
        type="email"
        value={form.email}
        placeholder="you@example.com"
        error={hasSubmittedOnce ? errors.email : ""}
        onChange={handleChange}
        disabled={isSubmitted}
        required
      />

      <Field
        label="Service Interest"
        name="service"
        value={form.service}
        placeholder="Software, AI, cloud, modernization..."
        error={hasSubmittedOnce ? errors.service : ""}
        onChange={handleChange}
        disabled={isSubmitted}
        required
      />

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-text-body"
        >
          Message <span className="text-primary-light">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          disabled={isSubmitted}
          placeholder="Tell us about your project, goals, timeline, or current technical challenge."
          className={`w-full resize-none rounded-2xl border bg-background-deep px-4 py-3 text-text-title outline-none transition duration-300 placeholder:text-text-faint disabled:cursor-not-allowed disabled:opacity-70 ${
            hasSubmittedOnce && errors.message
              ? "border-red-400/70 focus:border-red-400"
              : "border-card-border focus:border-primary-light focus:shadow-glow-soft"
          }`}
        />

        {hasSubmittedOnce && errors.message ? (
          <p className="mt-2 text-sm text-red-300">{errors.message}</p>
        ) : null}
      </div>

      {status ? (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-primary-light/40 bg-highlight-soft text-primary-light"
              : "border-red-400/40 bg-red-400/10 text-red-300"
          }`}
        >
          {status.message}
        </div>
      ) : null}

      {!isSubmitted ? (
        <button
          type="submit"
          disabled={isPending}
          className={`inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-center font-semibold transition duration-300 sm:w-auto ${
            isPending
              ? "cursor-not-allowed border border-card-border bg-background-surface text-text-faint"
              : "bg-button-primary text-button-text shadow-button hover:-translate-y-1 hover:shadow-glow"
          }`}
        >
          {isPending ? "Submitting..." : "Submit Inquiry"}
        </button>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  placeholder,
  error,
  onChange,
  required = false,
  disabled = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-text-body"
      >
        {label}{" "}
        {required ? <span className="text-primary-light">*</span> : null}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={`w-full rounded-2xl border bg-background-deep px-4 py-3 text-text-title outline-none transition duration-300 placeholder:text-text-faint disabled:cursor-not-allowed disabled:opacity-70 ${
          error
            ? "border-red-400/70 focus:border-red-400"
            : "border-card-border focus:border-primary-light focus:shadow-glow-soft"
        }`}
      />

      {error ? <p className="mt-2 text-sm text-red-300">{error}</p> : null}
    </div>
  );
}
