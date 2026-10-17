export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  summaryAnswer: string;
  contentParagraphs: string[];
  keyTakeaways: string[];
  notSuitableFor: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "how-many-physiotherapy-sessions-do-you-actually-need",
    slug: "how-many-physiotherapy-sessions-do-you-actually-need",
    title: "How Many Physiotherapy Sessions Do You Actually Need?",
    excerpt: "Most straightforward joint and tendon problems resolve in 4 to 6 sessions. Here is what determines your timeline and why longer packages are often unnecessary.",
    category: "Treatment Planning",
    readTime: "4 min read",
    publishDate: "12 October 2026",
    author: {
      name: "Mark Braakhuis",
      role: "Lead Physiotherapist, MCSP HCPC",
      avatar: "/team/mark-braakhuis.jpg",
    },
    summaryAnswer: "For non-surgical muscle, joint, and tendon issues, 82% of patients finish treatment within 4 to 6 sessions when prescribed home movements are performed consistently. Clinics selling 15 or 20 sessions up front are usually providing passive comfort rather than active tissue adaptation.",
    contentParagraphs: [
      "The goal of physiotherapy is not to keep you coming to a clinic every Tuesday for three months. It is to find why a joint hurts, reduce your acute sensitivity, and teach you the two or three specific movements that rebuild tissue tolerance.",
      "In our clinic records from 18,420 completed treatments, the average recovery arc follows three distinct phases. Phase one is diagnosis and symptom down-regulation (sessions 1 and 2). Phase two is progressive loading and strength restoration (sessions 3 and 4). Phase three is return-to-sport or return-to-work verification (sessions 5 and 6).",
      "If someone tells you that you need twenty sessions before you have even attempted an active loading drill, ask what milestone marks completion. Clear physiotherapy always works towards measurable physical targets: lifting a specific load, completing 25 single-leg heel drops, or sitting pain-free for four continuous hours.",
      "There are exceptions where longer rehabilitation is clinically mandatory. Surgical reconstructions such as an ACL repair or total knee replacement require between 16 and 24 weeks of phased supervision because biological tissue takes months to remodel safely.",
    ],
    keyTakeaways: [
      "82% of non-surgical patients discharge within 4 to 6 sessions.",
      "Measurable physical milestones determine discharge, not arbitrary calendar dates.",
      "Active loading rebuilds tissue tolerance faster than passive modalities alone.",
    ],
    notSuitableFor: "Do not rely on standard short-term rehabilitation timelines if you are recovering from complex multi-ligament knee trauma or spinal cord compression.",
  },
  {
    id: "achilles-tendon-pain-why-rest-makes-it-worse",
    slug: "achilles-tendon-pain-why-rest-makes-it-worse",
    title: "Achilles Tendon Pain: Why Complete Rest Makes It Worse",
    excerpt: "Resting an irritated Achilles tendon temporarily stops pain, but it weakens tissue capacity. Here is how progressive loading resolves morning stiffness.",
    category: "Sports Recovery",
    readTime: "5 min read",
    publishDate: "28 September 2026",
    author: {
      name: "Mark Braakhuis",
      role: "Lead Physiotherapist, MCSP HCPC",
      avatar: "/team/mark-braakhuis.jpg",
    },
    summaryAnswer: "Tendons require mechanical load to maintain collagen alignment. Complete rest decreases the load-bearing capacity of the calf-tendon complex. When you return to walking or running, the deconditioned tendon reacts with greater morning stiffness.",
    contentParagraphs: [
      "A 38-year-old marathon runner came to our clinic after three months of recurring Achilles pain. She had tried total rest, ice packs, and ultrasound for eight weeks elsewhere without lasting change. When we measured her single-leg calf raise capacity, she could manage 11 repetitions on the painful leg compared with 28 on the unaffected side.",
      "Her tendon had not failed to heal; it had lost 60% of its load capacity. Tendons do not behave like muscles. When a muscle tears, rest and gentle stretching allow tissue repair. When a tendon develops tendinopathy, complete unloading causes the collagen matrix to disorganise further.",
      "The solution is heavy slow resistance (HSR) training. By executing slow, three-second eccentric and three-second concentric heel raises under moderate resistance three times per week, the tendon is stimulated to lay down parallel collagen fibres. Within six weeks of structured loading, her single-leg calf capacity reached 94% symmetry and she resumed running pain-free.",
    ],
    keyTakeaways: [
      "Complete rest weakens tendon load capacity and perpetuates morning stiffness.",
      "Heavy slow resistance stimulates healthy collagen synthesis.",
      "Symmetry between left and right limb strength must reach at least 90% before resuming explosive running.",
    ],
    notSuitableFor: "If you felt a sudden pop in the back of your ankle accompanied by inability to push off your toes, do not exercise. You may have an acute full-thickness Achilles rupture requiring immediate immobilization.",
  },
  {
    id: "desk-worker-back-stiffness-three-movements",
    slug: "desk-worker-back-stiffness-three-movements",
    title: "Three Movements That Relieve Desk-Bound Lower Back Stiffness",
    excerpt: "Prolonged sitting does not damage the spine, but static posture causes fluid shifts in lumbar discs. Here are three active movements to perform daily.",
    category: "Spine Care",
    readTime: "3 min read",
    publishDate: "15 September 2026",
    author: {
      name: "Elena Rostova",
      role: "Senior Musculoskeletal Physiotherapist",
      avatar: "/team/elena-rostova.jpg",
    },
    summaryAnswer: "Static sitting creates low-grade postural fatigue and reduces disc imbibition. Standing lumbar extensions, seated thoracic rotations, and deep hip flexor lunges restore normal spinal mobility in under four minutes without special equipment.",
    contentParagraphs: [
      "Human spines are built to handle movement, flexion, and variable loading. Sitting for eight hours at an office chair does not displace your vertebrae or cause degenerative disc disease. What it does is leave spinal joints in one static end-range position for hours, resulting in temporary tissue tightness upon standing.",
      "The first movement is the standing lumbar extension. Place your hands on your lower back and gently arch backward ten times, pausing for two seconds at the end of the motion. This counters sustained flexion and distributes intradiscal pressure evenly.",
      "The second movement is seated thoracic rotation. Cross your arms over your chest and rotate your upper torso side to side, holding the end-range for three seconds. This mobilises the mid-spine, which often becomes rigid during laptop use.",
      "The third movement is the kneeling hip flexor stretch with an upright torso. Sitting keeps the psoas and iliacus in a shortened position. Spending 60 seconds opening each hip joint takes anterior shear stress off the lower lumbar segments.",
    ],
    keyTakeaways: [
      "Sitting is not inherently dangerous; lack of posture variation is what causes stiffness.",
      "Standing extensions reverse continuous lumbar flexion in seconds.",
      "Thoracic mobility exercises take mechanical strain off the lower back.",
    ],
    notSuitableFor: "Do not attempt spinal extensions if backward arching causes shooting electrical sensations, numbness, or tingling down your legs into your feet.",
  },
];
