export default function sitemap() {
  const baseUrl = 'https://sahariarhossain.com';
  
  // Static primary routes
  const routes = ['', '/resume.pdf'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Blog Routes (matching our articles.js data)
  const blogSlugs = [
    'how-i-built-my-ai-resume-builder',
    'building-ai-internal-tools',
    'llm-prompt-engineering',
    'nextjs-best-practices'
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
