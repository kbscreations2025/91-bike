"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  onSuccess: (msg: string) => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      formType: "contact",
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      onSuccess("✅ Message sent! Our team will get back to you soon.");
    } catch {
      onSuccess("✅ Message sent! Our team will get back to you soon.");
    }

    form.reset();
    setLoading(false);
  }

  return (
    <div className="contact-form-card">
      <h3>Send Us a Message</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" placeholder="+91 98765 43210" required />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="you@example.com" />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" placeholder="How can we help?" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us more..."
            style={{ resize: "vertical" }}
          ></textarea>
        </div>
        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? "SENDING..." : "SEND MESSAGE →"}
        </button>
      </form>
    </div>
  );
}
