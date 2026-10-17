import { BlogPostData } from '../types';
import { POST_P2 } from '../what-causes-lower-back-pain-in-females';
import { POST_P9 } from '../neck-pain-reasons';

export const ALL_POSTS: BlogPostData[] = [
  POST_P2,
  POST_P9,
];

export function getPostBySlug(slug: string): BlogPostData | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return ALL_POSTS.map((p) => p.slug);
}
