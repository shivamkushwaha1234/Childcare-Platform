import React, { useState } from 'react';
import { X, Send, Bot, Sparkles, PhoneCall, ShieldAlert, Heart } from 'lucide-react';

export default function ChatSupportModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! I am Little Steps 24/7 Concierge. Are you looking for an emergency night-shift crèche, infant sleeper pod, or instant booking help?',
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');

  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    const query = inputText.toLowerCase();
    setInputText('');

    // Generate intelligent AI concierge responses based on PRD requirements
    setTimeout(() => {
      let botResponse = "All daycare centers listed on Little Steps are 100% police verified, offer biometric access, and have CPR-certified pediatric nurses on duty 24/7.";

      if (query.includes('night') || query.includes('shift') || query.includes('overnight')) {
        botResponse = "We have 4 active 24/7 crèches nearby offering dedicated infant sleeper pods and overnight shift care with real-time CCTV app monitoring. Would you like me to reserve a night slot?";
      } else if (query.includes('emergency') || query.includes('urgent')) {
        botResponse = "🚨 Emergency Care Hotline Activated: You can instantly book 'Cradle & Care 24/7 Emergency Crèche' in Whitefield or call our 24/7 Helpline: +91 800-LITTLE-STEPS for priority slot assignment.";
      } else if (query.includes('price') || query.includes('cost') || query.includes('subscription')) {
        botResponse = "Hourly drop-ins start at ₹120/hr. For regular shift workers, our 'Night-Shift Hero' subscription pass is ₹7,999/month and includes 60 hours of overnight care.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content animate-fade-in" 
        style={{ maxWidth: '440px', height: '580px', display: 'flex', flexDirection: 'column', position: 'fixed', bottom: '20px', right: '20px', margin: 0, borderRadius: 'var(--radius-lg)' }} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-coral) 100%)', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={20} color="white" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', color: 'white' }}>24/7 Concierge & Emergency Care</h3>
              <div style={{ fontSize: '0.75rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }}></span>
                Always Active for Working Parents
              </div>
            </div>
          </div>
          <button className="modal-close-btn" style={{ color: 'white' }} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Chat Messages */}
        <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem', backgroundColor: 'var(--bg-subtle)' }}>
          {messages.map((m) => (
            <div 
              key={m.id}
              style={{
                alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                padding: '0.75rem 1rem',
                borderRadius: m.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                backgroundColor: m.sender === 'user' ? 'var(--primary)' : 'var(--bg-card)',
                color: m.sender === 'user' ? 'white' : 'var(--text-main)',
                boxShadow: 'var(--shadow-sm)',
                fontSize: '0.88rem',
                lineHeight: '1.45'
              }}
            >
              <p>{m.text}</p>
              <div style={{ fontSize: '0.68rem', marginTop: '0.3rem', textAlign: 'right', opacity: 0.7 }}>
                {m.time}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Call Hotline Tag */}
        <div style={{ padding: '0.5rem 1rem', backgroundColor: '#FEF2F2', borderTop: '1px solid #FEE2E2', fontSize: '0.78rem', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyBetween: 'space-between' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <ShieldAlert size={14} /> Emergency Helpline: <strong>+91 800-548-8535</strong>
          </span>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSend} style={{ padding: '0.75rem', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '0.5rem', backgroundColor: 'var(--bg-card)' }}>
          <input 
            type="text" 
            className="form-input"
            placeholder="Ask about night care, pricing, emergency slots..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit" className="btn btn-primary" style={{ padding: '0.65rem 0.9rem' }}>
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
