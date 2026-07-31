import React from 'react';
import { HeartHandshake, ShieldCheck, Moon, PhoneCall, Mail } from 'lucide-react';

export default function Footer({ openPrdModal, openChatModal }) {
  return (
    <footer style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-light)', padding: '3rem 0 1.5rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
        <div>
          <div className="logo" style={{ marginBottom: '0.85rem' }}>
            <div className="logo-icon">
              <HeartHandshake size={22} />
            </div>
            <span>Little Steps</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Connecting working parents, shift professionals, and single parents with verified 24×7 childcare centers and certified crèches.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '0.85rem', color: 'var(--text-main)' }}>Platform Features</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <li>🌙 24×7 Night Shift Crèches</li>
            <li>👶 Infant Sleeper Pods</li>
            <li>🛡️ Govt & Police Verified Centers</li>
            <li>⚡ Instant Emergency Slot Allocation</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '0.85rem', color: 'var(--text-main)' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
            <li><a href="#" onClick={(e) => { e.preventDefault(); openPrdModal(); }}>PRD Documentation</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); openChatModal(); }}>24/7 AI Concierge Help</a></li>
            <li><a href="#">Safety & Hygiene Standards</a></li>
            <li><a href="#">Childcare Provider Portal</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '0.85rem', color: 'var(--text-main)' }}>24/7 Emergency Hotline</h4>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.4rem' }}>
            +91 800-548-8535
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            support@littlesteps.org • Round-the-Clock Parent Assistance
          </div>
        </div>
      </div>

      <div className="container" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
        <div>© 2026 Little Steps – Trusted 24×7 Childcare Platform. Internship Project Submission.</div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Child Safety Policy</span>
        </div>
      </div>
    </footer>
  );
}
