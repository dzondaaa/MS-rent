"use client";

import { FormEvent, useState } from "react";
import { machines } from "@/lib/machines";

export default function ContactForm({ defaultMachine = "" }: { defaultMachine?: string }) {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [sending, setSending] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setStatus("");
    setStatusType("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Zprávu se nepodařilo odeslat.");
      setStatus(result.message || "Zpráva byla odeslána.");
      setStatusType("success");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Něco se nepovedlo.");
      setStatusType("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} data-reveal="right">
      <div className="form-row">
        <label>Jméno<input name="name" required minLength={2} maxLength={80} autoComplete="name" /></label>
        <label>E-mail<input name="email" type="email" required maxLength={120} autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label>Telefon<input name="phone" type="tel" maxLength={30} autoComplete="tel" /></label>
        <label>Stroj
          <select name="machine" defaultValue={defaultMachine}>
            <option value="">Vyberte stroj</option>
            {machines.map(machine => <option key={machine.slug} value={machine.name}>{machine.name}</option>)}
          </select>
        </label>
      </div>
      <label>Zpráva<textarea name="message" required minLength={10} maxLength={2000} placeholder="Napište nám, co potřebujete..." /></label>

      <label className="website-field" aria-hidden="true">Web<input name="website" tabIndex={-1} autoComplete="off" /></label>

      <button className="button primary submit-button" disabled={sending} type="submit">
        {sending && <span className="spinner" aria-hidden="true" />}
        {sending ? "Odesílám..." : "Odeslat poptávku"}
      </button>
      {status && <p className={`form-status ${statusType}`} role="status">{status}</p>}
    </form>
  );
}
