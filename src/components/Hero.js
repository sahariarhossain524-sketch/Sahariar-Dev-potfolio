export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="section-title fade-in delay-1" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          Hi, I'm <span className="text-gradient">Sahariar Hossain</span>
        </h1>
        <h2 className="section-subtitle fade-in delay-2" style={{ color: 'var(--text-color)', fontSize: '1.5rem', fontWeight: '500' }}>
          AI-Assisted Full Stack Developer
        </h2>
        <p className="fade-in delay-2" style={{ maxWidth: '650px', margin: '0 auto 2.5rem', color: 'var(--text-color)', fontSize: '1.15rem' }}>
          Specializing in rapid prototyping and end-to-end product delivery using Next.js, Supabase, and Stripe. I orchestrate AI agents to turn complex business requirements into premium, scalable digital experiences.
        </p>
        <div className="fade-in delay-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="https://github.com/sahariarhossain524-sketch" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub Profile</a>
        </div>
      </div>
    </section>
  );
}
