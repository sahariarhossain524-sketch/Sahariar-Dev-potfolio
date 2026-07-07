"use client";

export default function Projects() {
  const projects = [
    {
      title: 'Design Your World (Digital Assets)',
      description: 'A premium, highly animated digital assets and templates marketplace generated entirely using Kimi AI. Features complex GSAP scroll animations, Lenis smooth scrolling, and an extensive custom Shadcn UI component architecture.',
      tags: ['React', 'Vite', 'GSAP', 'Tailwind CSS'],
      link: 'https://app-one-sigma-78.vercel.app'
    },
    {
      title: 'ShopMate - Premium E-commerce Store',
      description: 'A high-performance e-commerce storefront built with Next.js App Router, Prisma ORM, and Tailwind CSS. Features smooth Framer Motion animations, dynamic cart state management, and an ultra-modern UI.',
      tags: ['Next.js', 'Prisma', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://novaflow-dashboard-one.vercel.app'
    },
    {
      title: 'Full-Stack E-commerce Platform (NEXA)',
      description: 'A production-ready e-commerce platform orchestrated entirely via AI agents. Features secure user authentication, a real-time PostgreSQL database, and a live payment gateway integration.',
      tags: ['Next.js', 'Supabase', 'Clerk Auth', 'Stripe API'],
      link: 'https://ecommerce-store-rust-psi.vercel.app'
    },
    {
      title: 'ResuAI Pro - Premium Resume Builder',
      description: 'An advanced, ATS-friendly Markdown resume and cover letter builder. Integrated with Google Gemini 2.5 API for context-aware content generation, dual-document tabs, and direct high-quality PDF exports.',
      tags: ['Next.js', 'Zustand', 'Gemini AI', 'Tailwind CSS'],
      link: 'https://ai-cv-editor-neon.vercel.app'
    },
    {
      title: 'Kanban Board (Task Management)',
      description: 'A robust drag-and-drop task management application built with Next.js and Tailwind CSS. Features complex state management, interactive UI components, and a modern project management aesthetic.',
      tags: ['Next.js', 'React DND', 'Tailwind CSS', 'Zustand'],
      link: 'https://kanban-board-alpha-ochre-29.vercel.app'
    },
    {
      title: 'AI Dashboard (SaaS App)',
      description: 'A modern, highly responsive AI SaaS Dashboard featuring dark mode support, interactive data visualizations with Recharts, and a premium UI component architecture.',
      tags: ['Next.js', 'Tailwind CSS', 'Recharts', 'Lucide React'],
      link: 'https://ai-dashboard-nine-kappa.vercel.app'
    },
    {
      title: 'Smart AI Cover Letter Generator',
      description: 'A Next.js web application powered by Google Gemini AI. It takes a user\'s resume and a job description to instantly generate highly tailored, professional cover letters. Features a modern UI built with Tailwind CSS.',
      tags: ['Next.js', 'React', 'Gemini API', 'Tailwind CSS'],
      link: 'https://ai-cover-letter-nu-nine.vercel.app'
    },

    {
      title: 'GrowthEdge Consulting',
      description: 'A modern, responsive landing page for a strategic consulting firm. Features clean typography, smooth reveal animations, and a professional corporate aesthetic built with utility-first CSS.',
      tags: ['Tailwind CSS', 'HTML5', 'UI/UX', 'Responsive Design'],
      link: 'https://sahariarhossain524-sketch.github.io/Sahariar-Dev/growthedge.html'
    },
    {
      title: 'Alex Carter Portfolio',
      description: 'A sleek, personal portfolio template designed for creative professionals. Implements modern CSS layouts and interactive UI elements for an engaging user experience.',
      tags: ['HTML/CSS', 'Tailwind CSS', 'Frontend Development'],
      link: 'https://sahariarhossain524-sketch.github.io/Sahariar-Dev/alexcarter.html'
    },
    {
      title: 'UrbanNest Real Estate',
      description: 'A highly visual property listing landing page. Focuses on structured component design, image optimization, and mobile-first responsive interfaces.',
      tags: ['Tailwind CSS', 'Web Design', 'Frontend'],
      link: 'https://sahariarhossain524-sketch.github.io/Sahariar-Dev/urbannest.html'
    }
  ];

  const cardGradients = [
    'linear-gradient(135deg, #475569, #1E293B)', // Ash to Dark Slate
    'linear-gradient(135deg, #3B82F6, #1E293B)', // Primary Blue to Dark Slate
    'linear-gradient(135deg, #334155, #0F172A)', // Mid Ash to Deep Ash
    'linear-gradient(135deg, #06B6D4, #1E293B)', // Cyan to Dark Slate
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>
        <p className="section-subtitle fade-in delay-1">A selection of my recent full-stack applications and AI-driven product deliveries.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
          {projects.map((project, index) => (
            <div key={index} className={`glass-card fade-in delay-${(index % 3) + 1}`} style={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
              {/* Dynamic Ash/Premium Top Border */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: cardGradients[index % 4], opacity: 0.8 }}></div>
              
              {/* Ash Watermark Number */}
              <div style={{ position: 'absolute', right: '-10px', top: '-10px', fontSize: '8rem', fontWeight: '900', color: 'rgba(148, 163, 184, 0.04)', zIndex: '0', pointerEvents: 'none', lineHeight: '1' }}>
                0{index + 1}
              </div>

              <div style={{ position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'column', flex: '1' }}>
                <h3 style={{ color: 'var(--primary-color)', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '700', letterSpacing: '-0.01em' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-color)', marginBottom: '1.5rem', flex: '1', lineHeight: '1.7' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', backgroundColor: 'rgba(148, 163, 184, 0.08)', border: '1px solid rgba(148, 163, 184, 0.15)', padding: '0.4rem 0.8rem', borderRadius: '5px', color: 'var(--heading-color)', fontWeight: '500' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', fontWeight: '600', borderBottom: '2px solid var(--primary-color)', paddingBottom: '0.2rem', width: 'fit-content', color: 'var(--heading-color)', transition: 'color 0.3s ease, border-color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.target.style.color = 'var(--heading-color)'}>
                  View Live Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
