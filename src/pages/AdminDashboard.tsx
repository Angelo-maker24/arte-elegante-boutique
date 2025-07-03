
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Package, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = {
    totalSales: 125400,
    totalOrders: 89,
    totalArtworks: 156,
    totalUsers: 234
  };

  const recentOrders = [
    {
      id: 'AE-001',
      customer: 'María González',
      artwork: 'Amanecer Dorado',
      amount: 2500,
      status: 'Pendiente',
      date: '2024-01-15'
    },
    {
      id: 'AE-002',
      customer: 'Carlos Ruiz',
      artwork: 'Serenidad Urbana',
      amount: 3200,
      status: 'Completado',
      date: '2024-01-14'
    }
  ];

  const artworks = [
    {
      id: '1',
      nombre_obra: 'Amanecer Dorado',
      artista: 'María Elena Vásquez',
      precio: 2500,
      status: 'Disponible',
      sales: 3
    },
    {
      id: '2',
      nombre_obra: 'Serenidad Urbana',
      artista: 'Carlos Mendoza',
      precio: 3200,
      status: 'Disponible',
      sales: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemsCount={0} onCartClick={() => {}} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-playfair font-bold text-charcoal-900">
              Panel de Administración
            </h1>
            <Button className="elegant-button">
              <Plus className="w-4 h-4 mr-2" />
              Nueva Obra
            </Button>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="artworks">Obras</TabsTrigger>
              <TabsTrigger value="orders">Pedidos</TabsTrigger>
              <TabsTrigger value="users">Usuarios</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${stats.totalSales.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">+20% desde el mes pasado</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalOrders}</div>
                    <p className="text-xs text-muted-foreground">+12% desde el mes pasado</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Obras</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalArtworks}</div>
                    <p className="text-xs text-muted-foreground">+8 obras este mes</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Usuarios</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalUsers}</div>
                    <p className="text-xs text-muted-foreground">+15 nuevos usuarios</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Pedidos Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                          <p className="text-sm text-gray-500">{order.artwork}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${order.amount.toLocaleString()}</p>
                          <span className={`text-xs px-2 py-1 rounded ${
                            order.status === 'Completado' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="artworks">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Gestión de Obras</CardTitle>
                  <Button className="elegant-button">
                    <Plus className="w-4 h-4 mr-2" />
                    Añadir Obra
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {artworks.map((artwork) => (
                      <div key={artwork.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{artwork.nombre_obra}</h3>
                          <p className="text-sm text-gray-600">{artwork.artista}</p>
                          <p className="text-sm text-gray-500">
                            ${artwork.precio.toLocaleString()} • {artwork.sales} ventas
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs px-2 py-1 rounded ${
                            artwork.status === 'Disponible' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {artwork.status}
                          </span>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Todos los Pedidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${order.amount.toLocaleString()}</p>
                          <span className={`text-xs px-2 py-1 rounded ${
                            order.status === 'Completado' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>Gestión de Usuarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Gestión de usuarios en desarrollo</p>
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

export default AdminDashboard;
