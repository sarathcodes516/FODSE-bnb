import React, { useState } from 'react';
import { X } from 'lucide-react';

const filterCategories = [
  {
    name: 'Price',
    options: ['$0-$50', '$50-$100', '$100-$200', '$200+'],
  },
  {
    name: 'Property Type',
    options: ['Apartment', 'House', 'Villa', 'Condo', 'Cabin'],
  },
  {
    name: 'Rooms',
    options: ['1', '2', '3', '4+'],
  },
  {
    name: 'Amenities',
    options: ['Pool', 'WiFi', 'Kitchen', 'Free parking'],
  },
];

export const Filters = () => {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (category: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const clearFilter = (category: string) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[category];
      return newFilters;
    });
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 border rounded-lg hover:border-gray-400 focus:outline-none"
        >
          Filters
        </button>

        {/* Active Filters */}
        {Object.entries(activeFilters).map(([category, value]) => (
          <div
            key={category}
            className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full"
          >
            <span className="text-sm">
              {category}: {value}
            </span>
            <button
              onClick={() => clearFilter(category)}
              className="hover:bg-gray-200 rounded-full p-1"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {filterCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="text-lg font-medium mb-3">{category.name}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleFilterChange(category.name, option)}
                        className={`px-4 py-2 rounded-lg border ${
                          activeFilters[category.name] === option
                            ? 'border-red-500 bg-red-50'
                            : 'hover:border-gray-400'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setActiveFilters({})}
                className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Clear all
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Show results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};