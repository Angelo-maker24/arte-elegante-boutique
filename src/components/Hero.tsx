
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1471919743851-c4df8b6ee c25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
          Arte que
          <span className="block text-gold-400">Inspira</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-inter font-light mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Descubre una colección exclusiva de pinturas y esculturas 
          creadas por artistas excepcionales de todo el mundo
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button className="elegant-button text-lg px-8 py-4">
            Explorar Colección
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-charcoal-900 text-lg px-8 py-4 transition-all duration-300"
          >
            Conocer Artistas
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
