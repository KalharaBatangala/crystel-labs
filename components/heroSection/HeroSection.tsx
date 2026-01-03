export default function HeroSection() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl">
        Engineering high-quality, modern, scalable digital solutions
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        We design and build reliable web platforms that simplify operations,
        improve collaboration, and scale with your business.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-lg hover:cursor-custom-pointer bg-violet-600 text-white font-medium hover:bg-violet-700 transition">
          Start a Project
        </button>

        <button className="px-6 py-3 rounded-lg border hover:cursor-custom-pointer border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-textPrimary transition">
          View Our Work
        </button>
      </div>

    </section>
  );
}
