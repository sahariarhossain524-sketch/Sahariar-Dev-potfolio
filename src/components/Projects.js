"use client";

import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';
import { projectsData, otherProjects } from '../data/projectsData';

export default function Projects() {
  const SectionHeading = ({ title }) => (
    <h4 style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', paddingBottom: '0.5rem' }}>
      {title}
    </h4>
  );

  return (
    <section id="projects" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decorators */}
      <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, transparent 60%)', pointerEvents: 'none' }}></div>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Main Section Header */}
        <ScrollReveal>
          <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Featured Projects <span style={{ color: 'var(--primary-color)' }}>⭐⭐⭐⭐⭐</span>
            </h2>
            <p style={{ color: 'var(--text-color)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Enterprise-level case studies detailing the architecture, challenges, and impact of my recent AI-driven product deliveries.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Enterprise Case Studies Preview Cards (Top 4) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
          {projectsData.map((project, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="glass-card" style={{ 
                background: 'rgba(17, 17, 17, 0.85)', 
                backdropFilter: 'blur(20px)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '24px', 
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                
                {/* Subtle Top Border Highlight */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)', opacity: 0.5 }}></div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: '800', opacity: 0.5 }}>{project.id}</span>
                  <h3 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: '1.1' }}>{project.title}</h3>
                </div>
                
                <p style={{ color: 'var(--primary-color)', fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem' }}>{project.subtitle}</p>
                
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
                  {project.executiveSummary}
                </p>

                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Type</span>
                      <strong style={{ color: '#ffffff', fontSize: '0.85rem' }}>{project.quickFacts.type}</strong>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tech</span>
                      <strong style={{ color: '#ffffff', fontSize: '0.85rem' }}>{project.techStack.slice(0,2).join(' • ')}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <MagneticButton as="div" style={{ flexGrow: 1 }}>
                    <Link href={`/projects/${project.slug}`} className="btn-primary" style={{ display: 'block', width: '100%', padding: '0.8rem 1.5rem', fontSize: '1rem' }}>
                      Read Case Study 🚀
                    </Link>
                  </MagneticButton>
                  <MagneticButton as="div">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'block', width: '100%', padding: '0.8rem 1.5rem', fontSize: '1rem', color: '#ffffff' }}>
                      GitHub
                    </a>
                  </MagneticButton>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other Projects Grid (Compact) */}
        <div style={{ marginTop: '8rem' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>Other Notable Projects</h3>
              <p style={{ color: 'var(--text-color)' }}>A selection of frontend interfaces, dashboards, and digital assets.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {otherProjects.map((project, idx) => (
              <TiltCard key={idx}>
                <div style={{ 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(255,255,255,0.05)', 
                  borderRadius: '16px', 
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                >
                  <h4 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>{project.title}</h4>
                  <p style={{ color: 'var(--text-color)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
                  
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '1.5rem' }}>
                    {project.tech}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: '600', transition: 'color 0.2s', zIndex: 10, position: 'relative' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>Demo ↗</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: '600', transition: 'color 0.2s', zIndex: 10, position: 'relative' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>GitHub ↗</a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
