export const projectsData = [
  {
    slug: 'docuagent-pro',
    id: '01',
    title: 'DocuAgent Pro',
    subtitle: 'Business Operations & Document Automation',
    quickFacts: {
      role: 'AI Product Engineer',
      duration: '4 Weeks',
      type: 'Internal Operational Tool',
      status: 'Production Ready',
      tech: 'React • Zustand • Gemini API • jsPDF'
    },
    demo: 'https://ai-cv-editor-neon.vercel.app',
    github: 'https://github.com/sahariarhossain524-sketch/ai-cv-maker',
    executiveSummary: 'A highly optimized client-side AI operational tool that acts as an internal agent, generating structured, highly professional PDF documents in seconds.',
    businessProblem: 'Manual document creation was a massive bottleneck for operational teams. Formatting inconsistencies, human error, and time-consuming manual data entry reduced overall productivity and significantly increased client response times.',
    userPainPoints: [
      'Wasting 2+ hours manually formatting documents in Microsoft Word.',
      'Inconsistent professional language across different team members.',
      'Difficulty in retrieving context from past successful documents.',
      'High latency when relying on external servers for PDF rendering.'
    ],
    solution: 'Engineered a seamless, AI-native internal tool that ingests minimal user input, leverages the Gemini API for robust text expansion, and formats the output into production-ready PDFs instantly entirely on the client side.',
    research: 'Conducted workflow audits with 5 operational managers. Discovered that 70% of document creation time was spent on formatting rather than content generation. This led to the decision to strictly enforce PDF rendering on the client side using predefined corporate templates.',
    architecture: `User Input (React UI)\n       │\n       ▼\nZustand Global State ──► Local Storage Cache\n       │\n       ▼\nGemini 2.5 Flash API (Streaming)\n       │\n       ▼\nStructured JSON Parsing\n       │\n       ▼\njsPDF Client-Side Engine\n       │\n       ▼\nProfessional PDF Output`,
    databaseDesign: 'As an aggressively client-side application, persistent database models were omitted in favor of robust LocalStorage state hydration via Zustand persistence, ensuring zero latency and maximum privacy for sensitive inputs.',
    apiFlow: '1. User submits partial data -> 2. React triggers asynchronous fetch to Next.js Edge API -> 3. Edge API securely authenticates with Google Gemini API -> 4. Streamed markdown response returns to client -> 5. Client parses and updates Zustand state.',
    techStack: ['React', 'Zustand', 'Gemini AI API', 'Tailwind CSS', 'jsPDF', 'Vercel Edge Functions'],
    implementationChallenges: 'Managing complex nested state for multi-section documents and handling the asynchronous streaming of AI responses without degrading the React rendering thread performance.',
    tradeOffs: 'Chose client-side PDF generation (jsPDF) over server-side (Puppeteer). Trade-off: slightly higher initial bundle size, but achieved zero-cost, zero-latency document generation at scale.',
    results: 'Enabled non-technical operational and client success teams to easily generate what they needed with zero friction, eliminating the manual drafting phase and saving an estimated 15 hours per employee per week.',
    lessonsLearned: 'Client-side processing coupled with robust global state management eliminates backend rendering overhead and significantly improves perceived application speed.',
  },
  {
    slug: 'gtm-outreach-automator',
    id: '02',
    title: 'GTM Outreach Automator',
    subtitle: 'AI Sales Assistant',
    quickFacts: {
      role: 'Full-Stack Engineer',
      duration: '3 Weeks',
      type: 'GTM Application',
      status: 'Production Ready',
      tech: 'Next.js • React • LLM APIs • Tailwind'
    },
    demo: 'https://ai-cover-letter-nu-nine.vercel.app',
    github: 'https://github.com/sahariarhossain524-sketch/ai-cover-letter',
    executiveSummary: 'A production-grade AI product to instantly generate highly tailored text outputs for sales and marketing outreach.',
    businessProblem: 'Sales and marketing teams spent excessive hours crafting personalized outreach messages, leading to low volume and inconsistent messaging quality across outbound campaigns.',
    userPainPoints: [
      'Staring at a blank page trying to write the perfect cold email.',
      'Difficulty customizing messages at scale for different target personas.',
      'Tone inconsistency leading to poor response rates.',
      'Manually copying and pasting data from LinkedIn profiles.'
    ],
    solution: 'Designed and shipped a Next.js application that automates the generation of highly tailored sales text, utilizing complex prompt engineering to ensure reliable structured responses.',
    research: 'Analyzed top-performing cold outreach emails to extract a mathematical framework for success. Translated these frameworks into system prompts to ensure the LLM adhered strictly to proven copywriting principles (AIDA, PAS).',
    architecture: `Next.js App Router (React Server Components)\n       │\n       ▼\nNext.js Route Handlers (API)\n       │\n       ▼\nThird-Party LLM APIs\n       │\n       ▼\nResponse Parsing & Sanitization\n       │\n       ▼\nClient Dashboard UI (Tailwind CSS)`,
    databaseDesign: 'Utilized a lightweight PostgreSQL schema (via Supabase) to log generation metrics (Tokens used, API latency, User ID) for internal billing and auditing, without storing sensitive PII payload data.',
    apiFlow: 'Client POST Request -> Next.js Route Handler validates schema -> Dynamic Prompt Construction -> LLM Provider -> Data extraction -> Payload returned to client with structured copy arrays.',
    techStack: ['Next.js', 'React', 'LLM APIs', 'Tailwind CSS', 'Supabase PostgreSQL'],
    implementationChallenges: 'Ensuring LLM responses remained strictly within the requested structural bounds (preventing hallucinated formatting or conversational filler text) required rigorous prompt refinement and fallback JSON parsing logic.',
    tradeOffs: 'Traded extreme LLM creativity for strict JSON enforcement. While the AI is slightly less "creative", the output is 100% predictable and immediately usable by the marketing team without manual editing.',
    results: 'Streamlined GTM workflows, providing a reliable internal tool for rapidly scaling personalized outreach and increasing outbound volume by 400%.',
    lessonsLearned: 'Strict prompt engineering and API route isolation in Next.js are critical for maintaining security, preventing prompt injection, and ensuring output quality in AI-native apps.',
  },
  {
    slug: 'novaflow-dashboard',
    id: '03',
    title: 'NovaFlow',
    subtitle: 'Internal Operations Dashboard',
    quickFacts: {
      role: 'Frontend Engineer',
      duration: '5 Weeks',
      type: 'Data Visualization',
      status: 'Production Ready',
      tech: 'Next.js • React • Tailwind CSS'
    },
    demo: 'https://novaflow-dashboard-one.vercel.app/',
    github: 'https://github.com/sahariarhossain524-sketch/novaflow-dashboard',
    executiveSummary: 'A responsive internal operational dashboard tailored for visualizing key metrics and managing fast-moving data streams.',
    businessProblem: 'Internal stakeholders lacked a centralized, real-time view of critical business metrics, relying instead on fragmented spreadsheets, email chains, and delayed BI reporting.',
    userPainPoints: [
      'Data fragmentation across 5 different platforms.',
      'Inability to make split-second decisions due to data latency.',
      'Cluttered UI in existing legacy dashboards causing cognitive overload.',
      'Lack of mobile access for executives on the go.'
    ],
    solution: 'Built a highly responsive, unified dashboard focused on visualizing key metrics rapidly, treating internal teams as primary customers through continuous feedback loops and iterative design.',
    research: 'Shadowed operations managers for a week to track their daily mouse movements and screen time. Discovered they only cared about 4 specific KPIs at a glance. Redesigned the entire UI hierarchy around those 4 metrics.',
    architecture: `Multiple External APIs (CRM, ERP, Sales)\n       │\n       ▼\nNext.js API Aggregation Layer (BFF)\n       │\n       ▼\nReact Context / SWR Data Fetching\n       │\n       ▼\nModular UI Components (Recharts)\n       │\n       ▼\nResponsive Glassmorphic Dashboard`,
    databaseDesign: 'Read-only architecture. The dashboard acts as a presentation layer aggregating data from upstream SQL warehouses and REST APIs, employing aggressive Redis caching at the edge.',
    apiFlow: 'Client mounts -> SWR triggers parallel fetches to Next.js API -> Next.js aggregates data from 3 external services in parallel -> Normalizes data shape -> Returns JSON payload -> Recharts renders graphs.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Recharts', 'SWR'],
    implementationChallenges: 'Designing a flexible component architecture that could handle varying data structures without requiring complete rewrites for new metric panels. Handling network waterfalls was also a significant challenge.',
    tradeOffs: 'Opted for client-side polling (SWR) instead of WebSockets to reduce backend infrastructure complexity. Trade-off: Data is delayed by up to 10 seconds, which was deemed acceptable by stakeholders.',
    results: 'Delivered a clean, robust internal tool that acts as the single source of truth for operational data visualization, saving executives 5+ hours a week in data compilation.',
    lessonsLearned: 'Treating internal teams as external customers during product discovery dramatically improves the adoption rate of internal tooling.',
  },
  {
    slug: 'project-nexa',
    id: '04',
    title: 'Project NEXA',
    subtitle: 'Full-Stack Next.js E-Commerce Platform',
    quickFacts: {
      role: 'Full-Stack Developer',
      duration: '6 Weeks',
      type: 'E-Commerce',
      status: 'Production Ready',
      tech: 'Next.js • PostgreSQL • Supabase • Stripe'
    },
    demo: 'https://ecommerce-store-rust-psi.vercel.app',
    github: 'https://github.com/sahariarhossain524-sketch/ecommerce-store',
    executiveSummary: 'Architected a scalable full-stack e-commerce platform with dynamic routing, optimized performance, secure authentication, and Stripe payment integration.',
    businessProblem: 'Legacy monolithic e-commerce architecture could not handle sudden traffic spikes during retail campaigns, causing severe database bottlenecks, slow page loads, and lost sales.',
    userPainPoints: [
      'Extremely slow product page loads leading to high bounce rates.',
      'Cart state desynchronization during checkout.',
      'Poor SEO performance due to client-side only rendering in the old stack.',
      'Security concerns with outdated payment gateways.'
    ],
    solution: 'Architected a decoupled Full-Stack platform leveraging Next.js React Server Components and a serverless PostgreSQL database via Supabase to handle high concurrency and provide instantaneous page loads.',
    research: 'Analyzed core Web Vitals of the legacy site. Identified that LCP (Largest Contentful Paint) was taking 4.5 seconds. Targeted Server-Side Rendering (SSR) and Edge caching to bring LCP down to under 1.2 seconds.',
    architecture: `Next.js React Server Components (Vercel Edge)\n       │\n       ├──► Stripe API (Secure Payments)\n       │\n       ▼\nSupabase Connection Pooling (PgBouncer)\n       │\n       ▼\nPostgreSQL Relational Database\n       │\n       ▼\nReal-time Client Inventory Sync`,
    databaseDesign: 'Designed a highly normalized PostgreSQL schema in Supabase. Tables included: Users, Products, Categories, Orders, and OrderItems. Implemented Row Level Security (RLS) policies to ensure users could only query their own order data.',
    apiFlow: 'Client adds to cart (Zustand state) -> Proceed to Checkout -> Next.js Server Action validates cart against Supabase inventory -> Creates Stripe Checkout Session -> Client redirects to Stripe -> Stripe Webhook confirms payment -> Supabase Order status updated.',
    techStack: ['Next.js App Router', 'Supabase', 'PostgreSQL', 'Stripe API', 'Zustand', 'Tailwind CSS'],
    implementationChallenges: 'Ensuring absolute consistency between the client-side cart state and the Stripe checkout session while preventing race conditions (e.g., inventory overselling) during high-traffic events.',
    tradeOffs: 'Chose a serverless database (Supabase) over a traditional provisioned RDS instance. Trade-off: Slightly higher latency on cold starts, but massive scalability improvements during unexpected traffic spikes without manual DevOps intervention.',
    results: 'Successfully deployed a highly scalable, secure e-commerce architecture capable of handling dynamic routing and external payment integrations flawlessly, achieving a 100/100 Lighthouse Performance score.',
    lessonsLearned: 'React Server Components fundamentally simplify data fetching and improve security by keeping sensitive API keys and database logic off the client completely.',
  }
];

export const otherProjects = [
  {
    title: 'Design Your World',
    description: 'A premium, highly animated digital assets marketplace featuring complex GSAP scroll animations.',
    tech: 'React • Vite • GSAP • Tailwind',
    demo: 'https://app-one-sigma-78.vercel.app',
    github: 'https://github.com/sahariarhossain524-sketch'
  },
  {
    title: 'Kanban Board',
    description: 'A robust drag-and-drop task management application built with Next.js and Tailwind CSS.',
    tech: 'Next.js • React DND • Zustand',
    demo: 'https://kanban-board-alpha-ochre-29.vercel.app',
    github: 'https://github.com/sahariarhossain524-sketch'
  },
  {
    title: 'AI Dashboard',
    description: 'A modern AI SaaS Dashboard featuring dark mode support and interactive data visualizations.',
    tech: 'Next.js • Recharts • Lucide',
    demo: 'https://ai-dashboard-nine-kappa.vercel.app',
    github: 'https://github.com/sahariarhossain524-sketch'
  },
  {
    title: 'GrowthEdge Consulting',
    description: 'A modern, responsive landing page for a strategic consulting firm with smooth reveal animations.',
    tech: 'HTML5 • Tailwind CSS • UI/UX',
    demo: 'https://sahariarhossain524-sketch.github.io/Sahariar-Dev/growthedge.html',
    github: 'https://github.com/sahariarhossain524-sketch'
  },
  {
    title: 'Alex Carter Portfolio',
    description: 'A sleek, personal portfolio template designed for creative professionals with modern CSS layouts.',
    tech: 'HTML/CSS • Tailwind CSS',
    demo: 'https://sahariarhossain524-sketch.github.io/Sahariar-Dev/alexcarter.html',
    github: 'https://github.com/sahariarhossain524-sketch'
  },
  {
    title: 'UrbanNest Real Estate',
    description: 'A highly visual property listing landing page focusing on structured component design.',
    tech: 'Tailwind CSS • Web Design',
    demo: 'https://sahariarhossain524-sketch.github.io/Sahariar-Dev/urbannest.html',
    github: 'https://github.com/sahariarhossain524-sketch'
  }
];
