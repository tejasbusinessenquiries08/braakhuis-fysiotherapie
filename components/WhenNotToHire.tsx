import React from 'react';
import Link from 'next/link';

export default function WhenNotToHire() {
  return (
    <section id="when-not-to-hire" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">
              Clinical Transparency
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16352f] tracking-tight">
            When NOT to book with us
          </h2>

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            Physiotherapy is effective for restoring mechanical joint, tendon, and muscle capacity. However, booking with us is the wrong step in the following situations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#fafbf9] border border-stone-200/80 space-y-2">
              <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <span className="text-amber-600 font-bold">&bull;</span>
                Acute trauma and suspected bone fractures
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                If you suffered high-impact trauma, cannot bear weight immediately after an impact, or have visible limb deformity, go directly to your nearest hospital A&E department for an urgent X-ray.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fafbf9] border border-stone-200/80 space-y-2">
              <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <span className="text-amber-600 font-bold">&bull;</span>
                Spinal red flags and cauda equina symptoms
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                If your back pain is accompanied by loss of bladder or bowel sensation, saddle numbness around your groin, or progressive bilateral foot drop, this is a surgical emergency requiring immediate emergency attention.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fafbf9] border border-stone-200/80 space-y-2">
              <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <span className="text-amber-600 font-bold">&bull;</span>
                Systemic inflammation or joint infection
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                A single hot, swollen, throbbing red joint accompanied by fever or chills requires blood analysis and antibiotic evaluation by your General Practitioner, not manual joint mobilization.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fafbf9] border border-stone-200/80 space-y-2">
              <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <span className="text-amber-600 font-bold">&bull;</span>
                You are looking for passive, effort-free cures
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                If you do not plan to perform 8 to 12 minutes of prescribed home rehabilitation exercises three times weekly, hands-on treatment alone will not yield lasting tissue remodelling.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-stone-500 font-medium">
              Not sure if your condition is suitable? Call our triage desk for straight advice.
            </span>
            <Link
              href="/#contact"
              className="inline-flex items-center text-xs font-bold text-[#16352f] hover:underline"
            >
              Ask our triage physiotherapist &rarr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
