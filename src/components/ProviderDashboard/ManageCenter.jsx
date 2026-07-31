import React, { useState } from 'react';
import { Save, CheckCircle2, Moon, Clock, DollarSign, Building2 } from 'lucide-react';

export default function ManageCenter({ center, onSaveCenter }) {
  const [formData, setFormData] = useState({
    name: center.name,
    location: center.location,
    is24x7: center.is24x7,
    hourlyPrice: center.hourlyPrice,
    dailyPrice: center.dailyPrice,
    monthlyPrice: center.monthlyPrice,
    capacityTotal: center.capacityTotal,
    description: center.description,
    timings: center.timings
  });

  const [savedMsg, setSavedMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveCenter({
      ...center,
      ...formData
    });
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 3000);
  };

  return (
    <div className="card animate-fade-in" style={{ maxWidth: '720px', margin: '1rem auto' }}>
      <h2 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>Manage Center Profile & Pricing</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Update operating hours, 24×7 night shift availability, capacity limits, and pricing rates.
      </p>

      {savedMsg && (
        <div style={{ padding: '0.85rem', backgroundColor: 'var(--success-bg)', color: 'var(--success)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle2 size={16} /> Center settings updated successfully! Live search updated.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        <div className="form-group">
          <label className="form-label">Daycare / Crèche Name</label>
          <input 
            type="text" 
            className="form-input" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Location / Address</label>
            <input 
              type="text" 
              className="form-input" 
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Maximum Child Capacity</label>
            <input 
              type="number" 
              className="form-input" 
              value={formData.capacityTotal}
              onChange={(e) => setFormData({ ...formData, capacityTotal: parseInt(e.target.value) || 10 })}
            />
          </div>
        </div>

        {/* 24x7 Switch */}
        <div style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Moon size={16} color="var(--accent-coral)" /> Enable 24×7 Night Shift Availability
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Allows night shift workers and doctor parents to book sleeper pods.</div>
          </div>
          <input 
            type="checkbox"
            style={{ width: '22px', height: '22px', cursor: 'pointer', accentColor: 'var(--primary)' }}
            checked={formData.is24x7}
            onChange={(e) => setFormData({ ...formData, is24x7: e.target.checked })}
          />
        </div>

        {/* Pricing Matrix */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Hourly Rate (₹)</label>
            <input 
              type="number" 
              className="form-input" 
              value={formData.hourlyPrice}
              onChange={(e) => setFormData({ ...formData, hourlyPrice: parseInt(e.target.value) || 0 })}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Daily Pass (₹)</label>
            <input 
              type="number" 
              className="form-input" 
              value={formData.dailyPrice}
              onChange={(e) => setFormData({ ...formData, dailyPrice: parseInt(e.target.value) || 0 })}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Monthly Rate (₹)</label>
            <input 
              type="number" 
              className="form-input" 
              value={formData.monthlyPrice}
              onChange={(e) => setFormData({ ...formData, monthlyPrice: parseInt(e.target.value) || 0 })}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Operating Schedule Text</label>
          <input 
            type="text" 
            className="form-input" 
            value={formData.timings}
            onChange={(e) => setFormData({ ...formData, timings: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Center Overview Description</label>
          <textarea 
            className="form-input"
            rows="3"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }}>
          <Save size={18} /> Save & Publish Updates
        </button>

      </form>
    </div>
  );
}
