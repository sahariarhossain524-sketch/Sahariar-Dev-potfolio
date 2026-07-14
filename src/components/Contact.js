"use client";

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    estimatedBudget: '',
    expectedTimeline: '',
    messageBody: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email address';
    }
    if (!formData.messageBody.trim()) newErrors.messageBody = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ fullName: '', workEmail: '', companyName: '', estimatedBudget: '', expectedTimeline: '', messageBody: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const inputStyle = {
    width: '100%', 
    padding: '1rem', 
    borderRadius: '12px', 
    border: '1px solid rgba(255,255,255,0.1)', 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    color: '#ffffff', 
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s'
  };

  const errorInputStyle = { ...inputStyle, borderColor: '#ff4444' };

  const labelStyle = {
    display: 'block', 
    marginBottom: '0.5rem', 
    color: 'var(--text-color)', 
    fontSize: '0.9rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const ErrorText = ({ msg }) => msg ? <span style={{ color: '#ff4444', fontSize: '0.8rem', marginTop: '0.5rem', display: 'block' }}>{msg}</span> : null;

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.03) 0%, transparent 60%)', pointerEvents: 'none' }}></div>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <ScrollReveal>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Let's Work <span style={{ color: 'var(--primary-color)' }}>Together</span>
            </h2>
            <p style={{ color: 'var(--text-color)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Open for full-time remote opportunities or high-impact contract work. Fill out the form below and I'll respond within 24 hours.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="glass-card" style={{ 
            background: 'rgba(17, 17, 17, 0.85)', 
            backdropFilter: 'blur(20px)', 
            border: '1px solid rgba(255,255,255,0.05)', 
            borderRadius: '24px', 
            padding: 'clamp(2rem, 5vw, 4rem)'
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div>
                  <label htmlFor="fullName" style={labelStyle}>Full Name *</label>
                  <input id="fullName" name="fullName" type="text" placeholder="John Doe" value={formData.fullName} onChange={handleChange} style={errors.fullName ? errorInputStyle : inputStyle} onFocus={(e) => !errors.fullName && (e.target.style.borderColor = 'var(--primary-color)')} onBlur={(e) => !errors.fullName && (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
                  <ErrorText msg={errors.fullName} />
                </div>
                <div>
                  <label htmlFor="workEmail" style={labelStyle}>Work Email *</label>
                  <input id="workEmail" name="workEmail" type="email" placeholder="john@company.com" value={formData.workEmail} onChange={handleChange} style={errors.workEmail ? errorInputStyle : inputStyle} onFocus={(e) => !errors.workEmail && (e.target.style.borderColor = 'var(--primary-color)')} onBlur={(e) => !errors.workEmail && (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
                  <ErrorText msg={errors.workEmail} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div>
                  <label htmlFor="companyName" style={labelStyle}>Company</label>
                  <input id="companyName" name="companyName" type="text" placeholder="Startup Inc." value={formData.companyName} onChange={handleChange} style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>
                <div>
                  <label htmlFor="estimatedBudget" style={labelStyle}>Estimated Budget</label>
                  <select id="estimatedBudget" name="estimatedBudget" value={formData.estimatedBudget} onChange={handleChange} style={{...inputStyle, appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2310B981%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto'}} onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                    <option value="" style={{background: '#111'}}>Select Budget</option>
                    <option value="Full-Time Salary" style={{background: '#111'}}>Full-Time Salary</option>
                    <option value="$5k - $10k" style={{background: '#111'}}>$5k - $10k (Project)</option>
                    <option value="$10k+" style={{background: '#111'}}>$10k+ (Project)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="expectedTimeline" style={labelStyle}>Expected Timeline</label>
                <select id="expectedTimeline" name="expectedTimeline" value={formData.expectedTimeline} onChange={handleChange} style={{...inputStyle, appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2310B981%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto'}} onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                  <option value="" style={{background: '#111'}}>Select Timeline</option>
                  <option value="ASAP" style={{background: '#111'}}>ASAP (Immediate Start)</option>
                  <option value="1-3 Months" style={{background: '#111'}}>1-3 Months</option>
                  <option value="3+ Months" style={{background: '#111'}}>3+ Months</option>
                </select>
              </div>

              <div>
                <label htmlFor="messageBody" style={labelStyle}>Message *</label>
                <textarea id="messageBody" name="messageBody" value={formData.messageBody} onChange={handleChange} placeholder="Tell me about your product and technical needs..." rows="5" style={errors.messageBody ? {...errorInputStyle, resize: 'vertical'} : {...inputStyle, resize: 'vertical'}} onFocus={(e) => !errors.messageBody && (e.target.style.borderColor = 'var(--primary-color)')} onBlur={(e) => !errors.messageBody && (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}></textarea>
                <ErrorText msg={errors.messageBody} />
              </div>

              {isSuccess && (
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--primary-color)', color: '#fff', padding: '1rem', borderRadius: '12px', textAlign: 'center', fontWeight: '600' }}>
                  ✅ Message sent successfully! I'll be in touch soon.
                </div>
              )}

              <MagneticButton 
                type="submit" 
                className="btn-primary" 
                style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.1rem', width: '100%', opacity: isSubmitting ? 0.7 : 1, pointerEvents: isSubmitting ? 'none' : 'auto' }} 
                aria-label="Send Proposal"
              >
                {isSubmitting ? 'Sending...' : 'Send Proposal 🚀'}
              </MagneticButton>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
