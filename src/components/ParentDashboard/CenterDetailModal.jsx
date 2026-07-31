import React, { useState } from 'react';
import { X, Star, MapPin, ShieldCheck, Moon, Clock, CheckCircle2, UserCheck, Calendar, Phone, Award } from 'lucide-react';

export default function CenterDetailModal({ center, onClose, onBookCenter }) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  if (!center) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h2 style={{ fontSize: '1.4rem' }}>{center.name}</h2>
              {center.is24x7 && <span className="badge badge-24x7"><Moon size={12} /> 24×7 Care</span>}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <MapPin size={13} style={{ verticalAlign: 'middle' }} /> {center.location} • {center.distance}
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Main Gallery Image */}
          <div style={{ height: '280px', width: '100%', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1rem', backgroundColor: 'var(--bg-subtle)' }}>
            <img 
              src={center.images[selectedImgIndex] || center.images[0]} 
              alt={center.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Thumbnails */}
          {center.images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {center.images.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  style={{
                    width: '80px',
                    height: '56px',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: selectedImgIndex === idx ? '2px solid var(--primary)' : '2px solid transparent',
                    opacity: selectedImgIndex === idx ? 1 : 0.7
                  }}
                >
                  <img src={img} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}

          {/* Ratings & Verification Banner */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={20} color="#F59E0B" fill="#F59E0B" />
              <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{center.rating}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>({center.reviewsCount} parent reviews)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--success)" />
              <span style={{ fontWeight: 600, color: 'var(--success)', fontSize: '0.9rem' }}>{center.verifiedStatus}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <Clock size={16} /> {center.timings}
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>About this Daycare Center</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{center.description}</p>
          </div>

          {/* Safety & Hygiene Protocol */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck color="var(--primary)" size={18} /> Verified Safety & Hygiene Measures
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem' }}>
              {center.safetyMeasures.map((measure, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '0.6rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                  <CheckCircle2 size={16} color="var(--success)" style={{ shrink: 0 }} />
                  <span>{measure}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Caregivers Roster */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award color="var(--accent-coral)" size={18} /> Certified Caregivers on Duty
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {center.caregivers.map((cg) => (
                <div key={cg.id} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.85rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-card)' }}>
                  <img src={cg.avatar} alt={cg.name} style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{cg.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cg.role} • {cg.exp}</div>
                    <span className="badge badge-verified" style={{ fontSize: '0.7rem', marginTop: '0.2rem' }}>
                      ✓ Background Cleared
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Options Summary */}
          <div style={{ padding: '1.25rem', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(108, 92, 231, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, color: 'var(--primary)' }}>Flexible Plans</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                ₹{center.hourlyPrice} <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--text-muted)' }}>/ hr</span> | ₹{center.dailyPrice} <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--text-muted)' }}>/ day</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Monthly full-access subscription available from ₹{center.monthlyPrice.toLocaleString()}</div>
            </div>

            <button 
              className="btn btn-primary btn-lg"
              onClick={() => { onClose(); onBookCenter(center); }}
            >
              Book Daycare Slot Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
