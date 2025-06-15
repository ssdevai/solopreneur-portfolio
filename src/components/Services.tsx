
import { Rocket, Target, Zap, TrendingUp, Brain, Workflow } from 'lucide-react';
import { useServices } from '@/hooks/useServices';

const Services = () => {
  const { data: services, isLoading, error } = useServices();

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      Rocket,
      Target,
      Zap,
      TrendingUp,
      Brain,
      Workflow,
    };
    return icons[iconName] || Rocket;
  };

  if (isLoading) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">Loading services...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center text-red-600">Error loading services</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Software Development Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            From simple business apps to advanced automation - I help businesses create software solutions that work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => {
            const ServiceIcon = getIconComponent(service.icon || 'Rocket');
            return (
              <div key={service.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                    <ServiceIcon className="text-white" size={24} />
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
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Business Software?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss your project and create a solution that helps your business grow. From concept to launch in weeks, not months.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
