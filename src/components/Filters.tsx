
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface FilterState {
  categoria: string;
  tecnica: string;
  precioMin: number;
  precioMax: number;
  artista: string;
}

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange, onClearFilters }) => {
  const categorias = ['Todas', 'Pinturas', 'Esculturas', 'Arte Mixto'];
  const tecnicas = ['Todas', 'Óleo', 'Acrílico', 'Acuarela', 'Mixta', 'Carboncillo', 'Pastel'];
  const rangosPrecios = [
    { label: 'Todos los precios', min: 0, max: 1000000 },
    { label: 'Hasta $1,000', min: 0, max: 1000 },
    { label: '$1,000 - $5,000', min: 1000, max: 5000 },
    { label: '$5,000 - $10,000', min: 5000, max: 10000 },
    { label: 'Más de $10,000', min: 10000, max: 1000000 }
  ];

  const handleCategoryChange = (categoria: string) => {
    onFilterChange({ ...filters, categoria });
  };

  const handleTechniqueChange = (tecnica: string) => {
    onFilterChange({ ...filters, tecnica });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    onFilterChange({ ...filters, precioMin: min, precioMax: max });
  };

  const activeFiltersCount = [
    filters.categoria !== 'Todas' && filters.categoria,
    filters.tecnica !== 'Todas' && filters.tecnica,
    (filters.precioMin > 0 || filters.precioMax < 1000000) && 'Precio',
    filters.artista && 'Artista'
  ].filter(Boolean).length;

  return (
    <div className="bg-white border-b border-gray-200 py-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-playfair font-semibold text-charcoal-900">
            Filtros
          </h3>
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-gold-100 text-gold-800">
                {activeFiltersCount} filtros activos
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="text-charcoal-600 hover:text-charcoal-900"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Categorías */}
          <div>
            <h4 className="font-inter font-semibold text-charcoal-800 mb-3">Categoría</h4>
            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria) => (
                <Button
                  key={categoria}
                  variant={filters.categoria === categoria ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(categoria)}
                  className={filters.categoria === categoria 
                    ? "bg-charcoal-900 hover:bg-charcoal-800" 
                    : "border-gray-300 hover:bg-gray-50"
                  }
                >
                  {categoria}
                </Button>
              ))}
            </div>
          </div>

          {/* Técnicas */}
          <div>
            <h4 className="font-inter font-semibold text-charcoal-800 mb-3">Técnica</h4>
            <div className="flex flex-wrap gap-2">
              {tecnicas.map((tecnica) => (
                <Button
                  key={tecnica}
                  variant={filters.tecnica === tecnica ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTechniqueChange(tecnica)}
                  className={filters.tecnica === tecnica 
                    ? "bg-charcoal-900 hover:bg-charcoal-800" 
                    : "border-gray-300 hover:bg-gray-50"
                  }
                >
                  {tecnica}
                </Button>
              ))}
            </div>
          </div>

          {/* Precios */}
          <div>
            <h4 className="font-inter font-semibold text-charcoal-800 mb-3">Precio</h4>
            <div className="flex flex-wrap gap-2">
              {rangosPrecios.map((rango) => {
                const isActive = filters.precioMin === rango.min && filters.precioMax === rango.max;
                return (
                  <Button
                    key={rango.label}
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePriceRangeChange(rango.min, rango.max)}
                    className={isActive 
                      ? "bg-charcoal-900 hover:bg-charcoal-800" 
                      : "border-gray-300 hover:bg-gray-50"
                    }
                  >
                    {rango.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Búsqueda por artista */}
          <div>
            <h4 className="font-inter font-semibold text-charcoal-800 mb-3">Artista</h4>
            <input
              type="text"
              placeholder="Buscar por artista..."
              value={filters.artista}
              onChange={(e) => onFilterChange({ ...filters, artista: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-charcoal-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
