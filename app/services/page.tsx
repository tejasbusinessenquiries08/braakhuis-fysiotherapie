import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SERVICES } from '@/content/services';

export const metadata: Metadata = {
  title: 'Our Physiotherapy Services & Treatment Directory',
  description: 'Evidence-based physiotherapy treatments: manual joint therapy, sports rehabilitation, post-operative care, and spinal decompression. Clear pricing and criteria.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SERVICES.map((service, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.shortDescription,
        offers: {
          '@type': 'Offer',
          price: service.price.replace('£', ''),
          priceCurrency: 'GBP',
        },
      },
    })),
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-[#fbfcfb] py-12 lg:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: 'Our Services', href: '/services' }]} />

          {/* Page Banner Header */}
          <div className="mt-6 mb-16 max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#16352f] uppercase bg-[#e6ede8] px-3.5 py-1.5 rounded-full border border-[#c9d8ce]">
              Clinical Services Directory
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#16352f] tracking-tight leading-tight">
              Physiotherapy Treatments & Rehabilitation Protocols
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Every session at Braakhuis Fysiotherapie is a private, one-on-one consultation with a senior HCPC-registered clinician. We define measurable milestones for discharge rather than open-ended appointments.
            </p>
          </div>

          {/* Services List Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {SERVICES.map((service) => (
              <section
                key={service.id}
                id={service.slug}
                className="bg-white rounded-3xl p-8 border border-stone-200 shadow-xs flex flex-col justify-between hover:border-[#16352f]/40 transition-colors"
                aria-labelledby={`service-${service.id}`}
              >
                <div className="space-y-6">
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-[#16352f] uppercase tracking-wider bg-[#eaf1ec] px-3 py-1 rounded-full border border-[#d1ded4]">
                      {service.focusArea}
                    </span>
                    <span className="text-lg font-black text-[#16352f]">
                      {service.price} <span className="text-xs font-normal text-stone-500">/ {service.duration}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h2 id={`service-${service.id}`} className="text-2xl font-bold text-[#16352f] tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Indications */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Key Indications:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.indications.map((ind, i) => (
                        <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                          <span className="text-[#16352f] font-bold mt-0.5">&bull;</span>
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Approach */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Clinical Approach:
                    </h3>
                    <ul className="space-y-1">
                      {service.treatmentApproach.map((appr, i) => (
                        <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                          <span className="text-[#16352f] font-bold">&rarr;</span>
                          <span>{appr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* When Not Suitable */}
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                    <strong>When NOT suitable:</strong> {service.notSuitableFor}
                  </div>
                </div>

                {/* Booking CTA Footer */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    45 or 60 minute private suite
                  </span>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#16352f] text-white hover:bg-[#102722] transition-colors"
                  >
                    Book This Service
                  </Link>
                </div>
              </section>
            ))}
          </div>

          {/* Bottom Guidance Banner */}
          <div className="mt-16 bg-[#16352f] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Unsure which treatment matches your condition?
            </h2>
            <p className="text-sm text-stone-300 max-w-xl mx-auto leading-relaxed">
              During your initial 45-minute consultation, your clinician will perform a full objective examination and determine the appropriate clinical protocol.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#16352f] hover:bg-stone-100 transition-colors shadow-sm"
              >
                Schedule Initial Consultation
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
