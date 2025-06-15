
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useSetting = <T>(key: string) => {
  return useQuery({
    queryKey: ['settings', key],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', key)
        .maybeSingle();

      if (error) {
        console.error(`Error fetching setting for key "${key}":`, error);
        throw error;
      }
      
      return data?.value as T | null;
    },
  });
};
