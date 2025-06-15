
import { Briefcase, User, Layout, Link } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Full-Stack Development",
      description: "Complete web application development from frontend to backend, including database design and API integration.",
      features: ["Custom Web Applications", "API Development", "Database Design", "Cloud Deployment"]
    },
    {
      icon: User,
      title: "Technical Consulting",
      description: "Strategic guidance on technology choices, architecture decisions, and development best practices for your project.",
      features: ["Technology Assessment", "Architecture Planning", "Code Reviews", "Performance Optimization"]
    },
    {
      icon: Briefcase,
      title: "Product Development",
      description: "End-to-end product development from ideation to launch, including market research and user experience design.",
      features: ["MVP Development", "User Research", "Product Strategy", "Launch Support"]
    },
    {
      icon: Link,
      title: "Integration Services",
      description: "Seamless integration of third-party services, APIs, and existing systems to enhance your business workflow.",
      features: ["API Integration", "Payment Processing", "CRM Integration", "Automation Tools"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                  <service.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how I can help bring your ideas to life with custom software solutions.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
