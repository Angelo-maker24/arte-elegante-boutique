import React from 'react';
import { useArtworks } from '@/hooks/useArtworks';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const { artworks, addArtwork, editArtwork, deleteArtwork } = useArtworks();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <Button onClick={() => addArtwork({ title: 'Nueva obra', price: 1000 })}>
        Añadir obra
      </Button>
      <div className="space-y-4 mt-4">
        {artworks.map((art) => (
          <div key={art.id} className="border p-4 rounded flex justify-between items-center">
            <h3>{art.title} - ${art.price}</h3>
            <div className="space-x-2">
              <Button onClick={() => editArtwork(art.id, { price: art.price + 100 })}>Subir precio</Button>
              <Button onClick={() => deleteArtwork(art.id)} variant="destructive">Eliminar</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminDashboard;