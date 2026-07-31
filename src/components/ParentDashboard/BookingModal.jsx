import React, { useState } from 'react';
import { X, Calendar, Clock, Baby, AlertCircle, CheckCircle, CreditCard, ShieldCheck, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ center, onClose, onBookingSuccess }) {
  const [planType, setPlanType] = useState('Hourly Drop-In');
  const [parentName, setParentName] = useState('Ankit Sharma');
  const [childName, setChildName] = useState('Aarav');
  const [childAgeGroup, setChildAgeGroup] = useState(center?.ageGroups[0] || 'Toddler (1-3 yrs)');
  const [bookingDate, setBookingDate] = useState('2026-08-01');
  const [startTime, setStartTime] = useState('08:00');
  const [hoursCount, setHoursCount] = useState(4);
  const [specialNotes, setSpecialNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('UPI / GPay');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!center) return null;

  // Calculate estimated total
  let estimatedAmount = center.hourlyPrice * hoursCount;
  if (planType === 'Night Shift Slot') estimatedAmount = center.hourlyPrice * 12 * 0.85; // 15% discount
  if (planType === 'Daily Pass') estimatedAmount = center.dailyPrice;
  if (planType === 'Monthly Subscription') estimatedAmount = center.monthlyPrice;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      centerId: center.id,
      centerName: center.name,
      parentName,
      childName: `${childName} (${childAgeGroup})`,
      planType,
      timing: planType === 'Hourly Drop-In' ? `${bookingDate} @ ${startTime} (${hoursCount} hrs)` : `${bookingDate} (${planType})`,
      date: bookingDate,
      status: 'Confirmed',
      amount: Math.round(estimatedAmount),
      paymentStatus: `Paid via ${paymentMethod}`,
      specialNotes: specialNotes || 'No special requirements'
    };

    // Confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti trigger', err);
    }

    setIsSubmitted(true);
    setTimeout(() => {
      onBookingSuccess(newBooking);
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <div>
            <h2 style={{ fontSize: '1.25rem' }}>Book Childcare Slot</h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{center.name} • {center.location}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--success-bg)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <CheckCircle size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Booking Confirmed!</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                Your daycare slot for <strong>{childName}</strong> has been secured at {center.name}. An instant SMS & WhatsApp receipt has been sent.
              </p>
              <div className="badge badge-verified" style={{ fontSize: '0.88rem', padding: '0.5rem 1rem' }}>
                🔒 Slot Reserved • Guaranteed Capacity
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              
              {/* Select Plan Type */}
              <div className="form-group">
                <label className="form-label">Booking Plan Type</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  {['Hourly Drop-In', 'Night Shift Slot', 'Daily Pass', 'Monthly Subscription'].map((plan) => (
                    <button
                      key={plan}
                      type="button"
                      className={`btn ${planType === plan ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ fontSize: '0.85rem', padding: '0.5rem 0.75rem', justifyContent: 'flex-start' }}
                      onClick={() => setPlanType(plan)}
                    >
                      {plan === 'Night Shift Slot' ? '🌙 ' : plan === 'Hourly Drop-In' ? '⏱️ ' : '📅 '}
                      {plan}
                    </button>
                  ))}
                </div>
              </div>

              {/* Child Details Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Parent / Guardian Name</label>
                  <input 
                    type="text"
                    required
                    className="form-input"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Child Name & Age</label>
                  <input 
                    type="text"
                    required
                    className="form-input"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Age Category</label>
                  <select 
                    className="form-select"
                    value={childAgeGroup}
                    onChange={(e) => setChildAgeGroup(e.target.value)}
                  >
                    {center.ageGroups.map((group) => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Booking Date</label>
                  <input 
                    type="date"
                    required
                    className="form-input"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Timing Options for Hourly */}
              {planType === 'Hourly Drop-In' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Drop-off Time</label>
                    <input 
                      type="time"
                      className="form-input"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Duration (Hours)</label>
                    <input 
                      type="number"
                      min="1"
                      max="24"
                      className="form-input"
                      value={hoursCount}
                      onChange={(e) => setHoursCount(parseInt(e.target.value) || 1)}
                    />
                  </div>
                </div>
              )}

              {/* Special Instructions */}
              <div className="form-group">
                <label className="form-label">Dietary & Health Notes (Optional)</label>
                <textarea 
                  className="form-input"
                  rows="2"
                  placeholder="e.g. Allergy to lactose, nap routine, emergency contact..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                />
              </div>

              {/* Payment Selector */}
              <div className="form-group">
                <label className="form-label">Payment Method</label>
                <select 
                  className="form-select"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="UPI / GPay">Instant UPI (GPay / PhonePe / Paytm)</option>
                  <option value="Credit / Debit Card">Credit / Debit Card</option>
                  <option value="Net Banking">Net Banking</option>
                  <option value="Pay at Daycare Desk">Pay at Daycare Desk</option>
                </select>
              </div>

              {/* Total Calculation & Action */}
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Estimated Payable Amount</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)' }}>₹{Math.round(estimatedAmount).toLocaleString()}</div>
                </div>
                <button type="submit" className="btn btn-accent btn-lg">
                  Confirm & Pay Securely
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
