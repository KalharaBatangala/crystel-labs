import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import crystals from "../crystals.png";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  {
    title: "Clarity",
    text: "Plain language, clear scope and honest timelines. No surprises.",
  },
  {
    title: "Craftsmanship",
    text: "We take care with the details, because they are what keep systems reliable.",
  },
  {
    title: "Partnership",
    text: "We stay involved after delivery and grow with the businesses we work with.",
  },
];

export default function AboutPage() {
  return (
    <main className="px-6">
      {/* Story */}
      <section className="py-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow">About us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Clear, solid technology, like a crystal
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We are passionate about building high-quality digital products.
            Crystel Labs started with a simple idea: every business deserves
            technology that is dependable, easy to understand and built with care.
          </p>
          <p className="text-gray-600">
            Whether it is solving a stubborn technical problem, looking after
            your systems or building a tool made just for you, we bring the
            same attention to detail to every job.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={crystals} alt="Crystal cluster" className="w-64 md:w-80 h-auto" priority />
        </div>
      </section>

      {/* Mission */}
      <section className="bg-sectionBg py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our mission</h2>
          <p className="mt-4 text-gray-600">
            To help businesses move from manual, fragmented processes to
            well-engineered digital platforms, and to be the technical partner
            they can always count on.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">What we value</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="crystal-card">
              <h3 className="font-semibold">{value.title}</h3>
              <p className="mt-2 text-gray-600">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-3xl mx-auto text-center border-t border-blue-700 pt-12">
        <h2 className="text-3xl font-semibold">Let&apos;s work together</h2>
        <p className="mt-4 text-gray-600">We would love to hear about what you are building.</p>
        <Link
          href="/contact"
          className="mt-4 inline-block px-6 py-3 rounded-lg hover:cursor-custom-pointer bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}
