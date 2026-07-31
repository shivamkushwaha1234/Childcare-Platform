import React from 'react';
import { X, FileText, CheckCircle2, ShieldCheck, Database, Layers, Server, Sparkles, BookOpen } from 'lucide-react';

export default function PRDDocModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" style={{ maxWidth: '900px', maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div className="logo-icon" style={{ width: 36, height: 36, fontSize: '1.1rem' }}>
              <FileText size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.3rem' }}>PRD & Technical Documentation</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Little Steps – Trusted 24×7 Childcare Platform Internship Project Requirements & Architecture Design
              </p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body" style={{ lineHeight: '1.65', color: 'var(--text-main)' }}>
          
          {/* Executive Context */}
          <section style={{ marginBottom: '2rem' }}>
            <div className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>Project Overview</div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Little Steps – Trusted 24×7 Childcare Platform</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              With increasing numbers of working parents, shift-based jobs, single-parent households, and nuclear families, 
              there is a growing need for safe, reliable, and flexible childcare solutions available round-the-clock. 
              Little Steps bridges this gap by providing a centralized digital platform that connects parents with verified 
              childcare centers and caregivers offering 24×7 daycare, crèche, and babysitting services.
            </p>
          </section>

          {/* Problem Statement & Primary Objectives */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            <div style={{ padding: '1.25rem', backgroundColor: 'var(--danger-bg)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ color: 'var(--danger)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>⚠️ Problem Statement</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.88rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>Phone calls and word-of-mouth references limit discovery.</li>
                <li>Limited information about caregiver verification & safety.</li>
                <li>No real-time availability visibility across centers.</li>
                <li>Fixed timings that do not support late/night shifts.</li>
                <li>Lack of transparency in pricing and safety standards.</li>
              </ul>
            </div>

            <div style={{ padding: '1.25rem', backgroundColor: 'var(--success-bg)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ color: 'var(--success)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>🎯 Primary Objectives</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.88rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>Provide a trusted digital platform for 24×7 childcare services.</li>
                <li>Enable parents to search, compare, and book daycare services.</li>
                <li>Ensure safety through verification & background monitoring.</li>
                <li>Digitize daycare center operations and availability management.</li>
              </ul>
            </div>
          </section>

          {/* Functional Requirements Grid */}
          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Layers color="var(--primary)" size={18} /> Functional Requirements Breakdown
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div className="card" style={{ padding: '1rem' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>👨‍👩‍👧 Parent / User Features</h4>
                <ul style={{ fontSize: '0.82rem', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>Secure registration & login</li>
                  <li>Search nearby daycare / crèche centers</li>
                  <li>Filters by 24×7 availability, age group, timings & pricing</li>
                  <li>View photos, caregiver profiles, safety measures</li>
                  <li>Book childcare slots (hourly, daily, monthly)</li>
                  <li>Subscription management & booking history</li>
                </ul>
              </div>

              <div className="card" style={{ padding: '1rem' }}>
                <h4 style={{ color: 'var(--accent-coral)', marginBottom: '0.5rem' }}>🏫 Daycare Provider Features</h4>
                <ul style={{ fontSize: '0.82rem', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>Provider registration & verification</li>
                  <li>Dashboard to manage center details & caregivers</li>
                  <li>Set pricing plans (hourly, daily, monthly)</li>
                  <li>Accept or reject booking requests</li>
                  <li>Manage capacity, schedules & earnings analytics</li>
                </ul>
              </div>

              <div className="card" style={{ padding: '1rem' }}>
                <h4 style={{ color: 'var(--accent-mint)', marginBottom: '0.5rem' }}>🛡️ Admin Console Features</h4>
                <ul style={{ fontSize: '0.82rem', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>Approve parents & childcare providers</li>
                  <li>Verify documents & safety certifications</li>
                  <li>Manage service categories & age groups</li>
                  <li>Monitor bookings, disputes & platform analytics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech Stack & Non-Functional Requirements */}
          <section style={{ padding: '1.25rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Server color="var(--primary)" size={18} /> Technology Stack & Non-Functional Specs
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', fontSize: '0.88rem' }}>
              <div>
                <strong>Frontend:</strong> React.js, HTML5, Vanilla CSS Design System, Lucide Icons
              </div>
              <div>
                <strong>State & Persistence:</strong> LocalStorage Reactive State Engine
              </div>
              <div>
                <strong>Performance:</strong> Fast load under 3 seconds, responsive mobile-first layout
              </div>
              <div>
                <strong>Security & Verification:</strong> Role-based access control (Parent, Provider, Admin), document verification workflow
              </div>
            </div>
          </section>

          {/* KPIs */}
          <section>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>📊 Key Performance Indicators (KPIs)</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge badge-primary">Registered Users: 1,420</span>
              <span className="badge badge-verified">Verified Providers: 48</span>
              <span className="badge badge-info">Booking Conversion Rate: 78.4%</span>
              <span className="badge badge-warning">Avg Utilization: 84.2%</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
