"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "About Us", href: "/about" }, // Changed from "#about" to "/about"
  { name: "Solutions", href: "/solutions" }, // Changed from "#solutions" to "/solutions"
  { name: "Store", href: "/store" }, // Changed from "#store" to "/store"
  { name: "Work With Us", href: "/work-with-us" }, // Changed from "#work" to "/work-with-us"
  { name: "More", href: "/more" }, // Changed from "#more" to "/more"
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/precicoat-logo.png"
                alt="Precicoat Pumptronix Logo"
                width={220}
                height={60}
                priority
                className="h-10 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#ff6700] px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#ff6700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact" // Changed from "#contact" to "/contact"
              className="bg-[#ff6700] hover:bg-[#e55a00] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#ff6700] focus:outline-none focus:text-[#ff6700] p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#ff6700] hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact" // Changed from "#contact" to "/contact"
                  className="bg-[#ff6700] hover:bg-[#e55a00] text-white block px-3 py-2 text-base font-semibold transition-colors duration-200 rounded-md text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}