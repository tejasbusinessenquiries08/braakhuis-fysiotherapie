'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/content/site';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-stone-200/80 sticky top-0 z-50">
      {/* Top Banner Kicker */}
      <div className="w-full bg-[#16352f] text-white py-1.5 px-4 text-center text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
        {SITE_CONFIG.kicker}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#16352f] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#16352f] leading-tight">
                Braakhuis
              </span>
              <span className="text-[10px] font-medium tracking-widest text-stone-500 uppercase">
                Fysiotherapie
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <Link
              href="/services"
              className="text-sm font-medium text-stone-700 hover:text-[#16352f] transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-stone-700 hover:text-[#16352f] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#focus-areas"
              className="text-sm font-medium text-stone-700 hover:text-[#16352f] transition-colors"
            >
              Focus Areas
            </Link>
            <Link
              href="/#why-us"
              className="text-sm font-medium text-stone-700 hover:text-[#16352f] transition-colors"
            >
              About
            </Link>
            <Link
              href="/#faqs"
              className="text-sm font-medium text-stone-700 hover:text-[#16352f] transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-stone-700 hover:text-[#16352f] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#16352f] text-white hover:bg-[#102722] transition-colors duration-200 shadow-sm"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            Our Services
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            Blog
          </Link>
          <Link
            href="/#focus-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            Focus Areas
          </Link>
          <Link
            href="/#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            About
          </Link>
          <Link
            href="/#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            FAQs
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            Contact
          </Link>
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#16352f] text-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
