
import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-charcoal-900 p-2 rounded-lg">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-playfair font-bold text-charcoal-900">
                Arte Elegante
              </h1>
              <p className="text-xs text-gray-500 font-inter">Boutique Gallery</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-inter">
            <a href="#" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium">
              Pinturas
            </a>
            <a href="#" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium">
              Esculturas
            </a>
            <a href="#" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium">
              Artistas
            </a>
            <a href="#" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium">
              Colecciones
            </a>
            <a href="#" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative border-charcoal-200 hover:bg-charcoal-50"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-charcoal-900" />
              ) : (
                <Menu className="w-6 h-6 text-charcoal-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-slide-up">
            <nav className="flex flex-col space-y-3 font-inter">
              <a href="#" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium py-2">
                Pinturas
              </a>
              <a href="#" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium py-2">
                Esculturas
              </a>
              <a href="#" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium py-2">
                Artistas
              </a>
              <a href="#" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium py-2">
                Colecciones
              </a>
              <a href="#" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium py-2">
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
