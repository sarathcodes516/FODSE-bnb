import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Filters } from '../components/Filters';
import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/generateData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PropertiesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 20;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber: number) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />
      <Filters />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNumber;
            if (totalPages <= 5) {
              pageNumber = i + 1;
            } else if (currentPage <= 3) {
              pageNumber = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + i;
            } else {
              pageNumber = currentPage - 2 + i;
            }

            return (
              <button
                key={i}
                onClick={() => paginate(pageNumber)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === pageNumber
                    ? 'bg-red-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </main>
    </div>
  );
};