"use client";

import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

export default function Blog() {
  const posts = [
    {
      title: "How I Built My AI Resume Builder",
      excerpt: "A deep dive into the architecture of DocuAgent Pro. Learn how I combined Next.js, Zustand, and the Gemini 2.5 Flash API to create a client-side PDF generation engine with zero backend latency.",
      date: "Oct 12, 2023",
      readTime: "8 min read",
      tags: ["Architecture", "AI Agents", "React"],
      slug: "how-i-built-my-ai-resume-builder"
    },
    {
      title: "Building AI Internal Tools",
      excerpt: "Why treating your internal operations team as your most important customer changes everything. A guide to discovering and automating high-friction workflows.",
      date: "Sep 28, 2023",
      readTime: "6 min read",
      tags: ["Product", "Operations", "SaaS"],
      slug: "building-ai-internal-tools"
    },
    {
      title: "LLM Prompt Engineering",
      excerpt: "Moving beyond basic prompts to rigorous system constraints. How to force LLMs to output reliable, structured JSON for production-grade sales automation.",
      date: "Sep 15, 2023",
      readTime: "10 min read",
      tags: ["Prompt Engineering", "OpenAI", "Gemini"],
      slug: "llm-prompt-engineering"
    },
    {
      title: "Next.js Best Practices",
      excerpt: "Optimizing React Server Components and dynamic routing for high-traffic e-commerce platforms. Lessons learned from scaling Project NEXA.",
      date: "Aug 30, 2023",
      readTime: "7 min read",
      tags: ["Next.js", "Performance", "RSC"],
      slug: "nextjs-best-practices"
    }
  ];

  return (
    <section id="blog" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <ScrollReveal>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Technical <span style={{ color: 'var(--primary-color)' }}>Writing</span>
            </h2>
            <p style={{ color: 'var(--text-color)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Sharing insights on AI engineering, frontend architecture, and building production-ready products.
            </p>
          </div>
        </ScrollReveal>

        {/* Blog Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {posts.map((post, index) => (
            <TiltCard key={index}>
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{ 
                  background: 'rgba(17, 17, 17, 0.85)', 
                  borderRadius: '20px', 
                  padding: '2rem',
                  border: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'border-color 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--primary-color)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                >
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-color)', fontSize: '0.85rem' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.4' }}>
                    {post.title}
                  </h3>
                  
                  <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                    {post.excerpt}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {post.tags.map((tag, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--primary-color)', 
                        background: 'rgba(16, 185, 129, 0.1)', 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '4px' 
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span style={{ 
                    color: 'var(--primary-color)', 
                    fontWeight: '600', 
                    fontSize: '0.95rem',
                  }}>
                    Read Article →
                  </span>

                </div>
              </Link>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
