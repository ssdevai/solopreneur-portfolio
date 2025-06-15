
import { Rocket, Target, Zap, TrendingUp, Brain, Workflow } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "MVP to Market",
      description: "Rapid development of minimum viable products with built-in analytics and user feedback systems to validate your idea and find product-market fit.",
      features: ["Market Research", "MVP Development", "User Testing", "Launch Strategy"]
    },
    {
      icon: Target,
      title: "SaaS Development",
      description: "Complete SaaS application development including subscription management, user authentication, payment processing, and scalable architecture.",
      features: ["Subscription Logic", "Payment Integration", "User Management", "Analytics Dashboard"]
    },
    {
      icon: Brain,
      title: "AI Agent Development",
      description: "Custom AI agents and intelligent automation solutions that handle complex business processes, customer interactions, and data analysis autonomously.",
      features: ["Custom AI Agents", "LLM Integration", "Intelligent Automation", "AI-Powered Features"]
    },
    {
      icon: Workflow,
      title: "n8n Automation",
      description: "Advanced workflow automation using n8n to connect your tools, automate repetitive tasks, and create intelligent business process flows.",
      features: ["Workflow Design", "API Integrations", "Process Automation", "Data Synchronization"]
    },
    {
      icon: Zap,
      title: "Product Optimization",
      description: "Performance optimization, conversion rate improvement, and feature enhancement to maximize user engagement and revenue growth.",
      features: ["Performance Tuning", "A/B Testing", "Conversion Optimization", "Feature Enhancement"]
    },
    {
      icon: TrendingUp,
      title: "Growth & Scale",
      description: "Strategic guidance on scaling your product, implementing growth hacking techniques, and optimizing for sustainable long-term revenue.",
      features: ["Growth Strategy", "Revenue Optimization", "User Acquisition", "Retention Systems"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">AI-Powered Product Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            From AI agent development to revenue optimization - complete product development services with cutting-edge automation
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
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your AI-Powered Revenue Stream?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's transform your idea into a profitable AI-enhanced SaaS product. From intelligent automation to recurring revenue in 90 days.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              Start Your AI SaaS Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
