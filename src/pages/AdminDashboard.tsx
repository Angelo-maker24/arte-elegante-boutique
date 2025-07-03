import React from 'react';
import { useArtworks } from '@/hooks/useArtworks';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const { artworks, addArtwork, editArtwork, deleteArtwork } = useArtworks();

  return (
    <div>
      <h1>Panel de Administración</h1>
      <Button onClick={() => addArtwork({ title: 'Nueva obra', price: 1000 })}>Añadir obra</Button>

      {artworks.map((art) => (
        <div key={art.id}>
          <h3>{art.title} - ${art.price}</h3>
          <Button onClick={() => editArtwork(art.id, { price: art.price + 100 })}>Subir precio</Button>
          <Button onClick={() => deleteArtwork(art.id)}>Eliminar</Button>
        </div>
      ))}
    </div>
  );
};
export default AdminDashboard;