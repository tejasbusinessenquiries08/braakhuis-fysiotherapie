import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BLOG_POSTS } from '@/content/blogs';

export const metadata: Metadata = {
  title: 'Clinical Physiotherapy Guides & Recovery Articles',
  description: 'Evidence-based articles on tendon recovery, back stiffness, session counts, and joint biomechanics written by registered physiotherapists.',
  alternates: {
    canonical: '/blogs',
  },
};

export default function BlogsPage() {
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Braakhuis Fysiotherapie Clinical Guides',
    description: 'Evidence-based articles on tendon recovery, back stiffness, and joint rehabilitation.',
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: '2026-09-15',
      author: {
        '@type': 'Person',
        name: post.author.name,
        jobTitle: post.author.role,
      },
    })),
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-[#fbfcfb] py-12 lg:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: 'Blogs', href: '/blogs' }]} />

          {/* Page Banner Header */}
          <div className="mt-6 mb-16 max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#16352f] uppercase bg-[#e6ede8] px-3.5 py-1.5 rounded-full border border-[#c9d8ce]">
              Clinical Knowledge Base
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#16352f] tracking-tight leading-tight">
              Physiotherapy Guides & Rehabilitation Science
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Every guide starts with the direct clinical answer. No filler, no speculation, and zero machine-generated fluff. Written by practicing chartered physiotherapists.
            </p>
          </div>

          {/* Detailed Articles Grid */}
          <div className="space-y-16">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                id={post.slug}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xs space-y-8"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#16352f] uppercase tracking-wider bg-[#eaf1ec] px-3 py-1 rounded-full border border-[#d1ded4]">
                      {post.category}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      Published {post.publishDate}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16352f] tracking-tight leading-snug">
                  {post.title}
                </h2>

                {/* Direct Answer Box (Rule: Start with the answer) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#f4f7f5] border border-[#d2ded5] space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#16352f] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#16352f]" />
                    Direct Clinical Answer
                  </div>
                  <p className="text-sm sm:text-base text-stone-800 font-medium leading-relaxed">
                    {post.summaryAnswer}
                  </p>
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed max-w-4xl">
                  {post.contentParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Key Takeaways */}
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                    Clinical Takeaways:
                  </h3>
                  <ul className="space-y-2">
                    {post.keyTakeaways.map((point, i) => (
                      <li key={i} className="text-xs sm:text-sm text-stone-700 flex items-start gap-2.5">
                        <span className="text-[#16352f] font-black">&bull;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Counter-Indication Caution Box */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                  <strong>When this guidance does NOT apply:</strong> {post.notSuitableFor}
                </div>

                {/* Author Byline & CTA */}
                <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#16352f] text-white flex items-center justify-center font-bold text-sm">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-stone-900">
                        {post.author.name}
                      </div>
                      <div className="text-xs text-stone-500">
                        {post.author.role}
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#16352f] text-white hover:bg-[#102722] transition-colors"
                  >
                    Discuss With A Clinician
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Guidance Box */}
          <div className="mt-16 bg-[#16352f] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Have questions about your specific injury?
            </h2>
            <p className="text-sm text-stone-300 max-w-xl mx-auto leading-relaxed">
              Read our frequently asked questions or book an individual examination with our musculoskeletal team.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/#faqs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-transparent border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                Read FAQs
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#16352f] hover:bg-stone-100 transition-colors shadow-sm"
              >
                Book Appointment
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
