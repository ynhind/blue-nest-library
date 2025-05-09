
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, User, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <BookOpen className="h-6 w-6 text-library-600 mr-2" />
            <span className="text-xl font-serif font-semibold text-library-700">ReadShare</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search books, authors, genres..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-50 focus:bg-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/browse" className="text-library-600 hover:text-library-800">Browse</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/bookshelf" className="text-library-600 hover:text-library-800">My Bookshelf</Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
