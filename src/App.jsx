import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CenterCard from './components/ParentDashboard/CenterCard';
import CenterDetailModal from './components/ParentDashboard/CenterDetailModal';
import BookingModal from './components/ParentDashboard/BookingModal';
import MyBookingsTab from './components/ParentDashboard/MyBookingsTab';
import SubscriptionsTab from './components/ParentDashboard/SubscriptionsTab';

import ProviderOverview from './components/ProviderDashboard/ProviderOverview';
import ManageCenter from './components/ProviderDashboard/ManageCenter';
import CaregiverRoster from './components/ProviderDashboard/CaregiverRoster';

import AdminOverview from './components/AdminDashboard/AdminOverview';
import ChatSupportModal from './components/ChatSupportModal';
import PRDDocModal from './components/PRDDocModal';
import FAQs from './components/FAQs';
import JobPortal from './components/JobPortal';
import Footer from './components/Footer';

import { 
  INITIAL_DAYCARE_CENTERS, 
  INITIAL_BOOKINGS, 
  INITIAL_VERIFICATION_QUEUE 
} from './data/mockData';
import { SlidersHorizontal, Moon, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function App() {
  // App state with localStorage persistence
  const [currentRole, setCurrentRole] = useState('parent'); // 'parent' | 'provider' | 'admin'
  const [activeTab, setActiveTab] = useState('explore');

  const [centers, setCenters] = useState(() => {
    const saved = localStorage.getItem('ls_centers');
    return saved ? JSON.parse(saved) : INITIAL_DAYCARE_CENTERS;
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('ls_bookings');
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
  });

  const [verificationQueue, setVerificationQueue] = useState(() => {
    const saved = localStorage.getItem('ls_verification');
    return saved ? JSON.parse(saved) : INITIAL_VERIFICATION_QUEUE;
  });

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
  const [selectedTiming, setSelectedTiming] = useState('All');
  const [is24x7Only, setIs24x7Only] = useState(false);

  // Modals state
  const [selectedCenterForDetail, setSelectedCenterForDetail] = useState(null);
  const [selectedCenterForBooking, setSelectedCenterForBooking] = useState(null);
  const [isPrdOpen, setIsPrdOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Provider active tab
  const [providerTab, setProviderTab] = useState('overview'); // 'overview' | 'manage' | 'staff'

  // Toast message
  const [toastMessage, setToastMessage] = useState('');

  // Persist states
  useEffect(() => {
    localStorage.setItem('ls_centers', JSON.stringify(centers));
  }, [centers]);

  useEffect(() => {
    localStorage.setItem('ls_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('ls_verification', JSON.stringify(verificationQueue));
  }, [verificationQueue]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Filter centers based on query and filters
  const filteredCenters = centers.filter((c) => {
    const matchesQuery = !searchQuery || 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matches24x7 = !is24x7Only || c.is24x7;

    const matchesAge = selectedAgeGroup === 'All' || c.ageGroups.includes(selectedAgeGroup);

    const matchesTiming = selectedTiming === 'All' || 
      (selectedTiming === '24 Hours' && c.is24x7) ||
      (selectedTiming === 'Night' && c.is24x7) ||
      (selectedTiming === 'Day' && !c.is24x7);

    return matchesQuery && matches24x7 && matchesAge && matchesTiming;
  });

  // Booking handlers
  const handleBookingSuccess = (newBooking) => {
    setBookings([newBooking, ...bookings]);
    setSelectedCenterForBooking(null);
    setActiveTab('my-bookings');
    showToast(`Booking ${newBooking.id} created successfully! SMS notification sent.`);
  };

  const handleCancelBooking = (bookingId) => {
    setBookings(bookings.map(b => b.id === bookingId ? { ...b, status: 'Cancelled' } : b));
    showToast(`Booking ${bookingId} has been cancelled.`);
  };

  // Provider handlers
  const handleAcceptBooking = (id) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: 'Confirmed' } : b));
    showToast(`Booking request ${id} accepted!`);
  };

  const handleRejectBooking = (id) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: 'Rejected' } : b));
    showToast(`Booking request ${id} declined.`);
  };

  const handleSaveCenter = (updatedCenter) => {
    setCenters(centers.map(c => c.id === updatedCenter.id ? updatedCenter : c));
    showToast(`Daycare details updated!`);
  };

  const handleToggle24x7 = () => {
    const primaryCenter = centers[0];
    const updated = { ...primaryCenter, is24x7: !primaryCenter.is24x7 };
    setCenters(centers.map(c => c.id === updated.id ? updated : c));
    showToast(`24×7 Operating Mode ${updated.is24x7 ? 'Activated' : 'Deactivated'}`);
  };

  const handleAddCaregiver = (newCg) => {
    const primaryCenter = centers[0];
    const updated = { ...primaryCenter, caregivers: [...primaryCenter.caregivers, newCg] };
    setCenters(centers.map(c => c.id === updated.id ? updated : c));
    showToast(`Caregiver ${newCg.name} added to roster!`);
  };

  const handleDeleteCaregiver = (cgId) => {
    const primaryCenter = centers[0];
    const updated = { ...primaryCenter, caregivers: primaryCenter.caregivers.filter(cg => cg.id !== cgId) };
    setCenters(centers.map(c => c.id === updated.id ? updated : c));
    showToast(`Caregiver removed from roster.`);
  };

  // Admin handlers
  const handleApproveApplicant = (id) => {
    setVerificationQueue(verificationQueue.map(v => v.id === id ? { ...v, status: 'Approved' } : v));
    showToast(`Applicant ${id} approved & verified!`);
  };

  const handleRejectApplicant = (id) => {
    setVerificationQueue(verificationQueue.map(v => v.id === id ? { ...v, status: 'Rejected' } : v));
    showToast(`Applicant ${id} rejected.`);
  };

  return (
    <div className="app-root">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{ position: 'fixed', top: '80px', right: '24px', zIndex: 2000, backgroundColor: 'var(--text-main)', color: 'white', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', animation: 'fadeIn 0.2s ease-out' }}>
          <CheckCircle2 size={18} color="#10B981" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navbar Header */}
      <Navbar 
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openPrdModal={() => setIsPrdOpen(true)}
        openChatModal={() => setIsChatOpen(true)}
      />

      {/* Main View Router */}
      <main>
        {currentRole === 'parent' && (
          <>
            {activeTab === 'explore' && (
              <>
                <HeroSection 
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedAgeGroup={selectedAgeGroup}
                  setSelectedAgeGroup={setSelectedAgeGroup}
                  selectedTiming={selectedTiming}
                  setSelectedTiming={setSelectedTiming}
                  is24x7Only={is24x7Only}
                  setIs24x7Only={setIs24x7Only}
                />

                {/* Daycare Directory Section */}
                <section className="container" style={{ padding: '2.5rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h2 style={{ fontSize: '1.6rem' }}>Verified 24×7 Childcare & Crèches</h2>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        Showing {filteredCenters.length} centers in your area matching criteria.
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {is24x7Only && (
                        <span className="badge badge-24x7">
                          🌙 24×7 Filter Active
                        </span>
                      )}
                      {selectedAgeGroup !== 'All' && (
                        <span className="badge badge-primary">
                          👶 {selectedAgeGroup}
                        </span>
                      )}
                      {(is24x7Only || selectedAgeGroup !== 'All' || searchQuery) && (
                        <button 
                          className="btn btn-secondary btn-sm"
                          onClick={() => { setSearchQuery(''); setSelectedAgeGroup('All'); setSelectedTiming('All'); setIs24x7Only(false); }}
                        >
                          Clear Filters
                        </button>
                      )}
                    </div>
                  </div>

                  {filteredCenters.length === 0 ? (
                    <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
                      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔍</div>
                      <h3>No daycare centers matched your search</h3>
                      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Try clearing your filters or changing location keywords.</p>
                      <button className="btn btn-primary" onClick={() => { setSearchQuery(''); setSelectedAgeGroup('All'); setSelectedTiming('All'); setIs24x7Only(false); }}>
                        Show All Centers
                      </button>
                    </div>
                  ) : (
                    <div className="grid-layout">
                      {filteredCenters.map((center) => (
                        <CenterCard 
                          key={center.id}
                          center={center}
                          onSelectCenter={(c) => setSelectedCenterForDetail(c)}
                          onBookCenter={(c) => setSelectedCenterForBooking(c)}
                        />
                      ))}
                    </div>
                  )}
                </section>
              </>
            )}

            {activeTab === 'my-bookings' && (
              <MyBookingsTab 
                bookings={bookings}
                onCancelBooking={handleCancelBooking}
              />
            )}

            {activeTab === 'subscriptions' && (
              <SubscriptionsTab />
            )}
          </>
        )}

        {/* Provider Dashboard Router */}
        {currentRole === 'provider' && (
          <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <div className="tabs-header">
              <div 
                className={`tab-item ${providerTab === 'overview' ? 'active' : ''}`}
                onClick={() => setProviderTab('overview')}
              >
                Center Overview & Requests
              </div>
              <div 
                className={`tab-item ${providerTab === 'manage' ? 'active' : ''}`}
                onClick={() => setProviderTab('manage')}
              >
                Edit Center Details & Pricing
              </div>
              <div 
                className={`tab-item ${providerTab === 'staff' ? 'active' : ''}`}
                onClick={() => setProviderTab('staff')}
              >
                Caregiver Staff Roster ({centers[0].caregivers.length})
              </div>
            </div>

            {providerTab === 'overview' && (
              <ProviderOverview 
                center={centers[0]}
                bookings={bookings}
                onAcceptBooking={handleAcceptBooking}
                onRejectBooking={handleRejectBooking}
                onToggle24x7={handleToggle24x7}
              />
            )}

            {providerTab === 'manage' && (
              <ManageCenter 
                center={centers[0]}
                onSaveCenter={handleSaveCenter}
              />
            )}

            {providerTab === 'staff' && (
              <CaregiverRoster 
                caregivers={centers[0].caregivers}
                onAddCaregiver={handleAddCaregiver}
                onDeleteCaregiver={handleDeleteCaregiver}
              />
            )}
          </div>
        )}

        {/* Admin Dashboard Router */}
        {currentRole === 'admin' && (
          <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <AdminOverview 
              verificationQueue={verificationQueue}
              onApproveApplicant={handleApproveApplicant}
              onRejectApplicant={handleRejectApplicant}
            />
          </div>
        )}

        {/* Static Tabs (FAQs, Job Portal) */}
        {activeTab === 'jobs' && <JobPortal />}
        {activeTab === 'faqs' && <FAQs />}

      </main>

      {/* Floating 24/7 AI Concierge Trigger */}
      <button 
        className="floating-chat-trigger"
        onClick={() => setIsChatOpen(true)}
      >
        <Moon size={18} />
        <span>24×7 Help</span>
      </button>

      {/* Modals */}
      <CenterDetailModal 
        center={selectedCenterForDetail}
        onClose={() => setSelectedCenterForDetail(null)}
        onBookCenter={(c) => setSelectedCenterForBooking(c)}
      />

      <BookingModal 
        center={selectedCenterForBooking}
        onClose={() => setSelectedCenterForBooking(null)}
        onBookingSuccess={handleBookingSuccess}
      />

      <PRDDocModal 
        isOpen={isPrdOpen}
        onClose={() => setIsPrdOpen(false)}
      />

      <ChatSupportModal 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Footer */}
      <Footer 
        openPrdModal={() => setIsPrdOpen(true)}
        openChatModal={() => setIsChatOpen(true)}
      />

    </div>
  );
}
