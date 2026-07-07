export default function Contact() {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title fade-in">Let's Work Together</h2>
        <p className="section-subtitle fade-in delay-1">Currently open for full-time remote opportunities. Let's discuss how I can bring AI-driven frontend excellence to your team.</p>
        
        <div className="glass-card fade-in delay-2" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--heading-color)' }}>Name</label>
              <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'rgba(0,0,0,0.3)', color: '#fff', fontSize: '1rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--heading-color)' }}>Email</label>
              <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'rgba(0,0,0,0.3)', color: '#fff', fontSize: '1rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--heading-color)' }}>Message</label>
              <textarea placeholder="Tell me about your role..." rows="5" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'rgba(0,0,0,0.3)', color: '#fff', fontSize: '1rem', resize: 'vertical' }}></textarea>
            </div>
            <button type="button" className="btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
