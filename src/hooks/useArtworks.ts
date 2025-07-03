import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useArtworks = () => {
  const [artworks, setArtworks] = useState<any[]>([]);

  const fetchArtworks = async () => {
    const { data, error } = await supabase.from('paintings').select('*');
    if (!error) setArtworks(data);
  };

  const addArtwork = async (newArtwork) => {
    await supabase.from('paintings').insert([newArtwork]);
    fetchArtworks();
  };

  const editArtwork = async (id, updatedFields) => {
    await supabase.from('paintings').update(updatedFields).eq('id', id);
    fetchArtworks();
  };

  const deleteArtwork = async (id) => {
    await supabase.from('paintings').delete().eq('id', id);
    fetchArtworks();
  };

  useEffect(() => { fetchArtworks(); }, []);

  return { artworks, addArtwork, editArtwork, deleteArtwork };
};