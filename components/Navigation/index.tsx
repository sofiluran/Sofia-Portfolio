"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/10 backdrop-blur-md">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-6">
        <Logo />
        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[3px] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] md:flex">
          <Link href="#projects" className="transition-opacity hover:opacity-75">
            Projects
          </Link>
          <Link href="#about" className="transition-opacity hover:opacity-75">
            About
          </Link>
          <Link href="#contact" className="transition-opacity hover:opacity-75">
            Contact
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="z-50 flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
        <div
          className={`absolute left-0 top-full w-full overflow-hidden border-b border-white/10 bg-black/80 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? "max-h-60 opacity-100 py-6" : "max-h-0 opacity-0 py-0 border-none"
          }`}
        >
          <div className="flex flex-col items-center gap-6 text-sm font-bold uppercase tracking-[3px] text-white">
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="transition-opacity hover:opacity-75"
            >
              Projects
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="transition-opacity hover:opacity-75"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="transition-opacity hover:opacity-75"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;