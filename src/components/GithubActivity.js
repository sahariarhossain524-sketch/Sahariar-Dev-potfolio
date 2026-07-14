"use client";

import React from 'react';
import Image from 'next/image';

export default function GithubActivity() {
  const username = "sahariarhossain524-sketch";
  const themeParams = "&bg_color=111111&title_color=10B981&text_color=ffffff&icon_color=10B981&border_color=262626&hide_border=false";

  return (
    <section id="github" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 className="fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Open Source & <span style={{ color: 'var(--primary-color)' }}>Activity</span>
          </h2>
          <p className="fade-in delay-1" style={{ color: 'var(--text-color)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Real-time insights into my code contributions, top languages, and daily development activity on GitHub.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Top Row: Stats & Languages */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* GitHub Stats */}
            <div className="glass-card fade-in delay-2" style={{ 
              background: 'rgba(17, 17, 17, 0.85)', 
              borderRadius: '24px', 
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <Image 
                src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=radical`} 
                alt="GitHub Profile Details" 
                width={450}
                height={150}
                style={{ width: '100%', maxWidth: '450px', height: 'auto', borderRadius: '12px' }}
                unoptimized
              />
            </div>

            {/* Top Languages */}
            <div className="glass-card fade-in delay-3" style={{ 
              background: 'rgba(17, 17, 17, 0.85)', 
              borderRadius: '24px', 
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <Image 
                src={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=radical`} 
                alt="Top Languages Used on GitHub" 
                width={450}
                height={150}
                style={{ width: '100%', maxWidth: '450px', height: 'auto', borderRadius: '12px' }}
                unoptimized
              />
            </div>
            
          </div>

          {/* Bottom Row: Activity Graph */}
          <div className="glass-card fade-in delay-4" style={{ 
              background: 'rgba(17, 17, 17, 0.85)', 
              borderRadius: '24px', 
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid rgba(255,255,255,0.05)',
              overflowX: 'auto'
            }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', alignSelf: 'flex-start' }}>Contribution Graph</h3>
              <Image 
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=111111&color=10B981&line=10B981&point=ffffff&hide_border=true&title_color=ffffff`} 
                alt="GitHub Activity Graph" 
                width={1000}
                height={400}
                style={{ width: '100%', minWidth: '600px', height: 'auto', borderRadius: '12px' }}
                unoptimized
              />
          </div>

        </div>
      </div>
    </section>
  );
}
