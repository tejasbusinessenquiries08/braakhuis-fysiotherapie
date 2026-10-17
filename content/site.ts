export interface NavItem {
  label: string;
  href: string;
}

export const SITE_CONFIG = {
  name: "Braakhuis Fysiotherapie",
  legalName: "Braakhuis Physiotherapy & Rehabilitation Clinics Ltd",
  kicker: "INDIA'S PREMIUM PHYSIOTHERAPY & RECOVERY CHAIN",
  phone: "+44 (0)20 7946 0812",
  email: "clinic@braakhuis-fysiotherapie.com",
  address: {
    street: "14 Cavendish Square",
    city: "London",
    postcode: "W1G 9DJ",
    country: "United Kingdom",
  },
  openingHours: [
    "Monday to Friday: 07:30 – 19:30",
    "Saturday: 08:30 – 14:00",
    "Sunday: Closed",
  ],
  stats: {
    treatmentsCompleted: "18,420",
    satisfactionRate: "4.9/5",
    reviewsCount: "412",
    yearsTrading: "14",
    teamSize: "9",
    replyTime: "42 minutes",
  },
  navItems: [
    { label: "Our Services", href: "/services" },
    { label: "Blogs", href: "/blogs" },
    { label: "Focus Areas", href: "/#focus-areas" },
    { label: "Why Us", href: "/#why-us" },
    { label: "When NOT to Hire", href: "/#when-not-to-hire" },
    { label: "FAQs", href: "/#faqs" },
  ] as NavItem[],
};

export function getAssetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path.startsWith('/')) {
    return `${base}/${path}`;
  }
  return `${base}${path}`;
}
