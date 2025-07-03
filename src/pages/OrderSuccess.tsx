
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';

const OrderSuccess = () => {
  const orderNumber = "AE-" + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemsCount={0} onCartClick={() => {}} />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-playfair font-bold text-charcoal-900 mb-2">
              ¡Pedido Confirmado!
            </h1>
            <p className="text-xl text-gray-600">
              Gracias por tu compra. Tu pedido ha sido procesado exitosamente.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-charcoal-900 mb-2">
                    Número de Pedido
                  </h2>
                  <p className="text-3xl font-bold text-gold-600">{orderNumber}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">Confirmación Enviada</h3>
                    <p className="text-sm text-gray-600">
                      Te hemos enviado un email con los detalles de tu pedido
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Package className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">Preparando Envío</h3>
                    <p className="text-sm text-gray-600">
                      Tu obra será empacada cuidadosamente en 1-2 días hábiles
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">Entrega Estimada</h3>
                    <p className="text-sm text-gray-600">
                      3-5 días hábiles con envío asegurado gratuito
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="elegant-button">
                <Link to="/profile">
                  Ver Mi Perfil
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-charcoal-300">
                <Link to="/">
                  Seguir Comprando
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              Si tienes alguna pregunta sobre tu pedido, no dudes en{" "}
              <a href="mailto:soporte@arteelegante.com" className="text-gold-600 hover:underline">
                contactarnos
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderSuccess;
