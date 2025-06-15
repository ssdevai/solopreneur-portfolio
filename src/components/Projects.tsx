
import { Github, Link, TrendingUp } from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';

const Projects = () => {
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">Loading projects...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center text-red-600">Error loading projects</div>
        </div>
      </section>
    );
  }

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
          {projects?.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image_url || ''} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-green-700">{(project.metrics as any).users}</div>
                      <div className="text-xs text-green-600">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-green-700">{(project.metrics as any).revenue}</div>
                      <div className="text-xs text-green-600">Revenue</div>
                    </div>
                    <div className="text-center flex items-center justify-center">
                      <TrendingUp size={12} className="text-green-600 mr-1" />
                      <div className="text-sm font-semibold text-green-700">{(project.metrics as any).growth}</div>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github_url || '#'}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live_url || '#'}
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
