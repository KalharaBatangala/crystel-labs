import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-blue-700 mt-16">
  <div className="font-roboto-slab font-medium flex justify-center gap-2 py-6 text-sm text-textSecondary">

    <Image
      src="/copyright.png"
      alt="Copyright"
      width={20}
      height={20}
      className="opacity-100"
    />

    <span>
      {new Date().getFullYear()} Crystel Solutions
    </span>

  </div>
</footer>

  );
}
