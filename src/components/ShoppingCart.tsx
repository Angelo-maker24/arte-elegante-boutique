
import React from 'react';
import { Button } from '@/components/ui/button';
import { Trash2, Minus, Plus, X } from 'lucide-react';
import { Artwork } from './ArtworkCard';

export interface CartItem extends Artwork {
  quantity: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const total = items.reduce((sum, item) => {
    const price = item.is_on_sale && item.sale_price ? item.sale_price : item.precio;
    return sum + (price * item.quantity);
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-playfair font-bold text-charcoal-900">
            Carrito de Compras
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-gray-500 font-inter">
                Tu carrito está vacío
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Explora nuestra colección y añade obras de arte
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const displayPrice = item.is_on_sale && item.sale_price ? item.sale_price : item.precio;
                
                return (
                  <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.imagen_url || `https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=200&q=80`}
                      alt={item.nombre_obra}
                      className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-playfair font-semibold text-charcoal-900 truncate">
                        {item.nombre_obra}
                      </h3>
                      <p className="text-sm text-gray-600 font-inter">
                        {item.artista}
                      </p>
                      <p className="text-lg font-bold text-charcoal-900 mt-1">
                        ${displayPrice.toLocaleString()}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-3 py-1 font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-playfair font-semibold text-charcoal-900">
                Total:
              </span>
              <span className="text-2xl font-bold text-charcoal-900">
                ${total.toLocaleString()}
              </span>
            </div>
            
            <Button
              onClick={onCheckout}
              className="w-full elegant-button text-lg py-4"
            >
              Proceder al Pago
            </Button>
            
            <p className="text-xs text-gray-500 text-center mt-3 font-inter">
              Envío gratuito en compras superiores a $2,000
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
