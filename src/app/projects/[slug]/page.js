import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import MagneticButton from '@/components/MagneticButton';

// Generate static routes at build time
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: 'Not Found' };
  
  return {
    title: `${project.title} - Case Study | Sahariar Hossain`,
    description: project.executiveSummary,
  };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const SectionTitle = ({ children }) => (
    <h3 style={{ 
      fontSize: '2rem', 
      fontWeight: '800', 
      color: '#ffffff', 
      letterSpacing: '-0.02em', 
      marginBottom: '1.5rem',
      paddingBottom: '0.5rem',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      {children}
    </h3>
  );

  return (
    <main style={{ minHeight: '100vh', padding: '120px 0 60px', background: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Back Navigation */}
        <div style={{ marginBottom: '3rem' }}>
          <Link href="/#projects" style={{ color: 'var(--primary-color)', fontSize: '1rem', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>←</span> Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <header style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary-color)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Case Study
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem', fontWeight: '800' }}>{project.id}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.03em', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '2.5rem' }}>
            {project.subtitle}
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <MagneticButton as="div">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.05rem' }}>
                View Live Product ↗
              </a>
            </MagneticButton>
            <MagneticButton as="div">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.8rem 2rem', fontSize: '1.05rem', color: '#ffffff' }}>
                Source Code ↗
              </a>
            </MagneticButton>
          </div>
        </header>

        {/* Quick Facts Panel */}
        <section style={{ 
          background: 'rgba(17, 17, 17, 0.6)', 
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.05)', 
          borderRadius: '24px', 
          padding: '2.5rem',
          marginBottom: '5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Role</span>
            <strong style={{ color: '#ffffff', fontSize: '1.1rem' }}>{project.quickFacts.role}</strong>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Timeline</span>
            <strong style={{ color: '#ffffff', fontSize: '1.1rem' }}>{project.quickFacts.duration}</strong>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Status</span>
            <strong style={{ color: 'var(--primary-color)', fontSize: '1.1rem' }}>{project.quickFacts.status}</strong>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Core Technologies</span>
            <strong style={{ color: '#ffffff', fontSize: '1.1rem' }}>{project.quickFacts.tech}</strong>
          </div>
        </section>

        {/* Main Content Sections */}
        <article style={{ display: 'flex', flexDirection: 'column', gap: '4rem', color: 'var(--text-color)', fontSize: '1.15rem', lineHeight: '1.8' }}>
          
          <section>
            <SectionTitle>Executive Summary</SectionTitle>
            <p>{project.executiveSummary}</p>
          </section>

          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <SectionTitle>The Problem</SectionTitle>
              <p>{project.businessProblem}</p>
            </div>
            <div>
              <SectionTitle>User Pain Points</SectionTitle>
              <ul style={{ paddingLeft: '1.2rem' }}>
                {project.userPainPoints.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <SectionTitle>Research & Discovery</SectionTitle>
            <p>{project.research}</p>
          </section>

          <section>
            <SectionTitle>The Solution</SectionTitle>
            <p>{project.solution}</p>
          </section>

          {/* Architecture Visualization */}
          <section>
            <SectionTitle>System Architecture</SectionTitle>
            <div style={{ 
              background: '#050505', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '16px', 
              padding: '3rem', 
              overflowX: 'auto',
              fontFamily: 'monospace',
              color: 'var(--primary-color)',
              fontSize: '1rem',
              lineHeight: '1.5',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <pre style={{ margin: 0, textShadow: '0 0 15px rgba(16, 185, 129, 0.3)' }}>
                {project.architecture}
              </pre>
            </div>
          </section>

          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <SectionTitle>Database Design</SectionTitle>
              <p>{project.databaseDesign}</p>
            </div>
            <div>
              <SectionTitle>API Flow</SectionTitle>
              <p>{project.apiFlow}</p>
            </div>
          </section>

          <section>
            <SectionTitle>Tech Stack & Tooling</SectionTitle>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {project.techStack.map((tech, i) => (
                <span key={i} style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  padding: '0.5rem 1.2rem', 
                  borderRadius: '50px',
                  color: '#ffffff',
                  fontSize: '0.95rem'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Implementation Challenges</SectionTitle>
            <p>{project.implementationChallenges}</p>
          </section>

          <section>
            <SectionTitle>Trade-offs</SectionTitle>
            <p>{project.tradeOffs}</p>
          </section>

          <section style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <SectionTitle>Results & Impact</SectionTitle>
            <p style={{ color: '#ffffff', fontWeight: '500', fontSize: '1.25rem' }}>{project.results}</p>
          </section>

          <section>
            <SectionTitle>What I Learned</SectionTitle>
            <p>{project.lessonsLearned}</p>
          </section>

        </article>

        {/* Footer CTA */}
        <div style={{ marginTop: '8rem', textAlign: 'center', paddingBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '1.5rem' }}>Like what you see?</h2>
          <p style={{ color: 'var(--text-color)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>Let's build something amazing together.</p>
          <MagneticButton as="div">
            <Link href="/#contact" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Get In Touch 🚀
            </Link>
          </MagneticButton>
        </div>

      </div>
    </main>
  );
}
