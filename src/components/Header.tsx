import React, { useState } from 'react';
import { Search, Menu, User, Globe, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/properties');
      // In a real app, you would filter properties based on the search query
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-red-500 text-2xl font-bold">
            FODSE-bnb
          </Link>

          <form
            onSubmit={handleSearch}
            className="flex items-center shadow-sm border rounded-full py-2 px-4 hover:shadow-md transition"
          >
            <input
              type="text"
              placeholder="Search destinations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none bg-transparent w-full"
            />
            <button type="submit" className="bg-red-500 p-2 rounded-full text-white">
              <Search size={16} />
            </button>
          </form>

          <div className="flex items-center space-x-4">
            <Link
              to="/host"
              className="hidden md:block hover:bg-gray-100 px-4 py-2 rounded-full"
            >
              Become a Host
            </Link>
            <button className="hover:bg-gray-100 p-2 rounded-full">
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 border rounded-full p-2 hover:shadow-md transition"
            >
              <Menu size={20} />
              <User size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-4 top-20 w-64 bg-white rounded-xl shadow-lg border p-2">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-2 top-2 p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
          <div className="py-2">
            <Link
              to="/signup"
              className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
            >
              Log in
            </Link>
            <hr className="my-2" />
            <Link
              to="/host"
              className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
            >
              Host your home
            </Link>
            <Link
              to="/help"
              className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
            >
              Help
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};