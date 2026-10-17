'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/content/site';

interface FocusPoint {
  id: string;
  name: string;
  top: string;
  left: string;
  symptoms: string;
  treatment: string;
}

const FOCUS_POINTS: FocusPoint[] = [
  {
    id: 'neck',
    name: 'Cervical Spine & Neck',
    top: '18%',
    left: '49%',
    symptoms: 'Postural neck stiffness, tension headaches, cervical facet irritation.',
    treatment: 'Gentle spinal mobilisations, deep neck flexor recruitment, ergonomic desk modification.',
  },
  {
    id: 'shoulder',
    name: 'Shoulder & Rotator Cuff',
    top: '28%',
    left: '32%',
    symptoms: 'Subacromial impingement, rotator cuff tendinopathy, frozen shoulder restriction.',
    treatment: 'Scapulothoracic re-education, eccentric rotator cuff loading, joint capsule release.',
  },
  {
    id: 'lower-back',
    name: 'Lumbar Spine & Sciatica',
    top: '55%',
    left: '50%',
    symptoms: 'Mechanical lower back pain, discogenic nerve sensitivity, postural ache.',
    treatment: 'McKenzie directional preference, core stabiliser progression, graded flexion/extension.',
  },
  {
    id: 'knee',
    name: 'Knee Joint & Patellar Tendon',
    top: '78%',
    left: '42%',
    symptoms: 'Patellofemoral pain, meniscus wear, runner’s knee, post-surgical stiffness.',
    treatment: 'Quadriceps force capacity training, hip abductor strengthening, gait retraining.',
  },
  {
    id: 'ankle',
    name: 'Ankle & Achilles Tendon',
    top: '92%',
    left: '56%',
    symptoms: 'Achilles tendinopathy, lateral ligament sprains, plantar fascia sensitivity.',
    treatment: 'Heavy slow resistance calf drops, proprioceptive wobble testing, return-to-run protocols.',
  },
];

export default function AnatomicalFocus() {
  const [activePoint, setActivePoint] = useState<FocusPoint>(FOCUS_POINTS[2]); // Default: lower-back

  return (
    <section id="focus-areas" className="py-20 lg:py-28 bg-white border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Anatomical Card with Interactive Pain Points */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#e6ede8] p-6 sm:p-8 rounded-3xl border border-[#d2ded5] shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-[#16352f] bg-white/70 px-3 py-1 rounded-full border border-[#c3d3c7]">
                  Interactive Body Map
                </span>
                <span className="text-[11px] text-stone-600 font-medium">
                  Select an indicator point
                </span>
              </div>

              {/* Anatomy Diagram Container */}
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-white/40 flex items-center justify-center border border-white/60">
                <Image
                  src={getAssetPath('/images/anatomy-diagram.jpg')}
                  alt="Anatomical diagram of human musculoskeletal points"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Interactive Indicator Hotspots */}
                {FOCUS_POINTS.map((point) => {
                  const isSelected = activePoint.id === point.id;
                  return (
                    <button
                      key={point.id}
                      type="button"
                      onClick={() => setActivePoint(point)}
                      style={{ top: point.top, left: point.left }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 z-10 ${
                        isSelected
                          ? 'bg-[#16352f] ring-4 ring-[#16352f]/30 scale-125'
                          : 'bg-red-500 hover:scale-110 shadow'
                      }`}
                      aria-label={`Select ${point.name}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-white" />
                    </button>
                  );
                })}
              </div>

              {/* Active Point Callout Box */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-[#c9d8ce] text-left">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#16352f]">
                    {activePoint.name}
                  </h4>
                  <span className="text-[10px] font-semibold tracking-wider text-[#16352f] uppercase bg-[#e9f1eb] px-2 py-0.5 rounded">
                    Active Target
                  </span>
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  <strong>Common issues:</strong> {activePoint.symptoms}
                </p>
                <p className="text-xs text-stone-700 mt-1">
                  <strong>Our treatment:</strong> {activePoint.treatment}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Bullet Points (matching screenshot) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#16352f] uppercase">
                Targeted Rehabilitation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16352f] tracking-tight leading-tight">
                Care Focused on the Areas That Matter Most
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">
                At Fysiotherapie Braakhuis, we help you recover through physiotherapy. Pain is rarely random; we locate the specific joint, tendon, or muscle restriction and apply structured clinical protocols.
              </p>
            </div>

            {/* Feature Bullets with Arrow Icons (matching screenshot) */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#16352f] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-2.5 h-2.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-stone-900">
                    Personalized treatment for every body area
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    We tailor every movement prescription to your specific joint mechanics and baseline strength.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#16352f] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-2.5 h-2.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-stone-900">
                    Focused care for pain and movement recovery
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    Combining hands-on joint mobilisation with progressive loading to down-regulate irritation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#16352f] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-2.5 h-2.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-stone-900">
                    Improve flexibility, posture, and mobility
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    Targeting end-range joint control so you stay resilient during sport and daily activities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#16352f] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-2.5 h-2.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-stone-900">
                    Professional guidance with human-centered support
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                    Direct one-on-one sessions in private treatment suites with dedicated HCPC-registered clinicians.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-[#16352f] text-white hover:bg-[#102722] transition-colors shadow-sm"
              >
                View Detailed Services
              </Link>
              <Link
                href="/#contact"
                className="text-xs font-bold text-[#16352f] hover:underline tracking-wider uppercase"
              >
                Check Appointment Availability &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
