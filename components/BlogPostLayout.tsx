import React from 'react';
import Link from 'next/link';
import { BlogPostData } from '@/content/types';
import Breadcrumbs from './Breadcrumbs';

interface BlogPostLayoutProps {
  post: BlogPostData;
}

export default function BlogPostLayout({ post }: BlogPostLayoutProps) {
  const BASE_URL = 'https://braakhuis-fysiotherapie.com';
  const postUrl = `${BASE_URL}/${post.slug}/`;

  // Structured Data (JSON-LD): BlogPosting / Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      description: post.author.credentials,
      url: `${BASE_URL}/#why-us`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Braakhuis Fysiotherapie',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/clinic-plaque.jpg`,
      },
    },
    image: `${BASE_URL}/og/og-image.png`,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(', '),
  };

  // Structured Data (JSON-LD): FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog/' },
          { label: post.title, href: `/${post.slug}/` },
        ]}
      />

      {/* Article Header */}
      <header className="mt-6 mb-10 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="font-bold text-[#16352f] uppercase tracking-wider bg-[#e6ede8] px-3 py-1 rounded-full border border-[#c9d8ce]">
            {post.cluster}
          </span>
          <span className="text-stone-500 font-medium">
            Published {post.publishDate}
          </span>
          <span className="text-stone-400">&bull;</span>
          <span className="text-stone-500 font-medium">
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16352f] tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Author Byline Box */}
        <div className="pt-4 border-t border-stone-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#16352f] text-white flex items-center justify-center font-bold text-base shrink-0 shadow-xs">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-bold text-stone-900">
              {post.author.name}
            </div>
            <div className="text-xs text-stone-500">
              {post.author.credentials}
            </div>
          </div>
        </div>
      </header>

      {/* First 100 Words Direct Answer Box (Mandatory rule: Start with the answer) */}
      <div className="p-6 sm:p-7 rounded-2xl bg-[#f4f7f5] border border-[#d2ded5] mb-12 shadow-xs space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#16352f] flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#16352f]" />
          Direct Answer
        </span>
        <p className="text-base sm:text-lg text-stone-900 font-medium leading-relaxed">
          {post.directAnswer}
        </p>
      </div>

      {/* Table of Contents */}
      <nav
        aria-label="Table of Contents"
        className="mb-12 p-6 rounded-2xl bg-stone-50 border border-stone-200/90"
      >
        <h2 className="text-sm font-bold text-[#16352f] uppercase tracking-wider mb-3">
          In this guide
        </h2>
        <ul className="space-y-2 text-sm">
          {post.tableOfContents.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-stone-700 hover:text-[#16352f] hover:underline transition-colors flex items-center gap-2"
              >
                <span className="text-stone-400">&rarr;</span>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Body Sections */}
      <div className="space-y-12 text-stone-800 leading-relaxed text-base sm:text-lg">
        {post.bodySections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16352f] tracking-tight pt-4 border-t border-stone-100">
              {section.heading}
            </h2>

            {section.callout && (
              <div
                className={`p-5 rounded-2xl border ${
                  section.callout.type === 'red-flag'
                    ? 'bg-rose-50/70 border-rose-200 text-rose-950'
                    : 'bg-[#f4f7f5] border-[#d2ded5] text-stone-900'
                } text-sm sm:text-base leading-relaxed`}
              >
                {section.callout.title && (
                  <strong className="block font-bold mb-1 uppercase tracking-wider text-xs">
                    {section.callout.title}
                  </strong>
                )}
                {section.callout.text}
              </div>
            )}

            {section.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {section.bullets && (
              <ul className="space-y-2.5 my-4 pl-2">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-stone-700">
                    <span className="text-[#16352f] font-black mt-1">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Internal & External Authoritative Links Section */}
      <section className="my-14 pt-8 border-t border-stone-200">
        <h2 className="text-xl font-bold text-[#16352f] mb-4">
          Authoritative Sources & Clinical Guidelines
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Medical References
            </h3>
            <ul className="space-y-2 text-sm">
              {post.externalLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#16352f] font-semibold hover:underline flex items-center gap-1.5"
                  >
                    <span>{link.anchorText}</span>
                    <span className="text-xs text-stone-400">({link.sourceName})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Relevant Clinic Services
            </h3>
            <ul className="space-y-2 text-sm">
              {post.internalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.url}
                    className="text-[#16352f] font-semibold hover:underline block"
                  >
                    {link.anchorText}
                  </Link>
                  {link.description && (
                    <span className="text-xs text-stone-500 block">
                      {link.description}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="my-16 pt-8 border-t border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16352f] tracking-tight mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {post.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#16352f]">
                {faq.question}
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Author Bio Box */}
      <footer className="my-12 p-6 sm:p-8 rounded-3xl bg-[#f5f8f6] border border-stone-200/90 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-[#16352f] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm">
          {post.author.name.charAt(0)}
        </div>
        <div className="space-y-1 text-left">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
            Written and reviewed by
          </span>
          <h3 className="text-lg font-bold text-stone-900">
            {post.author.name}, {post.author.credentials}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {post.author.bio}
          </p>
        </div>
      </footer>
    </article>
  );
}
