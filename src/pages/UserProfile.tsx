
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { User, Package, Heart, Settings } from 'lucide-react';

const UserProfile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  // Mock data - in real app this would come from API
  const orders = [
    {
      id: 'AE-ABC123',
      date: '2024-01-15',
      status: 'Entregado',
      total: 2500,
      items: [
        {
          nombre_obra: 'Amanecer Dorado',
          artista: 'María Elena Vásquez',
          imagen_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=200&q=80'
        }
      ]
    }
  ];

  const wishlist = [
    {
      id: '2',
      nombre_obra: 'Serenidad Urbana',
      artista: 'Carlos Mendoza',
      precio: 3200,
      imagen_url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemsCount={0} onCartClick={() => {}} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-playfair font-bold text-charcoal-900 mb-8">
            Mi Perfil
          </h1>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Perfil</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span>Pedidos</span>
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Favoritos</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Configuración</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Información Personal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input id="name" defaultValue="Usuario" />
                    </div>
                    <div>
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" value={user?.email || ''} disabled />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="address">Dirección</Label>
                    <Input id="address" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">Ciudad</Label>
                      <Input id="city" />
                    </div>
                    <div>
                      <Label htmlFor="state">Estado</Label>
                      <Input id="state" />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">Código Postal</Label>
                      <Input id="zipCode" />
                    </div>
                  </div>
                  <Button className="elegant-button">
                    Actualizar Información
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de Pedidos</CardTitle>
                </CardHeader>
                <CardContent>
                  {orders.length === 0 ? (
                    <div className="text-center py-8">
                      <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">No tienes pedidos aún</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-semibold">Pedido {order.id}</h3>
                              <p className="text-sm text-gray-600">
                                Fecha: {new Date(order.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">${order.total.toLocaleString()}</p>
                              <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded">
                                {order.status}
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <img
                                  src={item.imagen_url}
                                  alt={item.nombre_obra}
                                  className="w-12 h-12 object-cover rounded"
                                />
                                <div>
                                  <p className="font-medium text-sm">{item.nombre_obra}</p>
                                  <p className="text-sm text-gray-600">{item.artista}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist">
              <Card>
                <CardHeader>
                  <CardTitle>Lista de Favoritos</CardTitle>
                </CardHeader>
                <CardContent>
                  {wishlist.length === 0 ? (
                    <div className="text-center py-8">
                      <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">No tienes obras favoritas aún</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlist.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4">
                          <img
                            src={item.imagen_url}
                            alt={item.nombre_obra}
                            className="w-full h-40 object-cover rounded mb-3"
                          />
                          <h3 className="font-semibold text-sm mb-1">{item.nombre_obra}</h3>
                          <p className="text-sm text-gray-600 mb-2">{item.artista}</p>
                          <p className="font-bold">${item.precio.toLocaleString()}</p>
                          <Button size="sm" className="w-full mt-3 elegant-button">
                            Añadir al Carrito
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración de Cuenta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Cambiar Contraseña</h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="currentPassword">Contraseña Actual</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="newPassword">Nueva Contraseña</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirmar Nueva Contraseña</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button className="elegant-button">
                        Actualizar Contraseña
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-3">Preferencias de Notificación</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span>Recibir ofertas especiales por email</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span>Notificaciones sobre nuevas obras</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>Newsletter mensual</span>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
