"use client";

import React from 'react';
import MagneticButton from './MagneticButton';
import Link from 'next/link';

export default function EmptyState({ title = "No Data Found", description = "We couldn't find what you were looking for.", actionText = "Go Back", actionHref = "/" }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px dashed rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      textAlign: 'center',
      margin: '2rem 0'
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        background: 'rgba(16, 185, 129, 0.1)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        color: 'var(--primary-color)'
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--text-color)', marginBottom: '2rem', maxWidth: '400px' }}>
        {description}
      </p>
      
      {actionHref && (
        <MagneticButton as="div">
          <Link href={actionHref} className="btn-secondary" style={{ padding: '0.8rem 2rem', fontSize: '0.9rem', color: '#fff' }}>
            {actionText}
          </Link>
        </MagneticButton>
      )}
    </div>
  );
}
