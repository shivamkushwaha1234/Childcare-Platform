import React from 'react';
import { Search, MapPin, Moon, ShieldCheck, Clock, Baby } from 'lucide-react';

export default function HeroSection({ 
  searchQuery, 
  setSearchQuery, 
  selectedAgeGroup, 
  setSelectedAgeGroup, 
  selectedTiming, 
  setSelectedTiming, 
  is24x7Only, 
  setIs24x7Only 
}) {
  return (
    <section className="hero">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="badge badge-primary" style={{ marginBottom: '1rem', padding: '0.4rem 1rem' }}>
          <Moon size={14} color="var(--accent-coral)" /> Round-the-Clock Childcare Network
        </div>

        <h1 className="hero-title">
          Trusted <span>24×7 Childcare</span> & Crèches <br /> When You Need It Most
        </h1>
        
        <p className="hero-subtitle">
          Connecting working parents, shift workers, and single households with police-verified 
          childcare centers, night-shift sleeper pods, and certified caregivers.
        </p>

        {/* Search & Filter Bar */}
        <div className="search-box-card">
          <form onSubmit={(e) => e.preventDefault()} className="search-form-grid">
            
            {/* Search Location */}
            <div className="form-group">
              <label className="form-label">Location / Area</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={16} style={{ position: 'absolute', left: 10, top: 12, color: 'var(--text-muted)' }} />
                <input 
                  type="text"
                  className="form-input"
                  style={{ paddingLeft: '2.2rem' }}
                  placeholder="e.g. Koramangala, Whitefield, Indiranagar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Age Group */}
            <div className="form-group">
              <label className="form-label">Age Group</label>
              <select 
                className="form-select"
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
              >
                <option value="All">All Age Groups</option>
                <option value="Infant (0-1 yrs)">Infant (0-1 yrs)</option>
                <option value="Toddler (1-3 yrs)">Toddler (1-3 yrs)</option>
                <option value="Preschool (3-5 yrs)">Preschool (3-5 yrs)</option>
                <option value="School Age (5+ yrs)">School Age (5+ yrs)</option>
              </select>
            </div>

            {/* Timing / Shift */}
            <div className="form-group">
              <label className="form-label">Shift / Timing</label>
              <select 
                className="form-select"
                value={selectedTiming}
                onChange={(e) => setSelectedTiming(e.target.value)}
              >
                <option value="All">All Timings</option>
                <option value="24 Hours">Full 24x7 Coverage</option>
                <option value="Night">Night Shift Only</option>
                <option value="Day">Daycare Hours</option>
              </select>
            </div>

            {/* 24x7 Toggle Button */}
            <div className="form-group">
              <label className="form-label">24×7 Available</label>
              <button 
                type="button"
                className={`toggle-24x7-btn ${is24x7Only ? 'active' : ''}`}
                onClick={() => setIs24x7Only(!is24x7Only)}
              >
                <Moon size={16} /> 24×7 Only
              </button>
            </div>

            {/* Search Submit */}
            <div className="form-group" style={{ justifyContent: 'flex-end' }}>
              <button type="submit" className="btn btn-primary" style={{ height: 42 }}>
                <Search size={16} /> Search
              </button>
            </div>
          </form>

          {/* Quick Filter Tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '1.2rem', flexWrap: 'wrap', fontSize: '0.82rem' }}>
            <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Popular:</span>
            <button 
              className="tag-pill" 
              onClick={() => { setIs24x7Only(true); setSelectedTiming('24 Hours'); }}
              style={{ cursor: 'pointer', border: '1px solid var(--border-light)' }}
            >
              🌙 Night Shift Crèches
            </button>
            <button 
              className="tag-pill" 
              onClick={() => setSelectedAgeGroup('Infant (0-1 yrs)')}
              style={{ cursor: 'pointer', border: '1px solid var(--border-light)' }}
            >
              👶 Infant Care (0-1 Yrs)
            </button>
            <button 
              className="tag-pill" 
              onClick={() => setSearchQuery('Koramangala')}
              style={{ cursor: 'pointer', border: '1px solid var(--border-light)' }}
            >
              📍 Koramangala
            </button>
            <button 
              className="tag-pill" 
              onClick={() => setSelectedTiming('All')}
              style={{ cursor: 'pointer', border: '1px solid var(--border-light)' }}
            >
              ⚡ Instant Emergency Slot
            </button>
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <ShieldCheck size={18} color="var(--success)" /> 100% Govt & Police Verified
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <Clock size={18} color="var(--primary)" /> 24×7 Round-the-Clock Access
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <Baby size={18} color="var(--accent-coral)" /> Pediatric Nursing Certified
          </div>
        </div>

      </div>
    </section>
  );
}
