"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await new Promise(res => setTimeout(res, 900));
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="contact-form-success" style={{ maxWidth: 420, margin: "2rem auto 0 auto", textAlign: "center", background: "var(--bg)", color: "var(--primary-dark)", borderRadius: "1rem", padding: "1.5rem", fontFamily: "'Courier New', monospace", boxShadow: "0 2px 16px 0 rgba(40,40,40,0.08)" }}>
        Thank you for contacting us! We’ll get back to you soon.
      </div>
    );
  }

  return (
    <form className="contact-form" autoComplete="off" onSubmit={handleSubmit}>
      <fieldset style={{ border: "none", margin: 0, padding: 0 }} disabled={loading}>
        <legend style={{ position: "absolute", left: -9999, top: "auto", width: 1, height: 1, overflow: "hidden" }}>Contact Form</legend>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: 420, margin: "0 auto", background: "var(--bg)", padding: "2rem 1.5rem", borderRadius: "1.25rem", boxShadow: "0 2px 16px 0 rgba(40,40,40,0.08)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="name" style={{ fontFamily: "Oswald, sans-serif", color: "var(--primary-dark)", fontSize: "1rem" }}>Your Name</label>
            <input name="name" id="name" type="text" required minLength={2} autoComplete="off" style={{ fontFamily: "'Courier New', monospace", padding: "0.75rem 1rem", border: "1px solid var(--primary-dark)", borderRadius: "0.5rem", background: "var(--bg)", color: "var(--text)", fontSize: "1rem" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="email" style={{ fontFamily: "Oswald, sans-serif", color: "var(--primary-dark)", fontSize: "1rem" }}>Your Email</label>
            <input name="email" id="email" type="email" required autoComplete="off" style={{ fontFamily: "'Courier New', monospace", padding: "0.75rem 1rem", border: "1px solid var(--primary-dark)", borderRadius: "0.5rem", background: "var(--bg)", color: "var(--text)", fontSize: "1rem" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="message" style={{ fontFamily: "Oswald, sans-serif", color: "var(--primary-dark)", fontSize: "1rem" }}>Message / Donation details</label>
            <textarea name="message" id="message" required minLength={5} rows={5} style={{ fontFamily: "'Courier New', monospace", padding: "0.75rem 1rem", border: "1px solid var(--primary-dark)", borderRadius: "0.5rem", background: "var(--bg)", color: "var(--text)", fontSize: "1rem", resize: "vertical" }} />
          </div>
          <button type="submit" style={{ marginTop: "0.5rem", fontFamily: "Oswald,sans-serif", background: "var(--primary)", color: "#fff", border: "none", borderRadius: "0.5rem", padding: "0.75rem 2rem", fontSize: "1.1rem", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {error && <div style={{ color: "#b91c1c", marginTop: "0.5rem" }}>{error}</div>}
        </div>
      </fieldset>
    </form>
  );
}
