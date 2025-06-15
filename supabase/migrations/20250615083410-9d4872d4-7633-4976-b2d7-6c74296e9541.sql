
-- Insert current projects data
INSERT INTO public.projects (title, description, image_url, tech, metrics, github_url, live_url) VALUES
(
  'TaskFlow SaaS',
  'Project management platform serving 5,000+ users. Built with React and Node.js, generating $50K+ monthly recurring revenue through subscription tiers.',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
  ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  '{"users": "5K+", "revenue": "$50K MRR", "growth": "+25%"}',
  '#',
  '#'
),
(
  'AnalyticsPro Dashboard',
  'Business intelligence SaaS helping SMBs make data-driven decisions. Custom visualization engine with real-time data processing and white-label options.',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
  ARRAY['Vue.js', 'Python', 'FastAPI', 'AWS'],
  '{"users": "2K+", "revenue": "$30K MRR", "growth": "+40%"}',
  '#',
  '#'
),
(
  'ContentCraft AI',
  'AI-powered content generation tool for marketers and creators. Integrated OpenAI APIs with custom fine-tuning for industry-specific content.',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
  ARRAY['Next.js', 'OpenAI API', 'Supabase', 'Vercel'],
  '{"users": "8K+", "revenue": "$75K MRR", "growth": "+60%"}',
  '#',
  '#'
);

-- Insert current skills data
INSERT INTO public.skills (category, skill_list, color, icon, sort_order) VALUES
(
  'Product Development',
  ARRAY['MVP Development', 'SaaS Architecture', 'User Experience Design', 'Product Strategy', 'Market Validation'],
  'from-blue-500 to-cyan-500',
  'Package',
  1
),
(
  'Technical Stack',
  ARRAY['React/Next.js', 'Node.js/Python', 'PostgreSQL/MongoDB', 'AWS/Vercel', 'Stripe/Payment APIs'],
  'from-purple-500 to-pink-500',
  'Code',
  2
),
(
  'AI & Automation',
  ARRAY['AI Agent Development', 'n8n Workflow Automation', 'OpenAI/Claude Integration', 'Prompt Engineering', 'Custom AI Solutions'],
  'from-emerald-500 to-teal-500',
  'BrainCircuit',
  3
),
(
  'Business Operations',
  ARRAY['Revenue Optimization', 'Customer Acquisition', 'Analytics & Metrics', 'A/B Testing', 'Customer Support'],
  'from-green-500 to-teal-500',
  'BarChart',
  4
),
(
  'Growth & Marketing',
  ARRAY['SEO Optimization', 'Content Marketing', 'Email Automation', 'Social Media', 'Community Building'],
  'from-orange-500 to-red-500',
  'Megaphone',
  5
);

-- Insert current services data
INSERT INTO public.services (title, description, features, icon, sort_order) VALUES
(
  'Turn Ideas into Apps',
  'Transform your business idea into a working software application. Perfect for testing your concept with real users and getting to market quickly.',
  ARRAY['Idea Validation', 'Quick Development', 'User Testing', 'Market Launch'],
  'Rocket',
  1
),
(
  'Business Software Solutions',
  'Custom software applications for your business needs - from customer management systems to online stores with subscription billing.',
  ARRAY['Custom Business Apps', 'Payment Processing', 'User Accounts', 'Business Analytics'],
  'Target',
  2
),
(
  'Smart Automation Tools',
  'Add artificial intelligence to your business processes. Automate customer service, data analysis, and repetitive tasks to save time and money.',
  ARRAY['AI Chatbots', 'Smart Analytics', 'Automated Workflows', 'Intelligent Features'],
  'Brain',
  3
),
(
  'Business Process Automation',
  'Connect your existing tools and automate repetitive tasks. Save hours of manual work by having your systems talk to each other automatically.',
  ARRAY['Tool Integration', 'Automated Tasks', 'Data Syncing', 'Workflow Optimization'],
  'Workflow',
  4
),
(
  'App Performance & Growth',
  'Make your existing software faster, more user-friendly, and more profitable. Optimize for better user experience and increased revenue.',
  ARRAY['Speed Optimization', 'User Experience', 'Revenue Growth', 'Feature Enhancement'],
  'Zap',
  5
),
(
  'Business Growth Strategy',
  'Strategic guidance on growing your software product, attracting more users, and building sustainable revenue streams for long-term success.',
  ARRAY['Growth Planning', 'Revenue Optimization', 'User Acquisition', 'Business Strategy'],
  'TrendingUp',
  6
);
