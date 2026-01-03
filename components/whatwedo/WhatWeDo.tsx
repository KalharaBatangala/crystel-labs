// components/WhatWeDo.tsx
export default function WhatWeDo() {
  return (
    <section className="bg-sectionBg">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">
          What we do
        </h2>

        <p className="mt-4 text-gray-600">
          We help businesses move from manual, fragmented processes
          to well-engineered digital platforms.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
          <div className="border-2 border-blue-700 p-4 border-dashed">
            <h3 className="font-semibold text-lg">Web Platforms</h3>
            <p className="mt-2 text-gray-600">
              Custom web applications tailored to your workflows.
            </p>
          </div>

          <div className="border-2 border-blue-700 p-4 border-dashed">
            <h3 className="font-semibold text-lg">System Automation</h3>
            <p className="mt-2 text-gray-600">
              Reduce manual work with smart automation and integrations.
            </p>
          </div>

          <div className="border-2 border-blue-700 p-4 border-dashed">
            <h3 className="font-semibold text-lg">Scalable Architecture</h3>
            <p className="mt-2 text-gray-600">
              Systems designed to grow as your business grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
