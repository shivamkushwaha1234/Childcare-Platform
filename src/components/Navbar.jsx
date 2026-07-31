import React from 'react';
import { 
  HeartHandshake, 
  ShieldCheck, 
  User, 
  Building2, 
  Sliders, 
  FileText, 
  MessageSquare, 
  Briefcase, 
  CalendarCheck,
  Moon
} from 'lucide-react';

export default function Navbar({ 
  currentRole, 
  setCurrentRole, 
  activeTab, 
  setActiveTab, 
  openPrdModal, 
  openChatModal 
}) {
  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="logo" onClick={() => setActiveTab('explore')}>
          <div className="logo-icon">
            <HeartHandshake size={22} />
          </div>
          <div>
            <span>Little Steps</span>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--accent-coral)', marginTop: '-4px' }}>
              24×7 TRUSTED CHILDCARE
            </div>
          </div>
        </a>

        {/* Role Switcher (Parent, Provider, Admin) */}
        <div className="role-switcher-box">
          <button 
            className={`role-btn ${currentRole === 'parent' ? 'active' : ''}`}
            onClick={() => { setCurrentRole('parent'); setActiveTab('explore'); }}
            title="Parent / User Portal"
          >
            <User size={14} /> Parent
          </button>
          <button 
            className={`role-btn ${currentRole === 'provider' ? 'active' : ''}`}
            onClick={() => { setCurrentRole('provider'); setActiveTab('provider-dashboard'); }}
            title="Childcare Center / Provider Dashboard"
          >
            <Building2 size={14} /> Provider
          </button>
          <button 
            className={`role-btn ${currentRole === 'admin' ? 'active' : ''}`}
            onClick={() => { setCurrentRole('admin'); setActiveTab('admin-dashboard'); }}
            title="Admin & Verification Console"
          >
            <ShieldCheck size={14} /> Admin
          </button>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            {currentRole === 'parent' && (
              <>
                <li>
                  <a 
                    className={`nav-link ${activeTab === 'explore' ? 'active' : ''}`}
                    onClick={() => setActiveTab('explore')}
                  >
                    Find Daycare
                  </a>
                </li>
                <li>
                  <a 
                    className={`nav-link ${activeTab === 'my-bookings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('my-bookings')}
                  >
                    <CalendarCheck size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                    My Bookings
                  </a>
                </li>
                <li>
                  <a 
                    className={`nav-link ${activeTab === 'subscriptions' ? 'active' : ''}`}
                    onClick={() => setActiveTab('subscriptions')}
                  >
                    Subscription Plans
                  </a>
                </li>
              </>
            )}

            <li>
              <a 
                className={`nav-link ${activeTab === 'jobs' ? 'active' : ''}`}
                onClick={() => setActiveTab('jobs')}
              >
                <Briefcase size={15} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                Job Portal
              </a>
            </li>

            <li>
              <a 
                className={`nav-link ${activeTab === 'faqs' ? 'active' : ''}`}
                onClick={() => setActiveTab('faqs')}
              >
                FAQs
              </a>
            </li>

            <li>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={openPrdModal}
                style={{ gap: '0.4rem', borderStyle: 'dashed' }}
              >
                <FileText size={14} color="var(--primary)" />
                PRD & Tech Docs
              </button>
            </li>

            <li>
              <button 
                className="btn btn-accent btn-sm"
                onClick={openChatModal}
              >
                <MessageSquare size={14} />
                24x7 Help
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
