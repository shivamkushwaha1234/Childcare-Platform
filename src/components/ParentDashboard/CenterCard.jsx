import React from 'react';
import { Star, MapPin, Moon, ShieldCheck, Clock, ArrowRight, UserCheck } from 'lucide-react';

export default function CenterCard({ center, onSelectCenter, onBookCenter }) {
  return (
    <div className="center-card animate-fade-in">
      {/* Image & Badges */}
      <div className="center-card-img-wrapper">
        <img 
          src={center.images[0]} 
          alt={center.name} 
          className="center-card-img" 
          loading="lazy"
        />
        {center.is24x7 && (
          <div className="badge-overlay-top-left">
            <span className="badge badge-24x7">
              <Moon size={12} /> 24×7 Daycare
            </span>
          </div>
        )}
        <div className="badge-overlay-top-right">
          <span className="badge badge-verified">
            <ShieldCheck size={12} /> Verified
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="center-card-body">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-coral)', fontWeight: 700 }}>
            {center.safetyBadge}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.88rem', fontWeight: 700 }}>
            <Star size={14} color="#F59E0B" fill="#F59E0B" />
            <span>{center.rating}</span>
            <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>({center.reviewsCount})</span>
          </div>
        </div>

        <h3 className="center-card-title">{center.name}</h3>
        
        <div className="center-location">
          <MapPin size={14} />
          <span>{center.location} • <strong style={{ color: 'var(--text-main)' }}>{center.distance}</strong></span>
        </div>

        {/* Age Tags */}
        <div className="center-tags">
          {center.ageGroups.map((age, idx) => (
            <span key={idx} className="tag-pill">
              {age}
            </span>
          ))}
        </div>

        {/* Capacity Indicator */}
        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <UserCheck size={14} color="var(--success)" />
          <span>Capacity: <strong style={{ color: center.capacityAvailable < 5 ? 'var(--danger)' : 'var(--success)' }}>
            {center.capacityAvailable} slots available
          </strong> ({center.capacityTotal} max)</span>
        </div>

        {/* Footer with Price & Actions */}
        <div className="center-card-footer">
          <div>
            <span className="price-text">₹{center.hourlyPrice}</span>
            <span className="price-unit">/ hr</span>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Daily ₹{center.dailyPrice} • Monthly ₹{center.monthlyPrice.toLocaleString()}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => onSelectCenter(center)}
            >
              Details
            </button>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => onBookCenter(center)}
            >
              Book <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
