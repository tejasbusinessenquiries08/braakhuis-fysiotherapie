import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostLayout from '@/components/BlogPostLayout';
import { POST_P9 } from '@/content/neck-pain-reasons';

export const metadata: Metadata = {
  title: POST_P9.metaTitle,
  description: POST_P9.metaDescription,
  alternates: {
    canonical: `/${POST_P9.slug}/`,
  },
  openGraph: {
    title: POST_P9.metaTitle,
    description: POST_P9.metaDescription,
    url: `https://braakhuis-fysiotherapie.com/${POST_P9.slug}/`,
    siteName: 'Braakhuis Fysiotherapie',
    locale: 'en_GB',
    type: 'article',
    publishedTime: POST_P9.publishDate,
    modifiedTime: POST_P9.updatedDate,
    authors: [POST_P9.author.name],
    images: [
      {
        url: '/og/og-image.png',
        width: 1200,
        height: 630,
        alt: POST_P9.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: POST_P9.metaTitle,
    description: POST_P9.metaDescription,
    images: ['/og/og-image.png'],
  },
};

export default function NeckPainReasonsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-[#fbfcfb]">
        <BlogPostLayout post={POST_P9} />
      </main>
      <Footer />
    </>
  );
}
