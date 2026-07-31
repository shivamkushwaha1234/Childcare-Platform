import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: "How does 24×7 booking work for night shifts?",
    a: "Parents working late or on night shifts can search centers with the '24×7 Only' filter. Slots can be booked hourly, as a dedicated night-shift pass, or as an emergency drop-in. Centers have dedicated quiet sleeper pods and on-duty night pediatric nurses."
  },
  {
    q: "How are caregivers and childcare centers verified on Little Steps?",
    a: "Every daycare center undergoes a multi-point audit including government license verification, fire safety compliance, and biometric access checks. Caregivers undergo mandatory police background verification and CPR/First Aid certification verification."
  },
  {
    q: "Can I monitor my child during daytime or night daycare?",
    a: "Yes! Participating centers offer secure, encrypted CCTV app access to registered parents during their child's active check-in session. Caregivers also send real-time health, meal, and sleep updates."
  },
  {
    q: "What is the cancellation policy for daycare bookings?",
    a: "Hourly and daily bookings can be cancelled up to 2 hours prior to start time for a full refund. Monthly subscription holders enjoy unlimited free rescheduling."
  },
  {
    q: "How can I register my daycare center on the platform?",
    a: "Switch to the 'Provider' view in the top bar or click 'Register Center'. Upload your trade license and staff roster for admin document verification. Once approved, your center goes live instantly."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 1.5rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>
          <HelpCircle size={14} /> GOT QUESTIONS?
        </div>
        <h2 style={{ fontSize: '2rem' }}>Frequently Asked Questions</h2>
        <p style={{ color: 'var(--text-muted)' }}>Everything you need to know about 24×7 daycare, verification, and subscription plans.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="card"
              style={{ padding: '1.25rem', cursor: 'pointer', borderColor: isOpen ? 'var(--primary)' : 'var(--border-light)' }}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.05rem' }}>
                <span>{item.q}</span>
                {isOpen ? <ChevronUp size={18} color="var(--primary)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
              </div>

              {isOpen && (
                <div style={{ marginTop: '0.85rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
