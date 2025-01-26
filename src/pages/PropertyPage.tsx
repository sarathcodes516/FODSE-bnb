import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, User } from 'lucide-react';
import { Header } from '../components/Header';
import { properties } from '../data/generateData';

export const PropertyPage = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">{property.title}</h1>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Star size={20} className="fill-current" />
            <span>{property.rating}</span>
            <span>·</span>
            <MapPin size={20} />
            <span>{property.location.city}, {property.location.country}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {property.images.slice(0, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Property ${index + 1}`}
              className={`w-full h-64 object-cover rounded-lg ${
                index === 0 ? 'col-span-2 h-96' : ''
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About this place</h2>
              <p className="text-gray-700">{property.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-lg h-fit sticky top-24">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-semibold">
                ${property.price} <span className="text-base font-normal">night</span>
              </span>
              <div className="flex items-center">
                <Star size={16} className="fill-current" />
                <span className="ml-1">{property.rating}</span>
              </div>
            </div>

            <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
              Reserve
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {property.reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <User size={40} className="text-gray-400" />
                  <div>
                    <h3 className="font-medium">{review.userName}</h3>
                    <p className="text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <Star size={16} className="fill-current" />
                  <span className="ml-1">{review.rating}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};