import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/content/site';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#16352f] text-white overflow-hidden" aria-label="Hero">
      {/* Background Hero Image with Dark Gradient Vignette for Legibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath('/images/hero-physio.jpg')}
          alt="Physiotherapy rehabilitation session at Braakhuis Fysiotherapie"
          fill
          priority
          className="object-cover object-center brightness-[0.78] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16352f]/90 via-[#16352f]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16352f]/80 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-28 sm:pb-36 lg:pt-36 lg:pb-44 flex flex-col justify-between min-h-[620px] lg:min-h-[700px]">
        {/* Main Hero Copy */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Move freely, feel stronger every day
          </h1>
          <p className="text-base sm:text-lg text-stone-200 font-normal max-w-xl leading-relaxed">
            At Fysiotherapie Braakhuis, we help you recover through physiotherapy. Target your pain, restore joint mobility, and rebuild strength with evidence-based clinical care.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white text-[#16352f] hover:bg-stone-100 transition-colors duration-200 shadow-md"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/40 text-white hover:bg-white/10 transition-colors duration-200"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Bottom Hero Bar with Scroll Indicator and Floating Preview Badge */}
        <div className="pt-12 sm:pt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/15">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-stone-300 uppercase">
            <span>Scroll to explore</span>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          {/* Floating Pill Card (Matches Screenshot element) */}
          <Link
            href="/services"
            className="self-start sm:self-auto inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 pr-5 rounded-2xl hover:bg-white/20 transition-all duration-200 group"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/30">
              <Image
                src={getAssetPath('/images/manual-therapy.jpg')}
                alt="Physiotherapy treatment thumbnail"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-medium text-stone-200">
                We aid recovery with physiotherapy
              </span>
              <span className="text-xs font-bold text-white group-hover:underline inline-flex items-center gap-1">
                Explore now &rarr;
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
