import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useArtworks = () => {
  const [artworks, setArtworks] = useState<any[]>([]);

  const fetchArtworks = async () => {
    const { data } = await supabase.from('paintings').select('*');
    setArtworks(data || []);
  };

  const addArtwork = async (newArtwork: any) => {
    await supabase.from('paintings').insert([newArtwork]);
    fetchArtworks();
  };

  const editArtwork = async (id: string, fields: any) => {
    await supabase.from('paintings').update(fields).eq('id', id);
    fetchArtworks();
  };

  const deleteArtwork = async (id: string) => {
    await supabase.from('paintings').delete().eq('id', id);
    fetchArtworks();
  };

  useEffect(() => { fetchArtworks(); }, []);

  return { artworks, addArtwork, editArtwork, deleteArtwork };
};