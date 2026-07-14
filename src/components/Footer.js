"use client";

export default function Footer() {
  return (
    <footer style={{ 
      padding: '4rem 2rem', 
      borderTop: '1px solid rgba(255,255,255,0.05)', 
      backgroundColor: '#050505', 
      textAlign: 'center',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <h3 style={{ 
          fontSize: '2rem', 
          fontWeight: '800', 
          color: '#ffffff', 
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem'
        }}>
          Let's build <span style={{ color: 'var(--primary-color)' }}>AI products</span> together.
        </h3>
        
        <p style={{ 
          color: 'var(--text-color)', 
          fontSize: '1rem', 
          marginBottom: '2.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontWeight: '600'
        }}>
          Open to Remote 🌍
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="mailto:sahariarhossain524@gmail.com" className="footer-link" style={{ 
            color: '#ffffff', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'}
          onMouseOut={(e) => e.target.style.color = '#ffffff'}
          >
            Email
          </a>
          <a href="https://www.linkedin.com/in/sahariar-hossain-4641303b2/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ 
            color: '#ffffff', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'}
          onMouseOut={(e) => e.target.style.color = '#ffffff'}
          >
            LinkedIn
          </a>
          <a href="https://github.com/sahariarhossain524-sketch" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ 
            color: '#ffffff', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'}
          onMouseOut={(e) => e.target.style.color = '#ffffff'}
          >
            GitHub
          </a>
        </div>
        
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Sahariar Hossain. Crafted with Next.js & Antigravity.
        </p>

      </div>
    </footer>
  );
}
