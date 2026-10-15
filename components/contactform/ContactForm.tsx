"use client";

import { FormEvent } from "react";

// TODO: replace with the real business email address
const CONTACT_EMAIL = "hello@example.com";

const fieldClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 outline-none transition focus:border-textPrimary";

export default function ContactForm() {
  // Opens the visitor's email app with the message filled in (no backend needed yet)
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[${data.get("topic")}] Message from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="font-roboto-slab text-sm text-textPrimary">Name</span>
          <input name="name" required className={`mt-1 ${fieldClass}`} />
        </label>
        <label className="block">
          <span className="font-roboto-slab text-sm text-textPrimary">Email</span>
          <input name="email" type="email" required className={`mt-1 ${fieldClass}`} />
        </label>
      </div>

      <label className="block">
        <span className="font-roboto-slab text-sm text-textPrimary">What do you need help with?</span>
        <select name="topic" className={`mt-1 hover:cursor-custom-pointer ${fieldClass}`}>
          <option>Troubleshooting</option>
          <option>System administration</option>
          <option>Custom software</option>
          <option>Automation</option>
          <option>Consulting</option>
          <option>Something else</option>
        </select>
      </label>

      <label className="block">
        <span className="font-roboto-slab text-sm text-textPrimary">Message</span>
        <textarea name="message" rows={5} required className={`mt-1 ${fieldClass}`} />
      </label>

      <button
        type="submit"
        className="px-6 py-3 rounded-lg hover:cursor-custom-pointer bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}
