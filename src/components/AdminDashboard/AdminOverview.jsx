import React from 'react';
import { ShieldCheck, Users, Building2, TrendingUp, Award, AlertTriangle, FileCheck, CheckCircle2, XCircle } from 'lucide-react';
import { PLATFORM_ANALYTICS } from '../../data/mockData';

export default function AdminOverview({ verificationQueue, onApproveApplicant, onRejectApplicant }) {
  const pendingCount = verificationQueue.filter(v => v.status === 'Pending Review').length;

  return (
    <div className="animate-fade-in" style={{ padding: '1rem 0' }}>
      
      {/* Top Admin Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2>Little Steps Admin & Verification Console</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Monitor platform health, verify childcare centers, inspect safety compliance, and approve caregiver credentials.
          </p>
        </div>

        <div className="badge badge-verified" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
          <ShieldCheck size={16} /> Platform Status: 100% Operational
        </div>
      </div>

      {/* KPI Stats Cards Grid (Matching PRD KPIs) */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
            <Users size={24} />
          </div>
          <div>
            <div className="stat-value">{PLATFORM_ANALYTICS.registeredUsers.toLocaleString()}</div>
            <div className="stat-label">Registered Parents & Households</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ backgroundColor: 'var(--success-bg)', color: 'var(--success)' }}>
            <Building2 size={24} />
          </div>
          <div>
            <div className="stat-value">{PLATFORM_ANALYTICS.verifiedCenters}</div>
            <div className="stat-label">Verified 24×7 Daycare Centers</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ backgroundColor: 'var(--info-bg)', color: 'var(--info)' }}>
            <TrendingUp size={24} />
          </div>
          <div>
            <div className="stat-value">{PLATFORM_ANALYTICS.bookingConversionRate}</div>
            <div className="stat-label">Booking Conversion Rate</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ backgroundColor: 'var(--warning-bg)', color: 'var(--warning)' }}>
            <Award size={24} />
          </div>
          <div>
            <div className="stat-value">{PLATFORM_ANALYTICS.avgDaycareUtilization}</div>
            <div className="stat-label">Avg Daycare Capacity Utilization</div>
          </div>
        </div>
      </div>

      {/* Verification Queue Section */}
      <div className="card" style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileCheck color="var(--primary)" size={20} /> Provider & Caregiver Verification Hub
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Review submitted trade licenses, fire safety permits, and police background checks before granting verified badges.
            </p>
          </div>

          <span className="badge badge-warning" style={{ fontSize: '0.82rem' }}>
            {pendingCount} Pending Applications
          </span>
        </div>

        <div className="custom-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Applicant ID</th>
                <th>Name & Entity Type</th>
                <th>Location</th>
                <th>Submitted Documents</th>
                <th>Risk Score</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {verificationQueue.map((item) => (
                <tr key={item.id}>
                  <td><strong>{item.id}</strong></td>
                  <td>
                    <div><strong>{item.applicantName}</strong></div>
                    <span className="badge badge-primary" style={{ fontSize: '0.72rem' }}>{item.applicantType}</span>
                  </td>
                  <td>{item.city}</td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontSize: '0.78rem' }}>
                      {item.documents.map((doc, idx) => (
                        <span key={idx} style={{ color: 'var(--primary)' }}>📄 {doc}</span>
                      ))}
                    </div>
                  </td>
                  <td><span className="badge badge-verified">{item.riskScore}</span></td>
                  <td>
                    <span className={`badge ${item.status === 'Approved' ? 'badge-verified' : item.status === 'Rejected' ? 'badge-warning' : 'badge-warning'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    {item.status === 'Pending Review' ? (
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button className="btn btn-primary btn-sm" onClick={() => onApproveApplicant(item.id)}>
                          <CheckCircle2 size={13} /> Approve
                        </button>
                        <button className="btn btn-secondary btn-sm" onClick={() => onRejectApplicant(item.id)} style={{ color: 'var(--danger)' }}>
                          <XCircle size={13} /> Reject
                        </button>
                      </div>
                    ) : (
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Decision Finalized</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
