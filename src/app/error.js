"use client"; // Error components must be Client Components

import { useEffect } from 'react';
import MagneticButton from '@/components/MagneticButton';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error Caught:', error);
  }, [error]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--bg-color)',
      color: '#ffffff',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 0, 0, 0.2)',
        borderRadius: '24px',
        padding: '4rem 2rem',
        maxWidth: '500px',
        width: '100%'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚨</div>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: '#ff4444' }}>
          Something went wrong!
        </h2>
        <p style={{ color: 'var(--text-color)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
          An unexpected error occurred in the application. Don't worry, the engineering team has been notified.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <MagneticButton as="div">
            <button
              onClick={() => reset()}
              className="btn-primary"
              style={{ border: 'none', cursor: 'pointer', padding: '0.8rem 2rem', fontSize: '1rem' }}
            >
              Try again
            </button>
          </MagneticButton>
          <MagneticButton as="div">
            <a href="/" className="btn-secondary" style={{ padding: '0.8rem 2rem', fontSize: '1rem', color: '#fff', textDecoration: 'none' }}>
              Go Home
            </a>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
