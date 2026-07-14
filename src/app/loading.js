export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'var(--bg-color)',
      padding: '2rem'
    }}>
      <style>{`
        @keyframes pulseSkeleton {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
        .skeleton {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          animation: pulseSkeleton 1.5s infinite ease-in-out;
        }
      `}</style>

      {/* Hero Skeleton */}
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        
        {/* Title Skeleton */}
        <div className="skeleton" style={{ width: '80%', height: '4rem', borderRadius: '16px' }}></div>
        
        {/* Subtitle Skeleton */}
        <div className="skeleton" style={{ width: '50%', height: '2rem' }}></div>
        
        {/* Paragraph Skeleton */}
        <div className="skeleton" style={{ width: '90%', height: '1.2rem', marginTop: '1rem' }}></div>
        <div className="skeleton" style={{ width: '70%', height: '1.2rem' }}></div>
        
        {/* Metric Cards Skeleton */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton" style={{ width: '130px', height: '100px', borderRadius: '16px' }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
