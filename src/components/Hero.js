"use client";
import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '8rem', overflow: 'hidden' }}>
      <motion.div 
        className="container" 
        style={{ textAlign: 'center' }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item} style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1rem', fontWeight: '800', letterSpacing: '-0.02em', color: '#fff' }}>
          Hi, I'm <span className="text-gradient">Sahariar Hossain</span>
        </motion.h1>
        
        <motion.h2 variants={item} style={{ color: 'var(--primary-color)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: '700', marginBottom: '1.5rem' }}>
          AI Product Engineer
        </motion.h2>
        
        <motion.h3 variants={item} style={{ color: 'var(--heading-color)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: '500', maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
          Building AI-native Internal Tools, Automation Platforms &<br/>Production-Ready Full-Stack Applications.
        </motion.h3>
        
        <motion.p variants={item} style={{ maxWidth: '750px', margin: '0 auto 3rem', color: 'var(--text-color)', fontSize: '1.15rem', opacity: 0.9, lineHeight: '1.8' }}>
          I design, build and ship AI products that solve real business problems using Next.js, TypeScript, PostgreSQL, Supabase and modern LLM APIs.
        </motion.p>
        
        {/* Statistics/Metrics Section */}
        <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginBottom: '4rem' }}>
          {[
            { value: '10+', label: 'AI Products' },
            { value: '5+', label: 'API Integrations' },
            { value: '100%', label: 'Responsive' },
            { value: '4+', label: 'Production Systems' },
            { value: '2023+', label: 'Building AI Products' }
          ].map((metric, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(17, 17, 17, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '1.2rem 1.5rem',
                borderRadius: '16px',
                minWidth: '140px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.2)'
              }}
            >
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.5rem', lineHeight: '1' }}>
                {metric.value}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={item} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <MagneticButton as="div">
            <a href="#projects" className="btn-primary" style={{ display: 'inline-block', width: '100%' }}>View Projects</a>
          </MagneticButton>
          <MagneticButton as="div">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'inline-block', width: '100%' }}>Download Resume</a>
          </MagneticButton>
          <MagneticButton as="div">
            <a href="#contact" className="btn-secondary" style={{ display: 'inline-block', width: '100%' }}>Contact Me</a>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
