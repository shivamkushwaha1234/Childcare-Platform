import React, { useState } from 'react';
import { Check, Moon, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '../../data/mockData';
import confetti from 'canvas-confetti';

export default function SubscriptionsTab() {
  const [activeSub, setActiveSub] = useState('sub-nightflex');
  const [activatedMsg, setActivatedMsg] = useState('');

  const handleSubscribe = (plan) => {
    setActiveSub(plan.id);
    setActivatedMsg(`Successfully subscribed to ${plan.name}! Your 24×7 childcare pass is now active.`);
    
    try {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
    } catch (e) {}

    setTimeout(() => {
      setActivatedMsg('');
    }, 4000);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '2.5rem 1.5rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
        <div className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
          <Sparkles size={14} color="var(--accent-amber)" /> SUBSCRIPTION PLANS FOR SHIFT PARENTS
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
          Flexible Monthly Childcare Passes
        </h2>
        <p style={{ color: 'var(--text-muted)' }}>
          Save up to 40% compared to hourly drop-ins. Swap between day and night care seamlessly across all verified centers.
        </p>
      </div>

      {activatedMsg && (
        <div style={{ padding: '1rem', backgroundColor: 'var(--success-bg)', color: 'var(--success)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 'var(--radius-md)', textAlign: 'center', fontWeight: 600, marginBottom: '2rem' }}>
          {activatedMsg}
        </div>
      )}

      {/* Grid of Subscription Plans */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {SUBSCRIPTION_PLANS.map((plan) => {
          const isSelected = activeSub === plan.id;
          return (
            <div 
              key={plan.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                borderColor: plan.recommended ? 'var(--primary)' : isSelected ? 'var(--accent-mint)' : 'var(--border-light)',
                boxShadow: plan.recommended ? 'var(--shadow-xl)' : 'var(--shadow-md)',
                transform: plan.recommended ? 'scale(1.02)' : 'none'
              }}
            >
              {plan.recommended && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--primary)', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.85rem', borderRadius: 'var(--radius-full)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  ★ Most Popular For Night Shifts
                </div>
              )}

              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>{plan.name}</h3>
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)' }}>₹{plan.price.toLocaleString()}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}> {plan.billing}</span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem', flex: 1 }}>
                {plan.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <Check size={16} color="var(--success)" style={{ shrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`btn ${isSelected ? 'btn-secondary' : plan.recommended ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%' }}
                onClick={() => handleSubscribe(plan)}
              >
                {isSelected ? '✓ Active Plan' : 'Subscribe Now'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Guarantee Banner */}
      <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ width: '54px', height: '54px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ShieldCheck size={28} />
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '1.1rem' }}>Cancel or pause anytime with 1-click</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No long term lock-ins. Unused hours roll over to next month automatically.</p>
        </div>
      </div>

    </div>
  );
}
