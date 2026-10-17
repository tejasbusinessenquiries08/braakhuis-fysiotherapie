import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG, getAssetPath } from '@/content/site';

interface HighlightCard {
  title: string;
  description: string;
  statNumber: string;
  statLabel: string;
  image: string;
}

const HIGHLIGHTS: HighlightCard[] = [
  {
    title: 'Individual 1-on-1 Consultations',
    description: 'We do not run open gym floor sessions or leave you with hot packs. Every session is conducted in a private clinical suite with your designated physiotherapist.',
    statNumber: '45 min',
    statLabel: 'Full Initial Assessment',
    image: getAssetPath('/images/manual-therapy.jpg'),
  },
  {
    title: 'Objective Recovery Milestones',
    description: 'We measure limb symmetry and force output using digital testing. You know exactly when your tendon or joint has reached safe discharge capacity.',
    statNumber: SITE_CONFIG.stats.treatmentsCompleted,
    statLabel: 'Completed Treatments',
    image: getAssetPath('/images/hero-physio.jpg'),
  },
  {
    title: 'HCPC & CSP Accredited Care',
    description: 'All 9 clinicians hold full registration with the Health & Care Professions Council and the Chartered Society of Physiotherapy with postgraduate training.',
    statNumber: `${SITE_CONFIG.stats.yearsTrading} Years`,
    statLabel: 'Clinical Experience',
    image: getAssetPath('/images/clinic-plaque.jpg'),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#f5f8f6] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#16352f] uppercase">
              Clinical Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16352f] tracking-tight leading-tight">
              Why Choose Fysiotherapie Braakhuis Today
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              We focus on restoring mechanical movement rather than selling open-ended treatment packages. Verified data from our clinical records:
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white px-4 py-2 rounded-full border border-stone-200 text-xs font-semibold text-[#16352f] shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{SITE_CONFIG.stats.satisfactionRate} rating across {SITE_CONFIG.stats.reviewsCount} verified reviews</span>
            </div>
          </div>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-200"
            >
              {/* Card Image */}
              <div className="relative w-full h-52 bg-stone-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#16352f] border border-white/60 shadow-xs">
                  {item.statNumber} &bull; {item.statLabel}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#16352f] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Evidence-Based
                  </span>
                  <Link
                    href="/services"
                    className="text-xs font-bold text-[#16352f] hover:underline"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row Strip */}
        <div className="mt-14 bg-[#16352f] text-white rounded-2xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {SITE_CONFIG.stats.treatmentsCompleted}
            </div>
            <div className="text-xs text-stone-300 mt-1 uppercase tracking-wider">
              Treatments Completed
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {SITE_CONFIG.stats.replyTime}
            </div>
            <div className="text-xs text-stone-300 mt-1 uppercase tracking-wider">
              Avg. Response Time
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {SITE_CONFIG.stats.satisfactionRate}
            </div>
            <div className="text-xs text-stone-300 mt-1 uppercase tracking-wider">
              Patient Satisfaction
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {SITE_CONFIG.stats.teamSize} Clinicians
            </div>
            <div className="text-xs text-stone-300 mt-1 uppercase tracking-wider">
              HCPC Registered
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
