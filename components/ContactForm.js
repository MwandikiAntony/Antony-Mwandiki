"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ s: "idle", m: "" });
  async function submit(e) {
    e.preventDefault();
    setState({ s: "busy", m: "" });
    const f = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Something went wrong.");
      e.target.reset();
      setState({ s: "ok", m: "Message sent. I will reply by email soon." });
    } catch (err) {
      setState({ s: "err", m: err.message });
    }
  }
  return (
    <form className="cf" onSubmit={submit}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input type="email" name="email" required autoComplete="email" /></label>
      <label>Message<textarea name="message" rows={6} required maxLength={5000} /></label>
      <input className="hp" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn" disabled={state.s === "busy"}>{state.s === "busy" ? "Sending" : "Send message"}</button>
      <p className={`msg ${state.s}`} role="status">{state.m}</p>
    </form>
  );
}
