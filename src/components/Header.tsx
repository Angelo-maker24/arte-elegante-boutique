
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Palette, User, LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, userRole } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-charcoal-900 p-2 rounded-lg">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-playfair font-bold text-charcoal-900">
                Arte Elegante
              </h1>
              <p className="text-xs text-gray-500 font-inter">Boutique Gallery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-inter">
            <Link to="/" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium">
              Pinturas
            </Link>
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

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
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

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="hidden md:inline">Mi Cuenta</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.email}</p>
                    {userRole && (
                      <p className="text-xs text-gray-500 capitalize">{userRole}</p>
                    )}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Mi Perfil</span>
                    </Link>
                  </DropdownMenuItem>
                  {userRole === 'admin' && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="flex items-center space-x-2">
                        <Settings className="w-4 h-4" />
                        <span>Panel Admin</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="flex items-center space-x-2 text-red-600">
                    <LogOut className="w-4 h-4" />
                    <span>Cerrar Sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link to="/auth">Iniciar Sesión</Link>
              </Button>
            )}

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
              <Link to="/" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium py-2">
                Pinturas
              </Link>
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
              {!user && (
                <Link to="/auth" className="text-gray-700 hover:text-charcoal-900 transition-colors font-medium py-2">
                  Iniciar Sesión
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
