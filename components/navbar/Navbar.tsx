import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-navbarBg backdrop-blur border-b border-zinc-800 ">
      <nav className=" left-0 w-full z-50 mx-auto max-w-7xl px-6 h-16 flex items-center ">
        
        {/* Left: Logo */}
        <div className="flex-1">
          <span className="text-lg font-bold tracking-tight">
            <img src="crystal-3d.png" style={{maxWidth:"32px", height:"32px"}} alt="crystel-logo" />
          </span>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="font-roboto-slab text-textPrimary hover:text-white transition hover:cursor-custom-pointer">
            Home
          </Link>
          <Link href="/services" className="font-roboto-slab text-textPrimary hover:text-white transition hover:cursor-custom-pointer">
            Services
          </Link>
          <Link href="/about" className="font-roboto-slab text-textPrimary hover:text-white transition hover:cursor-custom-pointer">
            About
          </Link>
        </div>


        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-zinc-400 hover:text-white">
            Menu
          </button>
        </div>

        {/* Right: Social icons */}
        <div className="flex-1 flex justify-end gap-4 ">
          <span className="text-zinc-400 hover:text-white hover:cursor-custom-pointer">
            <img src="fb_icon.png" style={{width: "28px", height:"36px"}} alt="fb-icon" />
          </span>
          <span className="text-zinc-400 hover:text-white hover:cursor-custom-pointer">
            <img src="linkedin-icon.webp" style={{widows:"28px", height:"36px"}} alt="linkedin-icon" />
          </span> 
        </div>

      </nav>
    </header>
  );
}
