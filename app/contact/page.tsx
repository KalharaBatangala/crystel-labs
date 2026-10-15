import type { Metadata } from "next";
import ContactForm from "@/components/contactform/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="px-6">
      <section className="py-16 max-w-3xl mx-auto text-center">
        <p className="eyebrow">Get in touch</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Reach out to collaborate with us. Tell us a little about your problem
          or idea and we will reply with a clear next step.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Info */}
        <div className="space-y-8">
          <div className="crystal-card">
            <h3 className="font-semibold">Quick help</h3>
            <p className="mt-2 text-gray-600">
              Something broken right now? Mention &quot;urgent&quot; in your message
              and we will prioritise it.
            </p>
          </div>
          <div className="crystal-card">
            <h3 className="font-semibold">New project</h3>
            <p className="mt-2 text-gray-600">
              Share your goals, timeline and anything you already have in place.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2 crystal-card hover:translate-y-0">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
