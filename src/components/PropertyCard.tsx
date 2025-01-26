import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../data/generateData';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="block">
      <div className="rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative aspect-[4/3]">
          <img
            src={property.images[0]}
            alt={property.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-900">{property.location.city}, {property.location.country}</h3>
            <div className="flex items-center">
              <Star size={16} className="fill-current" />
              <span className="ml-1">{property.rating}</span>
            </div>
          </div>
          <p className="text-gray-500 mt-1">{property.type}</p>
          <p className="mt-1">
            <span className="font-semibold">${property.price}</span> night
          </p>
        </div>
      </div>
    </Link>
  );
};