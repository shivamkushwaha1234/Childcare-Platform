export const INITIAL_DAYCARE_CENTERS = [
  {
    id: "center-1",
    name: "Tiny Tots 24×7 Crèche & Night Care",
    location: "Koramangala, Bengaluru",
    distance: "1.2 km away",
    is24x7: true,
    rating: 4.9,
    reviewsCount: 128,
    verifiedStatus: "Government Verified",
    safetyBadge: "CCTV & CPR Certified Staff",
    hourlyPrice: 150,
    dailyPrice: 1100,
    monthlyPrice: 14500,
    capacityTotal: 25,
    capacityAvailable: 6,
    ageGroups: ["Infant (0-1 yrs)", "Toddler (1-3 yrs)", "Preschool (3-5 yrs)"],
    timings: "24 Hours (Day / Night / Weekend Shifts)",
    images: [
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Karnataka State Licensed 24x7 Daycare Center offering round-the-clock shift-parent care, infant sleeper pods, CCTV mobile app monitoring, and background-checked pediatric nursing staff.",
    safetyMeasures: [
      "24/7 HD CCTV Surveillance",
      "Pediatric CPR & First Aid Certified Staff",
      "Biometric Access & Visitor Logbook",
      "Nutritious Organic Meals & Milk Storage",
      "Sanitized Quiet Sleep Pods"
    ],
    caregivers: [
      { id: "cg-1", name: "Ananya Sharma", role: "Lead Infant Caregiver", exp: "8 yrs exp", certified: true, avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" },
      { id: "cg-2", name: "Priya Nair", role: "Night Shift Specialist", exp: "5 yrs exp", certified: true, avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "center-2",
    name: "Little Stars Night & Day Sanctuary",
    location: "Indiranagar, Bengaluru",
    distance: "2.8 km away",
    is24x7: true,
    rating: 4.8,
    reviewsCount: 94,
    verifiedStatus: "Police & Fire Verified",
    safetyBadge: "On-Call Pediatrician",
    hourlyPrice: 180,
    dailyPrice: 1300,
    monthlyPrice: 16800,
    capacityTotal: 20,
    capacityAvailable: 4,
    ageGroups: ["Toddler (1-3 yrs)", "Preschool (3-5 yrs)", "School Age (5+ yrs)"],
    timings: "24 Hours (Night Shift Flexible)",
    images: [
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Premium childcare facility designed for corporate shift workers, doctor parents, and IT professionals requiring dependable 24/7 care with interactive early learning modules.",
    safetyMeasures: [
      "On-call Doctor & Emergency Vehicle",
      "Strict Fire Safety & Anti-slip Flooring",
      "Daily Health Check & Temperature Tracking",
      "Interactive STEAM Play Corner"
    ],
    caregivers: [
      { id: "cg-3", name: "Meera Deshmukh", role: "Montessori Educator", exp: "6 yrs exp", certified: true, avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "center-3",
    name: "Sunshine Early Years & Evening Care",
    location: "HSR Layout, Bengaluru",
    distance: "3.5 km away",
    is24x7: false,
    rating: 4.7,
    reviewsCount: 62,
    verifiedStatus: "Verified Daycare",
    safetyBadge: "Organic Meals & Play Gym",
    hourlyPrice: 120,
    dailyPrice: 900,
    monthlyPrice: 12000,
    capacityTotal: 30,
    capacityAvailable: 12,
    ageGroups: ["Infant (0-1 yrs)", "Toddler (1-3 yrs)", "Preschool (3-5 yrs)"],
    timings: "06:00 AM - 10:00 PM",
    images: [
      "https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Spacious, sunlit daycare center featuring sensory play areas, outdoor garden, and flexible extended evening hours till 10 PM.",
    safetyMeasures: [
      "Live Parent App Updates",
      "Purified Air Filtration",
      "CPR Certified Supervisors"
    ],
    caregivers: [
      { id: "cg-4", name: "Kavita Rao", role: "Early Childhood Specialist", exp: "7 yrs exp", certified: true, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "center-4",
    name: "Cradle & Care 24/7 Emergency Crèche",
    location: "Whitefield, Bengaluru",
    distance: "4.1 km away",
    is24x7: true,
    rating: 4.9,
    reviewsCount: 145,
    verifiedStatus: "Verified & ISO Certified",
    safetyBadge: "Night Nurse On-Duty",
    hourlyPrice: 200,
    dailyPrice: 1450,
    monthlyPrice: 18500,
    capacityTotal: 18,
    capacityAvailable: 3,
    ageGroups: ["Infant (0-1 yrs)", "Toddler (1-3 yrs)"],
    timings: "24 Hours (Emergency Booking Instant Confirmation)",
    images: [
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Specialized round-the-clock infant and toddler care unit located near major IT hubs and hospitals, offering instant emergency slot booking.",
    safetyMeasures: [
      "Registered Pediatric Nurses",
      "24/7 Security Guards & Access Control",
      "Hypoallergenic Linen & Cot Sanitization"
    ],
    caregivers: [
      { id: "cg-5", name: "Nurse Sunita Patil", role: "Registered Pediatric Nurse", exp: "10 yrs exp", certified: true, avatar: "https://images.unsplash.com/photo-1594824813566-88855ce783d2?auto=format&fit=crop&w=300&q=80" }
    ]
  }
];

export const INITIAL_BOOKINGS = [
  {
    id: "BK-9021",
    centerId: "center-1",
    centerName: "Tiny Tots 24×7 Crèche & Night Care",
    parentName: "Sneha Reddy",
    childName: "Aarav (2 yrs)",
    planType: "Night Shift Slot",
    timing: "Tonight, 08:00 PM - Tomorrow 08:00 AM",
    date: "2026-07-31",
    status: "Confirmed",
    amount: 1800,
    paymentStatus: "Paid via UPI",
    specialNotes: "Allergic to peanuts. Prefers warm milk before bed."
  },
  {
    id: "BK-8840",
    centerId: "center-2",
    centerName: "Little Stars Night & Day Sanctuary",
    parentName: "Vikram Malhotra",
    childName: "Riya (4 yrs)",
    planType: "Monthly Subscription",
    timing: "Full Month Pass",
    date: "2026-08-01 to 2026-08-31",
    status: "Active",
    amount: 16800,
    paymentStatus: "Paid via Card",
    specialNotes: "Pick up by mother at 6:30 PM."
  }
];

export const INITIAL_VERIFICATION_QUEUE = [
  {
    id: "VER-104",
    applicantName: "Blossoms 24/7 Kids Zone",
    applicantType: "Childcare Center",
    city: "Bengaluru (Electronic City)",
    submittedDate: "2026-07-29",
    documents: ["Government Trade License.pdf", "Fire Safety Compliance.pdf", "Police Clearance.pdf"],
    status: "Pending Review",
    riskScore: "Low Risk"
  },
  {
    id: "VER-105",
    applicantName: "Deepa Verma",
    applicantType: "Individual Caregiver",
    city: "Bengaluru (Bellandur)",
    submittedDate: "2026-07-30",
    documents: ["Aadhaar Verification.pdf", "CPR First Aid Certificate.pdf", "Background Check.pdf"],
    status: "Pending Review",
    riskScore: "Low Risk"
  }
];

export const SUBSCRIPTION_PLANS = [
  {
    id: "sub-starter",
    name: "Flexi Day Pass",
    price: 3499,
    billing: "per month",
    features: [
      "30 hours of monthly daytime daycare",
      "Real-time availability slot booking",
      "Verified center access",
      "Basic health check updates"
    ],
    recommended: false
  },
  {
    id: "sub-nightflex",
    name: "Night-Shift Hero",
    price: 7999,
    billing: "per month",
    features: [
      "60 hours of overnight 24x7 crèche care",
      "Priority emergency night slot allocation",
      "Dedicated infant sleep pod",
      "CCTV Live App check-in",
      "24/7 Nurse on-call"
    ],
    recommended: true
  },
  {
    id: "sub-unlimited",
    name: "24×7 Total Freedom",
    price: 14999,
    billing: "per month",
    features: [
      "Unlimited Day & Night daycare hours",
      "Multi-center drop-in access across city",
      "Dedicated primary caregiver assignment",
      "Organic meal & snack package included",
      "Zero cancellation charges"
    ],
    recommended: false
  }
];

export const PLATFORM_ANALYTICS = {
  registeredUsers: 1420,
  verifiedCenters: 48,
  activeBookingsThisMonth: 612,
  bookingConversionRate: "78.4%",
  avgDaycareUtilization: "84.2%",
  activeSubscriptions: 285
};
