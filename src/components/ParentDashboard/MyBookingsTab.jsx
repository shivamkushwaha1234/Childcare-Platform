import React from 'react';
import { CalendarCheck, Clock, MapPin, CheckCircle2, FileText, XCircle, AlertCircle, Phone } from 'lucide-react';

export default function MyBookingsTab({ bookings, onCancelBooking }) {
  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2>My Childcare Bookings</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Track active crèche reservations, night slots, and payment receipts.</p>
        </div>
        <div className="badge badge-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
          <CalendarCheck size={14} /> Total Bookings: {bookings.length}
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🧸</div>
          <h3>No active daycare bookings found</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>You haven't booked any slots yet. Search nearby 24x7 centers to reserve a spot!</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {bookings.map((b) => (
            <div key={b.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.04em' }}>
                    BOOKING ID: {b.id}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', marginTop: '0.1rem' }}>{b.centerName}</h3>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className={`badge ${b.status === 'Confirmed' || b.status === 'Active' ? 'badge-verified' : 'badge-warning'}`}>
                    {b.status === 'Confirmed' ? <CheckCircle2 size={12} /> : null}
                    {b.status}
                  </span>
                  <span className="badge badge-info">{b.planType}</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', backgroundColor: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.88rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.78rem' }}>Child Details</span>
                  <strong>{b.childName}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.78rem' }}>Schedule / Timing</span>
                  <strong>{b.timing}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.78rem' }}>Amount Paid</span>
                  <strong style={{ color: 'var(--primary)' }}>₹{b.amount.toLocaleString()} ({b.paymentStatus})</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.78rem' }}>Special Instructions</span>
                  <span style={{ fontStyle: 'italic', color: 'var(--text-main)' }}>{b.specialNotes}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => alert(`Receipt downloaded for ${b.id}`)}>
                    <FileText size={14} /> Download Receipt
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => alert(`Contacting center hotline for ${b.centerName}...`)}>
                    <Phone size={14} /> Call Desk
                  </button>
                </div>

                {b.status !== 'Cancelled' && (
                  <button 
                    className="btn btn-secondary btn-sm" 
                    style={{ color: 'var(--danger)', borderColor: 'rgba(239, 68, 68, 0.3)' }}
                    onClick={() => onCancelBooking(b.id)}
                  >
                    <XCircle size={14} /> Cancel Booking
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
