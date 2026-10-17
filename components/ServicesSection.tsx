import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/content/services';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#fafbf9] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#16352f] uppercase">
              Clinical Specialisms
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16352f] tracking-tight leading-tight">
              Physiotherapy Services & Treatments
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Every appointment is a dedicated 1-on-1 session with a senior physiotherapist. All initial consultations include comprehensive physical testing and a documented recovery plan.
            </p>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase border border-[#16352f] text-[#16352f] hover:bg-[#16352f] hover:text-white transition-colors"
            >
              View All 6 Services &rarr;
            </Link>
          </div>
        </div>

        {/* Display first 3 services on home page preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
