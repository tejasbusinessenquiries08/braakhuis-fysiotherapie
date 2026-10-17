export interface BlogAuthor {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  avatarUrl: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface BlogBodySection {
  id: string;
  heading: string;
  paragraphs: string[];
  callout?: {
    type: 'note' | 'red-flag' | 'stat';
    title?: string;
    text: string;
  };
  bullets?: string[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface InternalLinkItem {
  anchorText: string;
  url: string;
  description?: string;
}

export interface ExternalLinkItem {
  anchorText: string;
  url: string;
  sourceName: string;
}

export interface BlogPostData {
  id: string;
  slug: string;
  cluster: string;
  funnelStage: 'TOFU' | 'MOFU' | 'BOFU';
  role: 'pillar' | 'supporting' | 'variant' | 'standalone';
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  excerpt: string;
  publishDate: string;
  updatedDate: string;
  readingTime: string;
  author: BlogAuthor;
  directAnswer: string;
  tableOfContents: TableOfContentsItem[];
  bodySections: BlogBodySection[];
  whenNotToHire: {
    heading: string;
    intro: string;
    redFlags: string[];
    clinicAdvice: string;
  };
  faqs: BlogFaq[];
  internalLinks: InternalLinkItem[];
  externalLinks: ExternalLinkItem[];
  pendingInternalLinks: {
    slug: string;
    title: string;
    note: string;
  }[];
}
