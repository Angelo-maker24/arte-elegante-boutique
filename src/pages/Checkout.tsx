
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CreditCard, MapPin, Package } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Mock cart items - in real app this would come from context/state
  const cartItems = [
    {
      id: '1',
      nombre_obra: 'Amanecer Dorado',
      artista: 'María Elena Vásquez',
      precio: 2500,
      quantity: 1,
      imagen_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=200&q=80'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock checkout process
    setTimeout(() => {
      navigate('/order-success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemsCount={cartItems.length} onCartClick={() => {}} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold text-charcoal-900 mb-8">
            Finalizar Compra
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-6">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Información de Envío</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="address">Dirección</Label>
                    <Input id="address" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">Ciudad</Label>
                      <Input id="city" required />
                    </div>
                    <div>
                      <Label htmlFor="state">Estado</Label>
                      <Input id="state" required />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">Código Postal</Label>
                      <Input id="zipCode" required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Información de Pago</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Fecha de Vencimiento</Label>
                      <Input id="expiry" placeholder="MM/AA" required />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                    <Input id="cardName" required />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Package className="w-5 h-5" />
                    <span>Resumen del Pedido</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex space-x-4">
                        <img
                          src={item.imagen_url}
                          alt={item.nombre_obra}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{item.nombre_obra}</h4>
                          <p className="text-sm text-gray-600">{item.artista}</p>
                          <p className="text-sm font-medium">
                            ${item.precio.toLocaleString()} × {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Envío:</span>
                      <span className="text-green-600">Gratis</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full elegant-button text-lg py-4"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Procesando...</span>
                      </div>
                    ) : (
                      'Completar Pedido'
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Tu información está protegida con encriptación SSL de 256 bits
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
