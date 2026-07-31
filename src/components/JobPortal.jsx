import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, CheckCircle2, UserCheck } from 'lucide-react';

const SAMPLE_JOBS = [
  {
    id: 1,
    title: "Registered Pediatric Nurse (Night Shift 24x7 Crèche)",
    center: "Tiny Tots 24×7 Crèche",
    location: "Koramangala, Bengaluru",
    shift: "Night Shift (8 PM - 8 AM)",
    salary: "₹35,000 - ₹45,000 / month",
    type: "Full-Time",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Montessori Early Educator",
    center: "Little Stars Sanctuary",
    location: "Indiranagar, Bengaluru",
    shift: "Daytime Shift (9 AM - 5 PM)",
    salary: "₹28,000 - ₹38,000 / month",
    type: "Full-Time",
    posted: "1 day ago"
  },
  {
    id: 3,
    title: "Emergency Overnight Caregiver",
    center: "Cradle & Care Emergency Unit",
    location: "Whitefield, Bengaluru",
    shift: "Flexible Night Slots",
    salary: "₹300 - ₹450 / hour",
    type: "Part-Time / On-Call",
    posted: "3 days ago"
  }
];

export default function JobPortal() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [appliedMsg, setAppliedMsg] = useState('');

  const handleApply = (job) => {
    setAppliedJobs([...appliedJobs, job.id]);
    setAppliedMsg(`Application submitted for "${job.title}". The center administrator will contact you after document verification.`);
    setTimeout(() => setAppliedMsg(''), 4000);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '2.5rem 1.5rem', maxWidth: '900px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2>Caregiver & Staff Job Portal</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Daycare centers hire verified pediatric nurses, Montessori teachers, and night shift staff here.
          </p>
        </div>
        <div className="badge badge-primary" style={{ padding: '0.5rem 1rem' }}>
          <Briefcase size={14} /> {SAMPLE_JOBS.length} Open Openings
        </div>
      </div>

      {appliedMsg && (
        <div style={{ padding: '1rem', backgroundColor: 'var(--success-bg)', color: 'var(--success)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle2 size={18} /> {appliedMsg}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {SAMPLE_JOBS.map((job) => {
          const isApplied = appliedJobs.includes(job.id);
          return (
            <div key={job.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{job.title}</h3>
                  <div style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.92rem' }}>{job.center}</div>
                </div>
                <span className="badge badge-info">{job.type}</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <span><MapPin size={14} style={{ verticalAlign: 'middle' }} /> {job.location}</span>
                <span><Clock size={14} style={{ verticalAlign: 'middle' }} /> {job.shift}</span>
                <span><DollarSign size={14} style={{ verticalAlign: 'middle' }} /> <strong style={{ color: 'var(--text-main)' }}>{job.salary}</strong></span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>Posted {job.posted} • Police Background Check Required</span>
                
                <button 
                  className={`btn ${isApplied ? 'btn-secondary' : 'btn-primary'} btn-sm`}
                  onClick={() => handleApply(job)}
                  disabled={isApplied}
                >
                  {isApplied ? '✓ Application Submitted' : 'Apply Now'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
