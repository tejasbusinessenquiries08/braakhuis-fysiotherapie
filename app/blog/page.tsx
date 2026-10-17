import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ALL_POSTS } from '@/content/posts';

export const metadata: Metadata = {
  title: 'Clinical Physiotherapy Guides & Recovery Articles',
  description: 'Evidence-based articles on female back pain, tendon recovery, and spinal mechanics written by registered physiotherapists.',
  alternates: {
    canonical: '/blog/',
  },
};

export default function BlogIndexPage() {
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Braakhuis Fysiotherapie Clinical Guides',
    description: 'Evidence-based articles on female back pain, tendon recovery, and joint rehabilitation.',
    blogPost: ALL_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishDate,
      author: {
        '@type': 'Person',
        name: post.author.name,
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
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }]} />

          <div className="mt-6 mb-16 max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#16352f] uppercase bg-[#e6ede8] px-3.5 py-1.5 rounded-full border border-[#c9d8ce]">
              Clinical Knowledge Base
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#16352f] tracking-tight leading-tight">
              Physiotherapy Guides & Rehabilitation Science
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Every guide starts with the direct clinical answer in plain, straightforward language. Written by practicing chartered physiotherapists.
            </p>
          </div>

          <div className="space-y-12">
            {ALL_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xs space-y-6 hover:border-[#16352f]/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#16352f] uppercase tracking-wider bg-[#eaf1ec] px-3 py-1 rounded-full border border-[#d1ded4]">
                      {post.cluster}
                    </span>
                    <span className="text-stone-500 font-medium">
                      Published {post.publishDate}
                    </span>
                  </div>
                  <span className="font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                    {post.readingTime}
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16352f] tracking-tight leading-snug">
                    <Link href={`/${post.slug}/`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-base text-stone-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#f4f7f5] border border-[#d2ded5] text-sm text-stone-800 leading-relaxed">
                  <strong className="text-[#16352f] block text-xs font-bold uppercase tracking-wider mb-1">
                    Direct Answer:
                  </strong>
                  {post.directAnswer}
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    By {post.author.name}, {post.author.role}
                  </span>
                  <Link
                    href={`/${post.slug}/`}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#16352f] text-white hover:bg-[#102722] transition-colors"
                  >
                    Read Full Guide &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
