import Link from 'next/link';
import MagneticButton from '@/components/MagneticButton';

export default function NotFound() {
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
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '24px',
        padding: '4rem 2rem',
        maxWidth: '500px',
        width: '100%'
      }}>
        <div style={{ fontSize: '6rem', fontWeight: '900', color: 'var(--primary-color)', lineHeight: '1', marginBottom: '1rem', opacity: 0.8 }}>
          404
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>
          Page Not Found
        </h2>
        <p style={{ color: 'var(--text-color)', marginBottom: '3rem', lineHeight: '1.6' }}>
          The page you are looking for doesn't exist or has been moved to another universe.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MagneticButton as="div">
            <Link href="/" className="btn-primary" style={{ padding: '0.8rem 2.5rem', fontSize: '1rem' }}>
              Return Home 🚀
            </Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
