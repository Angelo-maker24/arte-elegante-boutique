
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Filters, { FilterState } from '@/components/Filters';
import ArtworkGrid from '@/components/ArtworkGrid';
import ShoppingCart, { CartItem } from '@/components/ShoppingCart';
import Footer from '@/components/Footer';
import { Artwork } from '@/components/ArtworkCard';
import { useToast } from '@/hooks/use-toast';

// Sample artwork data
const sampleArtworks: Artwork[] = [
  {
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
  },
  {
    id: '2',
    nombre_obra: 'Serenidad Urbana',
    artista: 'Carlos Mendoza',
    precio: 3200,
    sale_price: 2800,
    imagen_url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80',
    tecnica: 'acrilico',
    dimensiones_alto: 70,
    dimensiones_ancho: 90,
    año: 2023,
    is_on_sale: true
  },
  {
    id: '3',
    nombre_obra: 'Flores del Alma',
    artista: 'Ana Sofía Reyes',
    precio: 1800,
    imagen_url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80',
    tecnica: 'acuarela',
    dimensiones_alto: 40,
    dimensiones_ancho: 50,
    año: 2024,
    is_featured: true
  },
  {
    id: '4',
    nombre_obra: 'Geometría Infinita',
    artista: 'Roberto Silva',
    precio: 4500,
    imagen_url: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80',
    tecnica: 'mixta',
    dimensiones_alto: 100,
    dimensiones_ancho: 120,
    año: 2023
  },
  {
    id: '5',
    nombre_obra: 'Retrato del Tiempo',
    artista: 'Isabella Moreno',
    precio: 2100,
    imagen_url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=800&q=80',
    tecnica: 'carboncillo',
    dimensiones_alto: 50,
    dimensiones_ancho: 40,
    año: 2024
  },
  {
    id: '6',
    nombre_obra: 'Océano de Sueños',
    artista: 'Diego Herrera',
    precio: 3600,
    sale_price: 3200,
    imagen_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    tecnica: 'oleo',
    dimensiones_alto: 80,
    dimensiones_ancho: 100,
    año: 2023,
    is_on_sale: true
  }
];

const Index = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  
  const [filters, setFilters] = useState<FilterState>({
    categoria: 'Todas',
    tecnica: 'Todas',
    precioMin: 0,
    precioMax: 1000000,
    artista: ''
  });

  // Filter artworks based on current filters
  const filteredArtworks = useMemo(() => {
    return sampleArtworks.filter(artwork => {
      // Category filter (simplified for demo)
      if (filters.categoria !== 'Todas') {
        // In a real app, you'd have a category field
      }
      
      // Technique filter
      if (filters.tecnica !== 'Todas' && 
          artwork.tecnica.toLowerCase() !== filters.tecnica.toLowerCase()) {
        return false;
      }
      
      // Price filter
      const price = artwork.is_on_sale && artwork.sale_price ? artwork.sale_price : artwork.precio;
      if (price < filters.precioMin || price > filters.precioMax) {
        return false;
      }
      
      // Artist filter
      if (filters.artista && 
          !artwork.artista.toLowerCase().includes(filters.artista.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  }, [filters]);

  const handleAddToCart = (artwork: Artwork) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === artwork.id);
      
      if (existingItem) {
        toast({
          title: "Cantidad actualizada",
          description: `Se aumentó la cantidad de "${artwork.nombre_obra}" en el carrito`,
        });
        
        return prevItems.map(item =>
          item.id === artwork.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast({
          title: "Obra añadida al carrito",
          description: `"${artwork.nombre_obra}" se añadió correctamente`,
        });
        
        return [...prevItems, { ...artwork, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast({
      title: "Obra eliminada",
      description: "La obra se eliminó del carrito",
    });
  };

  const handleViewDetails = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    // In a real app, you might navigate to a detail page or open a modal
    toast({
      title: "Detalles de la obra",
      description: `Mostrando detalles de "${artwork.nombre_obra}"`,
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Procesando compra",
      description: "Redirigiendo al proceso de pago...",
    });
    // Here you would integrate with a payment processor
  };

  const handleClearFilters = () => {
    setFilters({
      categoria: 'Todas',
      tecnica: 'Todas',
      precioMin: 0,
      precioMax: 1000000,
      artista: ''
    });
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main>
        <Hero />
        
        <Filters
          filters={filters}
          onFilterChange={setFilters}
          onClearFilters={handleClearFilters}
        />
        
        <ArtworkGrid
          artworks={filteredArtworks}
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
        />
      </main>
      
      <Footer />
      
      <ShoppingCart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;
