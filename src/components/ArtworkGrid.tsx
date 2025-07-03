
import React from 'react';
import ArtworkCard, { Artwork } from './ArtworkCard';

interface ArtworkGridProps {
  artworks: Artwork[];
  onAddToCart: (artwork: Artwork) => void;
  onViewDetails: (artwork: Artwork) => void;
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks, onAddToCart, onViewDetails }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 mb-4">
            Colección Exclusiva
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            Cada obra cuenta una historia única. Descubre piezas excepcionales 
            creadas por artistas talentosos de todo el mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtworkGrid;
