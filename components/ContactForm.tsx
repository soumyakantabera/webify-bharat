"use client";

import { useState, type FormEvent } from "react";
import { IconWhatsApp } from "@/components/icons";
import { waLink } from "@/lib/site";

const needs = [
  "Website",
  "E-commerce",
  "Payments",
  "WhatsApp automation",
  "Analytics / BI",
  "Compliance / operations",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState("");
  const [message, setMessage] = useState("");

  function openWhatsApp(event: FormEvent) {
    event.preventDefault();
    const lines = [
      "Hi, I'd like to discuss a project.",
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      company && `Business: ${company}`,
      need && `Need: ${need}`,
      message && `Challenge: ${message}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form" onSubmit={openWhatsApp}>
      <input
        className="input"
        name="name"
        autoComplete="name"
        placeholder="Your name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input"
        name="phone"
        autoComplete="tel"
        placeholder="Phone / WhatsApp"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="input"
        name="company"
        autoComplete="organization"
        placeholder="Business / company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <select
        className="input"
        name="need"
        required
        value={need}
        onChange={(e) => setNeed(e.target.value)}
      >
        <option value="" disabled>
          What do you need help with?
        </option>
        {needs.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <textarea
        className="input"
        name="message"
        placeholder="Tell us about the challenge"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="notice">
        Submit opens WhatsApp with your details so we can reply on the live channel. No
        form backend is required.
      </div>
      <button className="btn btn-primary" type="submit">
        <IconWhatsApp />
        Continue on WhatsApp
      </button>
    </form>
  );
}
