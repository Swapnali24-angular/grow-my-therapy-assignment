"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf7f2]/80 backdrop-blur-md border-b border-[#e5e2dc]">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link href="/" className="group">          <p className="text-2xl font-serif font-medium text-[#2f3e2e] tracking-tight">
          Dr. Maya Reynolds<span className="text-gray-400 font-sans text-sm ml-2 font-light">PsyD</span>
        </p>
        </Link>
        <ul className="hidden md:flex gap-8 text-[#2f3e2e] font-medium text-sm uppercase tracking-widest">
          <li className="hover:text-black cursor-pointer transition-colors duration-300 underline-offset-8 hover:underline">Anxiety</li>
          <li className="hover:text-black cursor-pointer transition-colors duration-300 underline-offset-8 hover:underline">Trauma</li>
          <li className="hover:text-black cursor-pointer transition-colors duration-300 underline-offset-8 hover:underline">About</li>
          <li className="hover:text-black cursor-pointer transition-colors duration-300 underline-offset-8 hover:underline text-[#2f3e2e]">Contact</li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#2f3e2e]"
          aria-label="Toggle navigation"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>


      <div className={`md:hidden bg-[#faf7f2] overflow-hidden transition-all duration-300 ${open ? 'max-h-64 border-b border-[#e5e2dc]' : 'max-h-0'}`}>
        <ul className="px-6 py-6 space-y-4 text-[#2f3e2e] uppercase tracking-widest text-sm font-medium">
          <li>Anxiety Therapy</li>          <li>Trauma Therapy</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}
