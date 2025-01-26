import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, Home, Star, Heart } from 'lucide-react';
import { Header } from '../components/Header';

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80"
          alt="Beautiful landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">Find Your Next Adventure</h1>
            <p className="text-xl mb-8">Discover unique homes and experiences around the world</p>
            <Link
              to="/properties"
              className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Home size={48} className="text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Unique Properties</h3>
            <p className="text-gray-600">Find one-of-a-kind places to stay, from treehouses to luxury villas</p>
          </div>
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Star size={48} className="text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Verified Hosts</h3>
            <p className="text-gray-600">Book with confidence knowing our hosts are carefully vetted</p>
          </div>
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Heart size={48} className="text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Best Experience</h3>
            <p className="text-gray-600">24/7 customer support and guaranteed satisfaction</p>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Paris',
                image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80',
              },
              {
                name: 'New York',
                image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&q=80',
              },
              {
                name: 'Tokyo',
                image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80',
              },
              {
                name: 'London',
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80',
              },
            ].map((destination) => (
              <Link
                key={destination.name}
                to="/properties"
                className="group relative rounded-lg overflow-hidden aspect-[4/3]"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{destination.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};