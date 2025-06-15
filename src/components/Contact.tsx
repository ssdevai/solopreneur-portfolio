import { Calendar, Bot } from 'lucide-react';
import { useState } from 'react';
import ContactInfo from './ContactInfo';

type ContactProps = {
  onOpenChat: (name: string, subject: string, message: string) => void;
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
      newErrors.name = 'Your name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Your email address is required';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please describe your project type';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a few sentences about your project';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const getProjectContext = () => {
    // Generate a simple readable context from the form
    let type = formData.subject.trim();
    let desc = formData.message.trim();
    let out = "";
    if (type && desc) {
      out = `"${type}" — ${desc}`;
    } else if (type) {
      out = type;
    } else if (desc) {
      out = desc;
    }
    return out;
  };

  const handleAiChatClick = () => {
    if (validateForm()) {
      onOpenChat(formData.name, formData.subject, formData.message);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Let's Plan Your Software Project (No Tech Jargon!)</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Ready to turn your business idea into a simple, profitable app? I help business owners like you create easy-to-use, money-making software. No tech-speak—just clear solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Discuss (Free Consult)</h3>
            <p className="text-gray-600 leading-relaxed">
              Whether you need a booking tool, a simple online store, or want to save hours with automation, I build software in plain English—so you always know what’s happening (no confusing code or buzzwords!).
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Free 30-Minute Chat</h4>
              <p className="text-gray-600 mb-4">
                Get free advice on your idea—and a clear plan for next steps, costs, and what’s possible.
              </p>
              <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700">
                <Calendar size={18} />
                <span>Book Free Consultation</span>
              </button>
            </div>

            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Describe What You Want</h3>
            <p className="text-gray-600 mb-6">Fill out this short form for direct, personalized advice from a no-jargon AI assistant (with real software experience!)</p>
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
                  placeholder="Project Type (e.g., Booking App, Online Store, Automation)"
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
                  placeholder="What do you want to build? Who will use it? How should it help them?"
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
                Get No-Jargon AI Advice
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
