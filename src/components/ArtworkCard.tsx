
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface Artwork {
  id: string;
  nombre_obra: string;
  artista: string;
  precio: number;
  sale_price?: number;
  imagen_url: string;
  tecnica: string;
  dimensiones_alto: number;
  dimensiones_ancho: number;
  año?: number;
  is_featured?: boolean;
  is_on_sale?: boolean;
}

interface ArtworkCardProps {
  artwork: Artwork;
  onAddToCart: (artwork: Artwork) => void;
  onViewDetails: (artwork: Artwork) => void;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, onAddToCart, onViewDetails }) => {
  const displayPrice = artwork.is_on_sale && artwork.sale_price ? artwork.sale_price : artwork.precio;
  const originalPrice = artwork.is_on_sale && artwork.sale_price ? artwork.precio : null;

  return (
    <div className="art-card">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={artwork.imagen_url || `https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80`}
          alt={artwork.nombre_obra}
          className="art-card-image"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {artwork.is_featured && (
            <Badge className="gold-accent font-medium">
              Destacada
            </Badge>
          )}
          {artwork.is_on_sale && (
            <Badge variant="destructive" className="font-medium">
              Oferta
            </Badge>
          )}
        </div>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button
            onClick={() => onViewDetails(artwork)}
            className="bg-white text-charcoal-900 hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            Ver Detalles
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="font-playfair text-xl font-semibold text-charcoal-900 mb-1 group-hover:text-gold-600 transition-colors">
            {artwork.nombre_obra}
          </h3>
          <p className="text-gray-600 font-inter font-medium">
            {artwork.artista}
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 mb-4 text-sm text-gray-500 font-inter">
          <div className="flex justify-between">
            <span>Técnica:</span>
            <span className="font-medium text-gray-700 capitalize">{artwork.tecnica}</span>
          </div>
          <div className="flex justify-between">
            <span>Dimensiones:</span>
            <span className="font-medium text-gray-700">
              {artwork.dimensiones_ancho} × {artwork.dimensiones_alto} cm
            </span>
          </div>
          {artwork.año && (
            <div className="flex justify-between">
              <span>Año:</span>
              <span className="font-medium text-gray-700">{artwork.año}</span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-charcoal-900">
              ${displayPrice.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => onAddToCart(artwork)}
          className="w-full elegant-button"
        >
          Añadir al Carrito
        </Button>
      </div>
    </div>
  );
};

export default ArtworkCard;
