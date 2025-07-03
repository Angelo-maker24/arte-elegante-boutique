
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Heart, Share2, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Artwork } from '@/components/ArtworkCard';

// This would normally come from an API or database
const sampleArtwork: Artwork = {
  id: '1',
  nombre_obra: 'Amanecer Dorado',
  artista: 'María Elena Vásquez',
  precio: 2500,
  imagen_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
  tecnica: 'oleo',
  dimensiones_alto: 60,
  dimensiones_ancho: 80,
  año: 2023,
  is_featured: true
};

const ArtworkDetail = () => {
  const { id } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Adding to cart:', sampleArtwork);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItems.length}
        onCartClick={() => {}}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-charcoal-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al catálogo</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={sampleArtwork.imagen_url}
                alt={sampleArtwork.nombre_obra}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Thumbnails - placeholder for multiple images */}
            <div className="flex space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                  <img
                    src={sampleArtwork.imagen_url}
                    alt={`Vista ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Title and Artist */}
            <div>
              {sampleArtwork.is_featured && (
                <Badge className="gold-accent mb-2">Obra Destacada</Badge>
              )}
              <h1 className="text-4xl font-playfair font-bold text-charcoal-900 mb-2">
                {sampleArtwork.nombre_obra}
              </h1>
              <p className="text-xl text-gray-600 font-inter">
                por <span className="font-semibold text-charcoal-800">{sampleArtwork.artista}</span>
              </p>
            </div>

            {/* Price */}
            <div>
              <p className="text-3xl font-bold text-charcoal-900">
                ${sampleArtwork.precio.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Precio incluye envío asegurado
              </p>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-playfair font-semibold text-charcoal-900">
                Especificaciones
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Técnica:</span>
                  <p className="font-medium capitalize">{sampleArtwork.tecnica}</p>
                </div>
                <div>
                  <span className="text-gray-500">Año:</span>
                  <p className="font-medium">{sampleArtwork.año}</p>
                </div>
                <div>
                  <span className="text-gray-500">Dimensiones:</span>
                  <p className="font-medium">
                    {sampleArtwork.dimensiones_ancho} × {sampleArtwork.dimensiones_alto} cm
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Estado:</span>
                  <p className="font-medium text-green-600">Disponible</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-playfair font-semibold text-charcoal-900">
                Descripción
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Una obra excepcional que captura la esencia del amanecer con técnicas magistrales de óleo sobre lienzo. 
                Los tonos dorados y cálidos crean una atmósfera de serenidad y esperanza, mientras que la composición 
                equilibrada invita a la contemplación profunda.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                onClick={handleAddToCart}
                className="w-full elegant-button text-lg py-4"
              >
                Añadir al Carrito
              </Button>
              
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={handleWishlist}
                  className={`flex-1 ${isWishlisted ? 'text-red-500 border-red-200' : ''}`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? 'En Favoritos' : 'Añadir a Favoritos'}
                </Button>
                
                <Button variant="outline" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
              </div>
            </div>

            {/* Artist Info */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-playfair font-semibold text-charcoal-900 mb-3">
                Sobre el Artista
              </h3>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-semibold text-charcoal-800">{sampleArtwork.artista}</p>
                  <p className="text-sm text-gray-600">
                    Artista contemporánea especializada en paisajes y naturaleza muerta. 
                    Su trabajo ha sido exhibido en galerías de México y España.
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">(42 reseñas)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArtworkDetail;
