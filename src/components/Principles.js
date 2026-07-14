export default function Principles() {
  const principles = [
    { title: 'User First', icon: '👥' },
    { title: 'Build Fast', icon: '⚡' },
    { title: 'Measure', icon: '📊' },
    { title: 'Iterate', icon: '🔄' },
    { title: 'Ship', icon: '🚀' },
    { title: 'Repeat', icon: '♾️' }
  ];

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title fade-in">Engineering Principles</h2>
          <p className="section-subtitle fade-in delay-1" style={{ maxWidth: '650px', margin: '0 auto', opacity: 0.9 }}>
            The core methodology I follow to deliver high-impact AI products reliably and rapidly.
          </p>
        </div>

        <div className="fade-in delay-2" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '1.5rem',
          position: 'relative'
        }}>
          {principles.map((p, index) => (
            <div key={index} style={{ 
              padding: '2.5rem 1rem',
              borderRadius: '24px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)'
            }}>
              {/* Premium Number Watermark */}
              <div style={{ 
                position: 'absolute', 
                top: '-5px', 
                right: '5px', 
                fontSize: '5rem', 
                fontWeight: '900', 
                color: 'rgba(255,255,255,0.03)',
                lineHeight: 1,
                pointerEvents: 'none',
                letterSpacing: '-0.05em'
              }}>
                0{index + 1}
              </div>
              
              {/* Icon Container */}
              <div style={{ 
                fontSize: '2rem', 
                marginBottom: '1.5rem',
                background: 'rgba(255,255,255,0.05)',
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.05)',
                zIndex: 1
              }}>
                {p.icon}
              </div>
              
              {/* Title */}
              <h3 style={{ 
                fontSize: '1.1rem', 
                color: 'var(--heading-color)', 
                fontWeight: '700',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                zIndex: 1
              }}>
                {p.title}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
