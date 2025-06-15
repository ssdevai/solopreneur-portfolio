
import { Mail, Phone, Linkedin, Github, Calendar, Bot } from 'lucide-react';
import { useState } from 'react';

type ContactProps = {
  onOpenChat: () => void;
};

const Contact = ({ onOpenChat }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    let isValid = true;
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Project type is required';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Project description is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleAiChatClick = () => {
    if (validateForm()) {
      onOpenChat();
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Build Your Dream Software?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Turn your business idea into a profitable software solution. I help entrepreneurs and business owners create custom apps that solve real problems and generate revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Discuss Your Project</h3>
            <p className="text-gray-600 leading-relaxed">
              Whether you need a simple business app, an online store, or want to automate your workflows, 
              I specialize in creating software that's easy to use and helps your business grow. 
              No technical jargon - just clear solutions that work.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Free Project Consultation</h4>
              <p className="text-gray-600 mb-4">
                Get a free 30-minute consultation to discuss your project. I'll help you understand 
                what's possible, estimate timelines, and create a clear roadmap for your software project.
              </p>
              <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700">
                <Calendar size={18} />
                <span>Book Free Consultation</span>
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
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="text-gray-600 hover:text-blue-600" size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  aria-label="View GitHub Projects"
                >
                  <Github className="text-gray-600" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tell Me About Your Project</h3>
            <p className="text-gray-600 mb-6">Fill out the form below to get personalized AI-powered guidance for your project</p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Type (e.g., Business App, E-commerce, Automation Tool)"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200 ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Describe your project: What problem does it solve? Who will use it? What features do you need?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-200 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="button"
                onClick={handleAiChatClick}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Bot className="h-5 w-5" />
                Get AI Project Guidance
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
