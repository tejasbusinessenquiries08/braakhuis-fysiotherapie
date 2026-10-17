import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/content/services';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-[#16352f]/40 hover:shadow-sm transition-all duration-200">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#16352f] uppercase tracking-wider bg-[#eaf1ec] px-3 py-1 rounded-full border border-[#d1ded4]">
            {service.focusArea}
          </span>
          <span className="text-base font-extrabold text-[#16352f]">
            {service.price} <span className="text-xs font-normal text-stone-500">/ {service.duration}</span>
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#16352f] tracking-tight">
          {service.title}
        </h3>

        <p className="text-sm text-stone-600 leading-relaxed">
          {service.shortDescription}
        </p>

        <div className="pt-2 border-t border-stone-100 space-y-2">
          <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
            Common Indications:
          </span>
          <ul className="space-y-1.5">
            {service.indications.slice(0, 3).map((item, idx) => (
              <li key={idx} className="text-xs text-stone-600 flex items-start gap-2">
                <span className="text-[#16352f] font-bold mt-0.5">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
        <span className="text-xs text-stone-500">
          Private Suite
        </span>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#16352f] text-white hover:bg-[#102722] transition-colors"
        >
          Book Session
        </Link>
      </div>
    </article>
  );
}
