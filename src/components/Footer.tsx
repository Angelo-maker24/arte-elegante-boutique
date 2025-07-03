
import React from 'react';
import { Palette, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gold-500 p-2 rounded-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold">Arte Elegante</h3>
                <p className="text-sm text-gray-400 font-inter">Boutique Gallery</p>
              </div>
            </div>
            <p className="text-gray-300 font-inter leading-relaxed">
              Descubre arte excepcional que transforma espacios y vidas. 
              Cada obra es cuidadosamente seleccionada para ofrecerte lo mejor del arte contemporáneo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3 font-inter">
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Catálogo Completo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Obras Destacadas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Nuevos Artistas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Exposiciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Asesoría Personalizada</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Categorías</h4>
            <ul className="space-y-3 font-inter">
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Pinturas al Óleo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Arte Acrílico</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Acuarelas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Esculturas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Arte Mixto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Contacto</h4>
            <div className="space-y-4 font-inter">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Av. Arte 123, Zona Galería<br />
                  Ciudad de México, MX
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">+52 55 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">hola@arteelegante.com</span>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-inter text-sm">
              © 2024 Arte Elegante Boutique. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-inter">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-inter">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-inter">
                Política de Devoluciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
