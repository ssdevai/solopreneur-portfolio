
import { Heart, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              SoloPreneur.dev
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building profitable software products, one line of code at a time. 
              Helping entrepreneurs turn ideas into successful SaaS applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@solopreneur.dev" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">MVP Development</span>
              </li>
              <li>
                <span className="text-gray-400">SaaS Applications</span>
              </li>
              <li>
                <span className="text-gray-400">AI Integration</span>
              </li>
              <li>
                <span className="text-gray-400">Business Automation</span>
              </li>
              <li>
                <span className="text-gray-400">Growth Strategy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} fill="currentColor" />
              <span>by an independent software entrepreneur</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 SoloPreneur Portfolio. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
