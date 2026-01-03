// components/WhyChooseUs.tsx
export default function WhyChooseUs() {
  return (
    <section className="py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-center">
        Why choose us
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <div className="border-2 border-blue-700 p-4 border-dashed">
          <h3 className="font-semibold">Understand the problem</h3>
          <p className="mt-2 text-gray-600">
            We start by deeply understanding your business and challenges.
          </p>
        </div>

        <div className="border-2 border-blue-700 p-4 border-dashed">
          <h3 className="font-semibold">Engineer the solution</h3>
          <p className="mt-2 text-gray-600">
            Clean architecture, modern tools, and scalable design.
          </p>
        </div>

        <div className="border-2 border-blue-700 p-4 border-dashed">
          <h3 className="font-semibold">Deliver & iterate</h3>
          <p className="mt-2 text-gray-600">
            We deliver, gather feedback, and continuously improve.
          </p>
        </div>
      </div>
    </section>
  );
}
