
import { Heart, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useSetting } from '@/hooks/useSetting';
import { Skeleton } from "@/components/ui/skeleton";

type FooterSettings = {
  brand_name: string;
  brand_description: string;
  email: string;
  github_url: string;
  linkedin_url: string;
  twitter_url: string;
  creator_statement: string;
  creator_byline: string;
  copyright_holder: string;
  phone?: string;
};

const Footer = () => {
  const { data: settings, isLoading, error } = useSetting<FooterSettings>('footer');

  if (isLoading) {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Skeleton className="h-8 w-48 mb-4 bg-gray-700" />
              <Skeleton className="h-4 w-full mb-2 bg-gray-700" />
              <Skeleton className="h-4 w-3/4 mb-6 bg-gray-700" />
              <div className="flex space-x-4">
                <Skeleton className="h-5 w-5 rounded-full bg-gray-700" />
                <Skeleton className="h-5 w-5 rounded-full bg-gray-700" />
                <Skeleton className="h-5 w-5 rounded-full bg-gray-700" />
                <Skeleton className="h-5 w-5 rounded-full bg-gray-700" />
              </div>
            </div>
            <div>
              <Skeleton className="h-6 w-24 mb-4 bg-gray-700" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-20 bg-gray-700" />
                <Skeleton className="h-4 w-16 bg-gray-700" />
                <Skeleton className="h-4 w-24 bg-gray-700" />
                <Skeleton className="h-4 w-20 bg-gray-700" />
                <Skeleton className="h-4 w-16 bg-gray-700" />
              </div>
            </div>
            <div>
              <Skeleton className="h-6 w-24 mb-4 bg-gray-700" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32 bg-gray-700" />
                <Skeleton className="h-4 w-28 bg-gray-700" />
                <Skeleton className="h-4 w-24 bg-gray-700" />
                <Skeleton className="h-4 w-36 bg-gray-700" />
                <Skeleton className="h-4 w-28 bg-gray-700" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-20 bg-gray-700" />
                <Heart className="text-red-500" size={16} fill="currentColor" />
                <Skeleton className="h-4 w-48 bg-gray-700" />
              </div>
              <div className="text-sm text-gray-500">
                <Skeleton className="h-4 w-64 bg-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (error || !settings) {
    return (
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p className="text-gray-500">
          {error ? `Error loading footer: ${error.message}` : "Footer content not available."}
        </p>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              {settings.brand_name}
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {settings.brand_description}
            </p>
            <div className="flex space-x-4">
              <a 
                href={`mailto:${settings.email}`} 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href={settings.github_url} 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
                target="_blank" rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a 
                href={settings.linkedin_url} 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={settings.twitter_url} 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
                target="_blank" rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">MVP Development</span></li>
              <li><span className="text-gray-400">SaaS Applications</span></li>
              <li><span className="text-gray-400">AI Integration</span></li>
              <li><span className="text-gray-400">Business Automation</span></li>
              <li><span className="text-gray-400">Growth Strategy</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>{settings.creator_statement}</span>
              <Heart className="text-red-500" size={16} fill="currentColor" />
              <span>{settings.creator_byline}</span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} {settings.copyright_holder}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
