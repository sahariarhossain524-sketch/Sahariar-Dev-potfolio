export default function About() {
  const sections = [
    {
      title: 'Who I Am',
      icon: '🧠',
      content: 'I am an Independent AI Product Engineer. I blend the lines between a traditional software developer and a strategic product manager, focusing on solving complex operational bottlenecks using modern AI technologies.'
    },
    {
      title: 'Professional Story',
      icon: '🚀',
      content: 'Starting as a full-stack developer, I quickly realized that AI was the new operating system for fast-moving businesses. I transitioned entirely to building AI-native products, shipping over 10 production-ready applications focusing on Go-To-Market automation and internal tools.'
    },
    {
      title: 'How I Think',
      icon: '⚙️',
      content: 'I think in systems and scale. When presented with a business problem, I don\'t jump straight to code. I talk to stakeholders, analyze friction points, and design a solution that leverages AI to eliminate manual effort.'
    },
    {
      title: 'How I Build',
      icon: '🏗️',
      content: 'I build for production. Using Next.js, PostgreSQL, and Supabase as my foundation, I integrate Vercel AI SDK and LLMs to create resilient applications. I leverage advanced AI coding assistants to prototype and iterate at unprecedented speeds.'
    },
    {
      title: 'Engineering Philosophy',
      icon: '🎯',
      content: 'Treat internal teams as customers. Internal tools shouldn\'t be clunky admin panels—they deserve the same premium UX, state management, and reliability as top-tier consumer-facing SaaS products.'
    },
    {
      title: 'Product Mindset',
      icon: '💡',
      content: 'Build, Ship, Gather Feedback, Iterate. A product is never truly finished until it actively solves the user\'s problem seamlessly. I rely heavily on real-world usage data to drive my development roadmap.'
    },
    {
      title: 'Working Style',
      icon: '🤝',
      content: 'I thrive in high-ownership, lean, and fast-moving remote environments. I am highly proactive, capable of communicating complex technical architectures to non-technical stakeholders, and take end-to-end responsibility for the products I ship.'
    }
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'rgba(255,255,255,0.01)', position: 'relative' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
        
        {/* Left Sticky Column */}
        <div className="fade-in delay-1" style={{ 
          flex: '1 1 350px', 
          position: 'sticky', 
          top: '120px',
          paddingRight: '2rem'
        }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', color: 'var(--heading-color)', letterSpacing: '-0.02em' }}>
            My<br/><span className="text-gradient">Engineering<br/>Philosophy</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', marginBottom: '2rem', borderRadius: '2px' }}></div>
          <p style={{ color: 'var(--text-color)', fontSize: '1.15rem', lineHeight: '1.6', opacity: 0.9 }}>
            I don't just write code. I build resilient systems and intelligent automation that solve deep operational bottlenecks and deliver immediate business value.
          </p>
        </div>

        {/* Right Scrolling Column */}
        <div style={{ flex: '2 1 500px', display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {sections.map((sec, index) => (
            <div key={index} className={`fade-in delay-${(index % 3) + 2}`} style={{ 
              position: 'relative', 
              paddingLeft: '2.5rem', 
              borderLeft: '2px solid rgba(255,255,255,0.05)' 
            }}>
              {/* Icon Marker */}
              <div style={{ 
                position: 'absolute', 
                left: '-20px', 
                top: '-5px', 
                fontSize: '1.5rem', 
                background: 'var(--bg-color)', 
                padding: '0.2rem',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                {sec.icon}
              </div>
              
              <h3 style={{ 
                fontSize: '1.6rem', 
                color: 'var(--heading-color)', 
                marginBottom: '1rem', 
                fontWeight: '700',
                letterSpacing: '-0.01em'
              }}>
                {sec.title}
              </h3>
              
              <p style={{ 
                fontSize: '1.1rem', 
                color: 'var(--text-color)', 
                lineHeight: '1.7',
                opacity: 0.85
              }}>
                {sec.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
