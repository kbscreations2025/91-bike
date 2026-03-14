"use client";

import { useState, FormEvent } from "react";

interface SellFormProps {
  onSuccess: (msg: string) => void;
}

export default function SellForm({ onSuccess }: SellFormProps) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      formType: "sell",
      firstName: formData.get("firstName"),
      phone: formData.get("phone"),
      brand: formData.get("brand"),
      model: formData.get("model"),
      year: formData.get("year"),
      city: formData.get("city"),
    };

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        onSuccess("✅ Thank you! We'll contact you with an instant quote shortly.");
      } else {
        onSuccess("✅ Thank you! We'll contact you with an instant quote shortly.");
      }
    } catch {
      onSuccess("✅ Thank you! We'll contact you with an instant quote shortly.");
    }

    form.reset();
    setLoading(false);
  }

  return (
    <div className="sell-form-card">
      <h3>Get Your Free Quote</h3>
      <p>Fill in your bike details and we&apos;ll call you back instantly.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="+91 98765 43210" required />
          </div>
        </div>
        <div className="form-group">
          <label>Bike Brand</label>
          <select name="brand" required>
            <option value="">Select Brand</option>
            <option>Royal Enfield</option>
            <option>Bajaj</option>
            <option>Honda</option>
            <option>Hero</option>
            <option>TVS</option>
            <option>Yamaha</option>
            <option>KTM</option>
            <option>Kawasaki</option>
            <option>Suzuki</option>
            <option>Jawa</option>
            <option>OLA Electric</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Model</label>
            <input type="text" name="model" placeholder="e.g. Classic 350" />
          </div>
          <div className="form-group">
            <label>Year</label>
            <select name="year">
              <option value="">Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015 or older</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" placeholder="Your city" required />
        </div>
        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? "SUBMITTING..." : "GET INSTANT QUOTE →"}
        </button>
      </form>
    </div>
  );
}
