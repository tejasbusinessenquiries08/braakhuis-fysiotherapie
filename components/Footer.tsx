import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/content/site';

export default function Footer() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physiotherapy',
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: 'https://braakhuis-fysiotherapie.com',
    logo: 'https://braakhuis-fysiotherapie.com/images/clinic-plaque.jpg',
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.postcode,
      addressCountry: SITE_CONFIG.address.country,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '19:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:30',
        closes: '14:00',
      },
    ],
  };

  return (
    <footer id="contact" className="bg-[#122823] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Brand & Accreditations */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white text-[#16352f] flex items-center justify-center font-bold text-sm">
                BF
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              HCPC & CSP registered physiotherapy and musculoskeletal recovery practice. Individual consultations and evidence-based rehabilitation protocols.
            </p>
            <div className="pt-2 text-[11px] text-stone-400 space-y-1">
              <div>HCPC Registration: Registered Musculoskeletal Clinicians</div>
              <div>CSP Member Practice: Chartered Society of Physiotherapy</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition-colors">
                  Clinical Blogs & Guides
                </Link>
              </li>
              <li>
                <Link href="/#focus-areas" className="hover:text-white transition-colors">
                  Treatment Focus Areas
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-white transition-colors">
                  Why Choose Braakhuis
                </Link>
              </li>
              <li>
                <Link href="/#when-not-to-hire" className="hover:text-white transition-colors">
                  When NOT to Book
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Clinic Opening Hours
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              {SITE_CONFIG.openingHours.map((hours, idx) => (
                <li key={idx}>{hours}</li>
              ))}
            </ul>
            <div className="pt-2">
              <span className="inline-block text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded">
                Avg. first reply in {SITE_CONFIG.stats.replyTime}
              </span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Location & Contact
            </h4>
            <address className="not-italic text-xs text-stone-400 space-y-2">
              <div>
                {SITE_CONFIG.address.street}<br />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.postcode}
              </div>
              <div>
                <strong>Phone:</strong> {SITE_CONFIG.phone}
              </div>
              <div>
                <strong>Email:</strong> {SITE_CONFIG.email}
              </div>
            </address>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-[#16352f] hover:bg-stone-200 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Pre-rendered Static Site</span>
            <span>Zero Runtime Tracking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
