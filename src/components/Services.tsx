
import { Rocket, Target, Zap, TrendingUp, Brain, Workflow } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Turn Ideas into Apps",
      description: "Transform your business idea into a working software application. Perfect for testing your concept with real users and getting to market quickly.",
      features: ["Idea Validation", "Quick Development", "User Testing", "Market Launch"]
    },
    {
      icon: Target,
      title: "Business Software Solutions",
      description: "Custom software applications for your business needs - from customer management systems to online stores with subscription billing.",
      features: ["Custom Business Apps", "Payment Processing", "User Accounts", "Business Analytics"]
    },
    {
      icon: Brain,
      title: "Smart Automation Tools",
      description: "Add artificial intelligence to your business processes. Automate customer service, data analysis, and repetitive tasks to save time and money.",
      features: ["AI Chatbots", "Smart Analytics", "Automated Workflows", "Intelligent Features"]
    },
    {
      icon: Workflow,
      title: "Business Process Automation",
      description: "Connect your existing tools and automate repetitive tasks. Save hours of manual work by having your systems talk to each other automatically.",
      features: ["Tool Integration", "Automated Tasks", "Data Syncing", "Workflow Optimization"]
    },
    {
      icon: Zap,
      title: "App Performance & Growth",
      description: "Make your existing software faster, more user-friendly, and more profitable. Optimize for better user experience and increased revenue.",
      features: ["Speed Optimization", "User Experience", "Revenue Growth", "Feature Enhancement"]
    },
    {
      icon: TrendingUp,
      title: "Business Growth Strategy",
      description: "Strategic guidance on growing your software product, attracting more users, and building sustainable revenue streams for long-term success.",
      features: ["Growth Planning", "Revenue Optimization", "User Acquisition", "Business Strategy"]
    }
  ];

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
