export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  focusArea: string;
  duration: string;
  price: string;
  indications: string[];
  notSuitableFor: string;
  treatmentApproach: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "manual-therapy",
    slug: "manual-therapy",
    title: "Manual Joint & Soft Tissue Therapy",
    shortDescription: "Hands-on joint mobilisation, soft tissue release, and spinal assessment to restore movement and reduce acute joint stiffness.",
    focusArea: "Spine, Neck, Shoulders & Hips",
    duration: "45 minutes",
    price: "£75",
    indications: [
      "Acute neck stiffness and cervicogenic headaches",
      "Thoracic spine restriction from prolonged desk work",
      "Restricted shoulder elevation and capsule tightness",
      "Sacroiliac joint discomfort and pelvic girdle asymmetry",
    ],
    notSuitableFor: "Undiagnosed fractures, acute rheumatoid flare-ups, severe osteoporosis, or radiating numbness accompanied by sudden muscle weakness.",
    treatmentApproach: [
      "Specific joint accessory motion assessment",
      "Grade I to IV passive joint mobilisations",
      "Myofascial trigger point deactivation",
      "Immediate active range testing and home corrective drills",
    ],
  },
  {
    id: "sports-rehabilitation",
    slug: "sports-rehabilitation",
    title: "Sports Injury Rehabilitation",
    shortDescription: "Objective force testing, progressive tendon loading, and return-to-sport criteria for runners, field athletes, and lifters.",
    focusArea: "Knees, Ankles, Hamstrings & Tendons",
    duration: "45 minutes",
    price: "£70",
    indications: [
      "Patellar and Achilles tendinopathy",
      "Grade 1 and 2 ankle ligament sprains",
      "Hamstring and groin strain rehabilitation",
      "Rotator cuff impingement in overhead athletes",
    ],
    notSuitableFor: "Suspected complete tendon ruptures (such as Thompson-positive Achilles rupture) or acute ligament tears requiring immediate orthopaedic consultation.",
    treatmentApproach: [
      "Handheld dynamometer strength symmetry testing",
      "Heavy slow resistance (HSR) tendon loading protocols",
      "Plyometric rate-of-force progression",
      "Video gait and landing mechanics analysis",
    ],
  },
  {
    id: "post-operative-recovery",
    slug: "post-operative-recovery",
    title: "Post-Operative Orthopaedic Recovery",
    shortDescription: "Structured phase-based rehabilitation following joint arthroscopy, ACL reconstruction, or hip and knee replacement.",
    focusArea: "Post-Surgical Knees, Hips & Shoulders",
    duration: "60 minutes",
    price: "£90",
    indications: [
      "Anterior cruciate ligament (ACL) reconstruction (Phases 1–4)",
      "Total knee and total hip arthroplasty rehabilitation",
      "Shoulder subacromial decompression and labral repairs",
      "Lumbar microdiscectomy post-surgical reactivation",
    ],
    notSuitableFor: "Patients with acute surgical site infections, unhealed surgical dehiscence, or active deep vein thrombosis (DVT) symptoms.",
    treatmentApproach: [
      "Surgical protocol timeline adherence and surgeon liaison",
      "Early passive and active-assisted range restoration",
      "Swelling management and neuromuscular quadriceps activation",
      "Closed-kinetic-chain functional strengthening",
    ],
  },
  {
    id: "spine-posture-care",
    slug: "spine-posture-care",
    title: "Spine & Posture Decompression",
    shortDescription: "Targeted clinical protocols for mechanical lower back pain, sciatica, and postural tension developed from desk work.",
    focusArea: "Cervical, Thoracic & Lumbar Spine",
    duration: "45 minutes",
    price: "£75",
    indications: [
      "Mechanical lower back pain and facet joint irritation",
      "Sciatica and nerve root sensitivity without motor deficit",
      "Postural fatigue between the shoulder blades",
      "Ergonomic work-station related spinal stiffness",
    ],
    notSuitableFor: "Sudden onset loss of bowel or bladder control, saddle anaesthesia, or progressive bilateral leg weakness (seek emergency A&E immediately).",
    treatmentApproach: [
      "Directional preference McKenzie assessment",
      "Segmental core stabiliser recruitment under load",
      "Thoracic spine extension and rotational drills",
      "Custom desk and seating ergonomic setup audit",
    ],
  },
  {
    id: "chronic-pain-management",
    slug: "chronic-pain-management",
    title: "Persistent Pain & Movement Desensitisation",
    shortDescription: "Graded movement exposure, nervous system down-regulation, and capacity building for pain persisting beyond normal tissue healing times.",
    focusArea: "Whole Body & Nervous System",
    duration: "45 minutes",
    price: "£75",
    indications: [
      "Musculoskeletal discomfort lasting longer than 12 weeks",
      "Movement apprehension and fear of re-injury",
      "Fibromyalgia and non-specific chronic spinal tension",
      "Persistent neck stiffness after resolved whiplash",
    ],
    notSuitableFor: "Individuals seeking quick passive cures or those unwilling to commit to progressive home movement protocols.",
    treatmentApproach: [
      "Pain neurophysiology education and goal setting",
      "Graded motor imagery and pacing strategies",
      "Low-threshold resistance training to rebuild confidence",
      "Sleep hygiene and nervous system regulation tracking",
    ],
  },
  {
    id: "geriatric-mobility-balance",
    slug: "geriatric-mobility-balance",
    title: "Mobility, Balance & Fall Prevention",
    shortDescription: "Evidence-based strength and balance training designed to maintain independent walking, stair climbing, and confidence at home.",
    focusArea: "Hips, Ankles & Core Equilibrium",
    duration: "45 minutes",
    price: "£65",
    indications: [
      "Age-related loss of walking confidence and balance unsteady",
      "Post-fall rehabilitation and confidence rebuilding",
      "Mild to moderate hip and knee osteoarthritis",
      "Difficulty rising from low armchairs or stairs",
    ],
    notSuitableFor: "Uncontrolled cardiac arrhythmias, severe unmanaged vestibular crises, or acute medical instability.",
    treatmentApproach: [
      "Validated Berg Balance Scale and Timed Up and Go (TUG) testing",
      "Sit-to-stand power and hip abductor strengthening",
      "Proprioceptive balance pad perturbations",
      "Safe transfer and practical home obstacle navigation",
    ],
  },
];
