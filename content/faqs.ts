export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Do I need a GP referral before booking an appointment?",
    answer: "No. In the UK, you can self-refer directly to private physiotherapy. If you intend to claim through private health insurance (such as Bupa, AXA Health, or Aviva), check your specific policy terms as some insurers request an initial referral code.",
  },
  {
    question: "What happens during my initial assessment?",
    answer: "Your initial appointment lasts 45 minutes. Your physiotherapist conducts a clinical history review, objective orthopedic and neurological tests, joint range assessments, and functional movement checks. You receive a clear diagnosis, initial hands-on treatment where appropriate, and a documented home recovery plan before leaving.",
  },
  {
    question: "How much does a session cost and what payment methods are accepted?",
    answer: "An initial 45-minute assessment and diagnosis is £75. Follow-up 30-minute treatment sessions are £55. Sports rehabilitation sessions (45 minutes) are £70, and post-operative consultations (60 minutes) are £90. We accept all major debit/credit cards and provide itemised receipts for insurance reimbursement.",
  },
  {
    question: "How many sessions will I need before I see improvement?",
    answer: "Most straightforward joint and soft tissue conditions resolve within 4 to 6 sessions when you perform your prescribed home exercises daily. We review your measurable strength and mobility at every visit so you know exactly when you are ready to be discharged.",
  },
  {
    question: "When should I NOT book a physiotherapy appointment?",
    answer: "Do not book physiotherapy if you suspect an acute bone fracture, open wound, severe joint dislocation, or sudden loss of bladder/bowel control accompanied by leg numbness. These are medical red flags requiring immediate emergency room (A&E) evaluation.",
  },
  {
    question: "What should I wear to my appointment?",
    answer: "Wear comfortable, loose clothing that allows your physiotherapist to examine the affected joint. For lower body or back injuries, bring or wear gym shorts. For shoulder or neck issues, wear a singlet or sleeveless top.",
  },
];
