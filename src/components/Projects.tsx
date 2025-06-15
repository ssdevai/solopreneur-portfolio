
import { Github, Link, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TaskFlow SaaS",
      description: "Project management platform serving 5,000+ users. Built with React and Node.js, generating $50K+ monthly recurring revenue through subscription tiers.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      metrics: { users: "5K+", revenue: "$50K MRR", growth: "+25%" },
      github: "#",
      live: "#"
    },
    {
      title: "AnalyticsPro Dashboard",
      description: "Business intelligence SaaS helping SMBs make data-driven decisions. Custom visualization engine with real-time data processing and white-label options.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Python", "FastAPI", "AWS"],
      metrics: { users: "2K+", revenue: "$30K MRR", growth: "+40%" },
      github: "#",
      live: "#"
    },
    {
      title: "ContentCraft AI",
      description: "AI-powered content generation tool for marketers and creators. Integrated OpenAI APIs with custom fine-tuning for industry-specific content.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tech: ["Next.js", "OpenAI API", "Supabase", "Vercel"],
      metrics: { users: "8K+", revenue: "$75K MRR", growth: "+60%" },
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Revenue-Generating Products</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Profitable SaaS products built from idea to sustainable recurring revenue
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-green-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-green-700">{project.metrics.users}</div>
                    <div className="text-xs text-green-600">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-green-700">{project.metrics.revenue}</div>
                    <div className="text-xs text-green-600">Revenue</div>
                  </div>
                  <div className="text-center flex items-center justify-center">
                    <TrendingUp size={12} className="text-green-600 mr-1" />
                    <div className="text-sm font-semibold text-green-700">{project.metrics.growth}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    <Link size={18} />
                    <span>Product</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
