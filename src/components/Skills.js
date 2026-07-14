"use client";

import Image from 'next/image';

export default function Skills() {
  const categories = [
    { name: 'AI & LLMs', icon: '✦', skills: ['Gemini API', 'LLM Integration', 'AI Agents', 'Prompt Engineering', 'Structured Outputs', 'Streaming UI'] },
    { name: 'Frontend', icon: '✦', skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Framer Motion', 'GSAP', 'Shadcn UI', 'Vite'] },
    { name: 'Backend', icon: '✦', skills: ['REST APIs', 'Node.js', 'Stripe API', 'OAuth', 'Next.js API'] },
    { name: 'Database', icon: '✦', skills: ['PostgreSQL', 'Supabase', 'Prisma ORM'] },
    { name: 'Cloud & DevOps', icon: '✦', skills: ['Serverless', 'Edge Computing', 'GitHub Actions', 'CI/CD Pipelines'] },
    { name: 'Deployment', icon: '✦', skills: ['Vercel', 'Custom Domains', 'Webhooks'] },
    { name: 'Architecture', icon: '✦', skills: ['Microservices', 'System Design', 'Event-Driven', 'State Machines'] },
    { name: 'Tools', icon: '✦', skills: ['Antigravity', 'AI Studio', 'Git', 'Postman', 'Figma'] }
  ];

  const iconMap = {
    'Gemini API': 'googlegemini',
    'OpenAI API': 'openai',
    'Anthropic API': 'anthropic',
    'Vercel AI SDK': 'vercel',
    'Next.js': 'nextdotjs',
    'React': 'react',
    'TypeScript': 'typescript',
    'Tailwind CSS': 'tailwindcss',
    'Framer Motion': 'framer',
    'GSAP': 'greensock',
    'Vite': 'vite',
    'Node.js': 'nodedotjs',
    'Stripe API': 'stripe',
    'PostgreSQL': 'postgresql',
    'Supabase': 'supabase',
    'Prisma ORM': 'prisma',
    'GitHub Actions': 'githubactions',
    'Vercel': 'vercel',
    'Git': 'git',
    'Postman': 'postman',
    'Figma': 'figma',
    'Antigravity': 'google'
  };

  const getIconUrl = (skill) => {
    if (skill === 'OpenAI API') {
      return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310a37f'%3E%3Cpath d='M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2057 5.9847 5.9847 0 0 0 3.998-2.9002 6.0462 6.0462 0 0 0-.7478-7.073Zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944ZM2.5726 15.3072a4.4993 4.4993 0 0 1-.2533-3.0538l.1396.082 4.7832 2.7581a.7948.7948 0 0 0 .7854 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4993 4.4993 0 0 1-7.1674-4.643Zm13.824-7.9863-5.8428 3.3685-5.8428-3.3685L6.7316 6.152a.0828.0828 0 0 1 .033-.0615l4.097-2.3687a4.504 4.504 0 0 1 6.0801 1.636 4.4993 4.4993 0 0 1 .5508 3.0118l-.1372-.0805-4.7832-2.758a.7995.7995 0 0 0-.7855 0Zm5.0519 1.1983a4.504 4.504 0 0 1-.2508 3.0515l-.1372-.082-4.7832-2.758a.7995.7995 0 0 0-.7854 0l-5.8428 3.3684v-2.3323a.0804.0804 0 0 1 .0332-.0615l4.097-2.3687a4.504 4.504 0 0 1 7.1674 4.6431Zm-2.7844-3.5684-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052V8.3128a4.504 4.504 0 0 1 4.4944-4.4944 4.4755 4.4755 0 0 1 2.8765 1.0408l-.142.0804Z'/%3E%3C/svg%3E";
    }
    // These logos are black by default, so we keep them white to be visible on the dark background
    if (['Next.js', 'GitHub Actions', 'Vercel', 'Prisma ORM'].includes(skill)) {
      return `https://cdn.simpleicons.org/${iconMap[skill]}/ffffff`;
    }
    return `https://cdn.simpleicons.org/${iconMap[skill]}`;
  };

  return (
    <section id="skills" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Portfolio matching radial background */}
      <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '1200px', height: '1200px', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.02, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', pointerEvents: 'none' }}></div>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div className="glass-card fade-in" style={{ 
          padding: '4rem', 
          borderRadius: '24px', 
          background: 'rgba(17, 17, 17, 0.85)', 
          backdropFilter: 'blur(20px)', 
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)', 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)' 
        }}>
          
          {/* Large Premium Heading */}
          <div style={{ marginBottom: '5rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: '700', 
              color: 'var(--primary-color)', 
              letterSpacing: '-0.04em', 
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}>
              Technical Arsenal.
            </h2>
            <p className="delay-1" style={{ 
              color: 'rgba(255,255,255,0.7)', 
              fontSize: '1.15rem', 
              letterSpacing: '0.02em', 
              maxWidth: '500px',
              lineHeight: '1.6',
              fontWeight: '400'
            }}>
              The professional toolset I use to engineer highly scalable, production-ready AI applications.
            </p>
          </div>
          
          {/* 4-Column Responsive Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '4rem 3rem' 
          }}>
            {categories.map((cat, index) => (
              <div key={index} className={`delay-${(index % 4) + 1}`}>
                
                <h3 style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--primary-color)', 
                  fontWeight: '700', 
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase', 
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ color: 'var(--primary-color)', fontSize: '0.8rem' }}>{cat.icon}</span> 
                  {cat.name}
                </h3>
                
                <div style={{ 
                  display: 'inline-flex', 
                  flexWrap: 'wrap', 
                  alignItems: 'center', 
                  rowGap: '0.8rem',
                  columnGap: '0.5rem',
                  color: '#ffffff', 
                  fontSize: '1rem', 
                  lineHeight: '1.5',
                  fontWeight: '500'
                }}>
                  {cat.skills.map((skill, i) => (
                    <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <span 
                        style={{ 
                          color: 'rgba(255,255,255,0.85)', 
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 
                          cursor: 'default',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          position: 'relative'
                        }}
                        onMouseOver={(e) => { 
                          e.currentTarget.style.color = '#ffffff';
                          const textSpan = e.currentTarget.querySelector('.skill-text');
                          if (textSpan) textSpan.style.boxShadow = '0 1px 0 0 #ffffff';
                        }}
                        onMouseOut={(e) => { 
                          e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                          const textSpan = e.currentTarget.querySelector('.skill-text');
                          if (textSpan) textSpan.style.boxShadow = 'none';
                        }}
                      >
                        {iconMap[skill] && (
                          <Image 
                            src={getIconUrl(skill)} 
                            alt={`${skill} icon`} 
                            width={16}
                            height={16}
                            style={{ transition: 'filter 0.3s ease' }} 
                            unoptimized
                          />
                        )}
                        <span className="skill-text" style={{ transition: 'box-shadow 0.3s ease' }}>{skill}</span>
                      </span>
                      
                      {i < cat.skills.length - 1 && (
                        <span style={{ 
                          color: 'var(--primary-color)', 
                          marginLeft: '0.6rem',
                          marginRight: '0.2rem', 
                          userSelect: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '800'
                        }}>
                          /
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
