
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useSetting } from '@/hooks/useSetting';
import { Skeleton } from "@/components/ui/skeleton";

type ContactInfoSettings = {
  email: string;
  phone: string;
  github_url: string;
  linkedin_url: string;
  meeting_url?: string;
};

const ContactInfo = () => {
  const { data: settings, isLoading, error } = useSetting<ContactInfoSettings>('footer');

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        <div className="flex space-x-4">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <Skeleton className="h-12 w-12 rounded-lg" />
        </div>
      </div>
    );
  }

  if (error || !settings) {
    return <p className="text-red-500 text-center">Failed to load contact information.</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Mail className="text-blue-600" size={20} />
        </div>
        <div>
          <div className="font-semibold text-gray-900">Email</div>
          <a href={`mailto:${settings.email}`} className="text-gray-600 hover:text-blue-600">{settings.email}</a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="bg-purple-100 p-3 rounded-lg">
          <Phone className="text-purple-600" size={20} />
        </div>
        <div>
          <div className="font-semibold text-gray-900">Phone</div>
          <div className="text-gray-600">{settings.phone}</div>
        </div>
      </div>

      <div className="flex space-x-4">
        <a 
          href={settings.linkedin_url}
          target="_blank" rel="noopener noreferrer"
          className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors duration-200"
          aria-label="Connect on LinkedIn"
        >
          <Linkedin className="text-gray-600 hover:text-blue-600" size={20} />
        </a>
        <a 
          href={settings.github_url} 
          target="_blank" rel="noopener noreferrer"
          className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          aria-label="View GitHub Projects"
        >
          <Github className="text-gray-600" size={20} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
