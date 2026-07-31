import React, { useState } from 'react';
import { UserPlus, Award, ShieldCheck, Trash2, CheckCircle2 } from 'lucide-react';

export default function CaregiverRoster({ caregivers, onAddCaregiver, onDeleteCaregiver }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Infant & Toddler Specialist');
  const [exp, setExp] = useState('5 yrs exp');
  const [avatar, setAvatar] = useState('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name) return;
    onAddCaregiver({
      id: `cg-${Date.now()}`,
      name,
      role,
      exp,
      certified: true,
      avatar
    });
    setName('');
    setShowAddForm(false);
  };

  return (
    <div className="card animate-fade-in" style={{ margin: '1rem 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2>Caregiver Staff Roster</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Verified early childhood educators, pediatric nurses, and night shift staff.</p>
        </div>

        <button 
          className="btn btn-primary"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <UserPlus size={16} /> Add Caregiver
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} style={{ padding: '1.25rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.1rem' }}>Add New Verified Caregiver</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Caregiver Full Name</label>
              <input 
                type="text" 
                required 
                className="form-input" 
                placeholder="e.g. Radhika Sharma" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Role / Specialization</label>
              <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Lead Infant Nurse">Lead Infant Nurse</option>
                <option value="Night Shift Specialist">Night Shift Specialist</option>
                <option value="Montessori Educator">Montessori Educator</option>
                <option value="Early Childhood Specialist">Early Childhood Specialist</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Experience Years</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. 6 yrs exp" 
                value={exp} 
                onChange={(e) => setExp(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Profile Photo URL</label>
              <input 
                type="text" 
                className="form-input" 
                value={avatar} 
                onChange={(e) => setAvatar(e.target.value)} 
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="submit" className="btn btn-primary btn-sm">Save Caregiver</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowAddForm(false)}>Cancel</button>
          </div>
        </form>
      )}

      {/* Roster Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {caregivers.map((cg) => (
          <div key={cg.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.1rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-main)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <img src={cg.avatar} alt={cg.name} style={{ width: '54px', height: '54px', borderRadius: 'var(--radius-full)', objectFit: 'cover' }} />
              <div>
                <h4 style={{ fontSize: '1.05rem' }}>{cg.name}</h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{cg.role}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600 }}>{cg.exp}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.6rem', borderTop: '1px solid var(--border-subtle)' }}>
              <span className="badge badge-verified" style={{ fontSize: '0.72rem' }}>
                <ShieldCheck size={11} /> Police & Background Verified
              </span>
              
              <button 
                onClick={() => onDeleteCaregiver(cg.id)}
                style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }}
                title="Remove staff"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
