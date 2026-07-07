export default function Skills() {
  const skills = [
    { name: 'Next.js (App Router)', category: 'Full Stack' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Supabase (PostgreSQL)', category: 'Database' },
    { name: 'Stripe API', category: 'Payments' },
    { name: 'Clerk Auth', category: 'Security' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'AI Prompting', category: 'Orchestration' },
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Full Stack': return 'rgba(59, 130, 246, 0.1)'; // Blue
      case 'Frontend': return 'rgba(6, 182, 212, 0.1)'; // Cyan
      case 'Database': return 'rgba(16, 185, 129, 0.1)'; // Emerald
      case 'Payments': return 'rgba(139, 92, 246, 0.1)'; // Purple
      case 'Security': return 'rgba(236, 72, 153, 0.1)'; // Pink
      default: return 'rgba(255, 255, 255, 0.03)';
    }
  };

  const getCategoryBorder = (category) => {
    switch(category) {
      case 'Full Stack': return 'rgba(59, 130, 246, 0.3)';
      case 'Frontend': return 'rgba(6, 182, 212, 0.3)';
      case 'Database': return 'rgba(16, 185, 129, 0.3)';
      case 'Payments': return 'rgba(139, 92, 246, 0.3)';
      case 'Security': return 'rgba(236, 72, 153, 0.3)';
      default: return 'rgba(255, 255, 255, 0.1)';
    }
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <h2 className="section-title fade-in">Core Competencies</h2>
        <p className="section-subtitle fade-in delay-1">The tech stack I use to orchestrate and deploy modern web applications.</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }} className="fade-in delay-2">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card" style={{ 
              padding: '1.2rem 2.5rem', 
              borderRadius: '50px', 
              textAlign: 'center', 
              flex: '1 1 auto', 
              maxWidth: '280px',
              background: `radial-gradient(circle at top right, ${getCategoryColor(skill.category)}, var(--card-bg))`,
              borderColor: getCategoryBorder(skill.category)
            }}>
              <h3 style={{ color: 'var(--heading-color)', fontSize: '1.2rem', margin: '0 0 0.2rem 0', fontWeight: '600' }}>{skill.name}</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-color)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
