"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-navbarBg backdrop-blur border-b border-zinc-800 ">
      <nav className=" left-0 w-full mx-auto max-w-7xl px-6 h-16 flex items-center ">

        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="inline-block text-lg font-bold tracking-tight hover:cursor-custom-pointer">
            <img src="/crystal-3d.png" style={{maxWidth:"32px", height:"32px"}} alt="crystel-logo" />
          </Link>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-roboto-slab text-textPrimary transition hover:cursor-custom-pointer nav-link"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="font-roboto-slab text-textPrimary hover:cursor-custom-pointer"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Right: Social icons */}
        <div className="flex-1 flex justify-end gap-4 ">
          <span className="text-zinc-400 hover:text-white hover:cursor-custom-pointer">
            <img src="/fb_icon.png" style={{width: "28px", height:"36px"}} alt="fb-icon" />
          </span>
          <span className="text-zinc-400 hover:text-white hover:cursor-custom-pointer">
            <img src="/linkedin-icon.webp" style={{width:"28px", height:"36px"}} alt="linkedin-icon" />
          </span>
        </div>

      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-navbarBg px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-roboto-slab text-textPrimary hover:cursor-custom-pointer nav-link self-start"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
