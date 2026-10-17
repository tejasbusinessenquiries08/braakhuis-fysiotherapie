import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/content/blogs';
import BlogCard from './BlogCard';

export default function BlogSection() {
  return (
    <section id="blogs" className="py-20 lg:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#16352f] uppercase">
              Clinical Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16352f] tracking-tight leading-tight">
              Evidence-Based Recovery Guides
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Straight answers to common musculoskeletal questions written by HCPC-registered physiotherapists. Backed by clinical records and tissue science.
            </p>
          </div>

          <div>
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase border border-[#16352f] text-[#16352f] hover:bg-[#16352f] hover:text-white transition-colors"
            >
              View All Articles &rarr;
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}
