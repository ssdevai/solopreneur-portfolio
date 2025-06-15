
import { Mail, Phone, Linkedin, Github, Calendar } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Let's Build Your AI-Powered SaaS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Ready to turn your idea into a profitable AI-enhanced software product? Let's discuss your vision and create an intelligent automation roadmap to revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Start Your AI Product Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              I work with ambitious entrepreneurs and growing businesses to build 
              AI-powered software products that generate real revenue. Whether you're validating 
              an MVP with intelligent features or scaling with advanced automation, I bring the technical expertise 
              and AI automation insight to make it profitable.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Free AI Strategy Call</h4>
              <p className="text-gray-600 mb-4">
                Book a 30-minute call to discuss your product idea, AI automation opportunities, 
                and technical roadmap. We'll explore how AI agents and n8n workflows can transform your business.
              </p>
              <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700">
                <Calendar size={18} />
                <span>Schedule AI Consultation</span>
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">hello@solopreneur.dev</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Phone className="text-purple-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <Linkedin className="text-gray-600 hover:text-blue-600" size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Github className="text-gray-600" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tell Me About Your AI Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Project Type (AI SaaS, Automation, n8n Workflows, etc.)"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200"
                required
              />
              <textarea
                name="message"
                placeholder="Describe your project idea, automation needs, target market, and timeline..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                AI Chat
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
