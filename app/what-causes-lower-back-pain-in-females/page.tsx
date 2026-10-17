import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostLayout from '@/components/BlogPostLayout';
import { POST_P2 } from '@/content/what-causes-lower-back-pain-in-females';

export const metadata: Metadata = {
  title: POST_P2.metaTitle,
  description: POST_P2.metaDescription,
  alternates: {
    canonical: `/${POST_P2.slug}/`,
  },
  openGraph: {
    title: POST_P2.metaTitle,
    description: POST_P2.metaDescription,
    url: `https://braakhuis-fysiotherapie.com/${POST_P2.slug}/`,
    siteName: 'Braakhuis Fysiotherapie',
    locale: 'en_GB',
    type: 'article',
    publishedTime: POST_P2.publishDate,
    modifiedTime: POST_P2.updatedDate,
    authors: [POST_P2.author.name],
    images: [
      {
        url: '/og/og-image.png',
        width: 1200,
        height: 630,
        alt: POST_P2.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: POST_P2.metaTitle,
    description: POST_P2.metaDescription,
    images: ['/og/og-image.png'],
  },
};

export default function FemaleLowerBackPainCausesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow bg-[#fbfcfb]">
        <BlogPostLayout post={POST_P2} />
      </main>
      <Footer />
    </>
  );
}
