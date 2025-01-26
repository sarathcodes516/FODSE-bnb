import React from 'react';
import { Header } from '../components/Header';
import { Filters } from '../components/Filters';
import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/generateData';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Filters />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
    </div>
  );
};