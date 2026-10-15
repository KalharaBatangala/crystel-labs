import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    title: "IT Troubleshooting",
    description:
      "Fast, methodical diagnosis of hardware, software and network issues, so your team can get back to work.",
    points: ["On-site & remote support", "Root-cause analysis", "Preventive checkups"],
  },
  {
    title: "System Administration",
    description:
      "Setup and care of servers, user accounts, backups and security so your systems stay healthy and safe.",
    points: ["Server & network setup", "Backups & recovery", "Security hardening"],
  },
  {
    title: "Custom Software",
    description:
      "Small, focused tools and web applications built around the way your business already works.",
    points: ["Web apps & dashboards", "Internal tools", "Integrations & APIs"],
  },
  {
    title: "Automation",
    description:
      "Replace repetitive manual tasks with reliable scripts and workflows that save hours every week.",
    points: ["Workflow automation", "Reports & data processing", "Scheduled jobs"],
  },
  {
    title: "Technology Consulting",
    description:
      "Honest, practical advice on choosing tools, planning upgrades and making the most of what you have.",
    points: ["Technology planning", "Tool selection", "Process reviews"],
  },
  {
    title: "Ongoing Support",
    description:
      "A dependable technical partner on call, with maintenance and improvements as your needs evolve.",
    points: ["Monthly maintenance", "Updates & monitoring", "Priority assistance"],
  },
];

const steps = [
  { step: "01", title: "Talk", text: "Tell us what is slowing you down." },
  { step: "02", title: "Plan", text: "We propose a clear, fixed-scope solution." },
  { step: "03", title: "Build", text: "We fix, configure or build it properly." },
  { step: "04", title: "Support", text: "We stay around to keep it running well." },
];

export default function ServicesPage() {
  return (
    <main className="px-6">
      {/* Intro */}
      <section className="py-16 max-w-3xl mx-auto text-center">
        <p className="eyebrow">What we offer</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          From fixing the problem in front of you today to building the system
          you will rely on tomorrow, we cover the full range of everyday
          technology needs.
        </p>
      </section>

      {/* Service cards */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="crystal-card flex flex-col">
            <h3 className="font-semibold text-lg">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
            <ul className="mt-auto space-y-1 text-sm">
              {service.points.map((point) => (
                <li key={point} className="font-roboto-slab text-textPrimary">
                  ◆ {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* How we work */}
      <section className="py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">How we work</h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <span className="font-roboto-slab text-3xl text-textPrimary">{s.step}</span>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-1 text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-3xl mx-auto text-center border-t border-blue-700 pt-12">
        <h2 className="text-3xl font-semibold">Have something in mind?</h2>
        <p className="mt-4 text-gray-600">
          Big or small, tell us about it. We will get back to you with a clear next step.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block px-6 py-3 rounded-lg hover:cursor-custom-pointer bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
        >
          Start a Project
        </Link>
      </section>
    </main>
  );
}
