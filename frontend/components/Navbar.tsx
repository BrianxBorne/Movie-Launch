"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logos/logo-gold.png"
            alt="Velocity Studios"
            width={34}
            height={34}
            priority
            className="w-8 h-8 lg:w-9 lg:h-9 object-contain"
          />

          <span className="text-xl lg:text-2xl font-semibold tracking-[0.18em] text-white whitespace-nowrap">
            Velocity Studios
          </span>
        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-10 uppercase tracking-[0.2em] text-sm">

          <a
            href="#"
            className="transition-colors duration-300 hover:text-[#C9A14A]"
          >
            Home
          </a>

          <a
            href="#launches"
            className="transition-colors duration-300 hover:text-[#C9A14A]"
          >
            Launches
          </a>

          <a
            href="#about"
            className="transition-colors duration-300 hover:text-[#C9A14A]"
          >
            Company
          </a>

          <a
            href="#newsletter"
            className="transition-colors duration-300 hover:text-[#C9A14A]"
          >
            Newsletter
          </a>

        </nav>

      </div>
    </header>
  );
}