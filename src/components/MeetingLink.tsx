
import { useSetting } from '@/hooks/useSetting';
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar } from 'lucide-react';

type MeetingSettings = {
  meeting_url?: string;
};

const MeetingLink = () => {
  const { data: settings, isLoading, error } = useSetting<MeetingSettings>('footer');

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <Skeleton className="h-5 w-5 rounded" />
        <Skeleton className="h-4 w-40" />
      </div>
    );
  }

  if (error || !settings?.meeting_url) {
    // Don't render the link if the URL isn't available
    return null;
  }

  return (
    <a 
      href={settings.meeting_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
    >
      <Calendar size={18} />
      <span>Book Free Consultation</span>
    </a>
  );
};

export default MeetingLink;
