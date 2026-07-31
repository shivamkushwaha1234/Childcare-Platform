import React from 'react';
import { Users, DollarSign, Award, Clock, CheckCircle2, XCircle, Moon, ShieldCheck, AlertCircle } from 'lucide-react';

export default function ProviderOverview({ 
  center, 
  bookings, 
  onAcceptBooking, 
  onRejectBooking, 
  onToggle24x7 
}) {
  const activeBookingsToday = bookings.filter(b => b.status === 'Confirmed' || b.status === 'Active');
  const pendingRequests = bookings.filter(b => b.status === 'Pending');

  return (
    <div className="animate-fade-in" style={{ padding: '1rem 0' }}>
      
      {/* Center Status Header Banner */}
      <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <h2 style={{ fontSize: '1.35rem' }}>{center.name}</h2>
            <span className="badge badge-verified"><ShieldCheck size={12} /> {center.verifiedStatus}</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>📍 {center.location} • Managing Daycare Operations & Night Shift Slots</p>
        </div>

        {/* 24x7 Availability Status Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--bg-subtle)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>24×7 Mode</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: center.is24x7 ? 'var(--accent-coral)' : 'var(--text-muted)' }}>
              {center.is24x7 ? '🌙 Active Round-the-Clock' : '☀️ Daytime Hours Only'}
            </div>
          </div>
          <button 
            className={`btn btn-sm ${center.is24x7 ? 'btn-accent' : 'btn-secondary'}`}
            onClick={onToggle24x7}
          >
            <Moon size={14} /> Toggle 24x7
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
            <Users size={24} />
          </div>
          <div>
            <div className="stat-value">{center.capacityTotal - center.capacityAvailable} / {center.capacityTotal}</div>
            <div className="stat-label">Current Occupancy (6 free slots)</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ backgroundColor: 'var(--success-bg)', color: 'var(--success)' }}>
            <DollarSign size={24} />
          </div>
          <div>
            <div className="stat-value">₹18,400</div>
            <div className="stat-label">Revenue Today</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ backgroundColor: 'var(--warning-bg)', color: 'var(--warning)' }}>
            <Clock size={24} />
          </div>
          <div>
            <div className="stat-value">{pendingRequests.length}</div>
            <div className="stat-label">Pending Booking Requests</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ backgroundColor: 'var(--info-bg)', color: 'var(--info)' }}>
            <Award size={24} />
          </div>
          <div>
            <div className="stat-value">{center.caregivers.length} Staff</div>
            <div className="stat-label">Verified Caregivers On Duty</div>
          </div>
        </div>
      </div>

      {/* Booking Requests Queue Section */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.15rem' }}>Incoming Parent Booking Requests</h3>
          <span className="badge badge-warning">{pendingRequests.length} Pending Approval</span>
        </div>

        {pendingRequests.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', padding: '1rem 0' }}>
            ✓ All booking requests have been reviewed and processed.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {pendingRequests.map((b) => (
              <div key={b.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-main)', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{b.parentName} • Child: {b.childName}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{b.planType} • {b.timing} • Amount: ₹{b.amount}</div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary btn-sm" onClick={() => onAcceptBooking(b.id)}>
                    <CheckCircle2 size={14} /> Accept Request
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => onRejectBooking(b.id)} style={{ color: 'var(--danger)' }}>
                    <XCircle size={14} /> Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Active Daycare Occupants Table */}
      <div className="card">
        <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>Active Children Checked-In Today</h3>
        
        <div className="custom-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Child Name</th>
                <th>Parent Contact</th>
                <th>Shift / Hours</th>
                <th>Special Diet / Allergy</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activeBookingsToday.map((b) => (
                <tr key={b.id}>
                  <td><strong>{b.id}</strong></td>
                  <td>{b.childName}</td>
                  <td>{b.parentName}</td>
                  <td>{b.timing}</td>
                  <td><span style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>{b.specialNotes}</span></td>
                  <td><span className="badge badge-verified">Checked In</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
