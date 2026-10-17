import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AnatomicalFocus from '@/components/AnatomicalFocus';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSection from '@/components/ServicesSection';
import WhenNotToHire from '@/components/WhenNotToHire';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Braakhuis Fysiotherapie | Evidence-Based Physiotherapy & Recovery',
  description: 'Targeted physiotherapy for joint stiffness, tendon pain, and post-operative recovery. Private 1-on-1 consultations in central London.',
  alternates: {
    canonical: './',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <AnatomicalFocus />
        <WhyChooseUs />
        <ServicesSection />
        <WhenNotToHire />
        <BlogSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
