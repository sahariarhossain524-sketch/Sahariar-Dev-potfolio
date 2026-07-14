import React from 'react';
import Link from 'next/link';
import { articles } from '../../../data/articles';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)', color: '#fff' }}>
        <h2>Article not found.</h2>
      </div>
    );
  }

  // A simple function to render basic markdown-like structures (##, ###, bold, code)
  const renderContent = (content) => {
    return content.split('\\n\\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;
      
      // H2
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} style={{ color: 'var(--primary-color)', fontSize: '1.8rem', fontWeight: '800', marginTop: '3rem', marginBottom: '1.5rem' }}>{paragraph.replace('## ', '')}</h2>;
      }
      // H3
      if (paragraph.startsWith('### ')) {
        return <h3 key={index} style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem' }}>{paragraph.replace('### ', '')}</h3>;
      }
      
      // Code Blocks
      if (paragraph.startsWith('\`\`\`')) {
        const codeLines = paragraph.split('\\n');
        // Remove first and last line (the ticks)
        const codeStr = codeLines.slice(1, codeLines.length - 1).join('\\n');
        return (
          <div key={index} style={{ background: '#050505', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.5rem', overflowX: 'auto', margin: '2rem 0' }}>
            <pre style={{ margin: 0, color: 'var(--primary-color)', fontFamily: 'monospace', fontSize: '0.9rem' }}>
              {codeStr}
            </pre>
          </div>
        );
      }

      // Lists
      if (paragraph.startsWith('- ')) {
        const listItems = paragraph.split('\\n').map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item.replace('- ', '')}</li>);
        return <ul key={index} style={{ color: 'var(--text-color)', fontSize: '1.1rem', lineHeight: '1.8', margin: '1.5rem 0', paddingLeft: '1.5rem' }}>{listItems}</ul>;
      }
      
      if (paragraph.startsWith('1. ')) {
        const listItems = paragraph.split('\\n').map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item.replace(/^\\d+\\.\\s/, '')}</li>);
        return <ol key={index} style={{ color: 'var(--text-color)', fontSize: '1.1rem', lineHeight: '1.8', margin: '1.5rem 0', paddingLeft: '1.5rem' }}>{listItems}</ol>;
      }

      // Format bold text (naive replace)
      let formattedText = paragraph;
      formattedText = formattedText.replace(/\\*\\*(.*?)\\*\\*/g, '<strong style="color: #ffffff">$1</strong>');
      formattedText = formattedText.replace(/\`(.*?)\`/g, '<code style="background: rgba(16, 185, 129, 0.1); color: var(--primary-color); padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.9em;">$1</code>');

      // Paragraph
      return <p key={index} style={{ color: 'var(--text-color)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }} dangerouslySetInnerHTML={{ __html: formattedText }} />;
    });
  };

  return (
    <main style={{ minHeight: '100vh', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Navigation */}
        <div style={{ marginBottom: '4rem' }}>
          <Link href="/#blog" style={{ color: 'var(--primary-color)', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>←</span> Back to Portfolio
          </Link>
        </div>

        {/* Article Header */}
        <header style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', color: 'var(--text-color)', fontSize: '0.9rem' }}>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '2rem', letterSpacing: '-0.03em' }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {article.tags.map((tag, i) => (
              <span key={i} style={{ 
                fontSize: '0.8rem', 
                color: 'var(--primary-color)', 
                background: 'rgba(16, 185, 129, 0.1)', 
                padding: '0.4rem 1rem', 
                borderRadius: '6px',
                fontWeight: '600'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Body */}
        <article className="fade-in" style={{ paddingBottom: '6rem' }}>
          {renderContent(article.content)}
        </article>
      </div>
    </main>
  );
}
