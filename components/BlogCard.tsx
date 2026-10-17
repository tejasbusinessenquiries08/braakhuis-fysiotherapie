import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/content/blogs';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-[#16352f]/40 hover:shadow-sm transition-all duration-200">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-[#16352f] uppercase tracking-wider bg-[#eaf1ec] px-3 py-0.5 rounded-full border border-[#d1ded4]">
            {post.category}
          </span>
          <span className="text-stone-500 font-medium">
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#16352f] tracking-tight leading-snug">
          {post.title}
        </h3>

        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 text-xs text-stone-700 leading-relaxed">
          <strong className="text-[#16352f] block mb-1">Direct Answer:</strong>
          {post.summaryAnswer}
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-stone-900">
            {post.author.name}
          </span>
          <span className="text-[11px] text-stone-500">
            {post.publishDate}
          </span>
        </div>

        <Link
          href={`/blogs#${post.slug}`}
          className="text-xs font-bold text-[#16352f] hover:underline"
        >
          Read article &rarr;
        </Link>
      </div>
    </article>
  );
}
