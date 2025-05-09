
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-library-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-6 w-6 text-library-600 mr-2" />
              <span className="text-xl font-serif font-semibold text-library-700">ReadShare</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Your trusted online library with thousands of books to borrow, read, and purchase.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Explore</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/browse" className="text-sm text-gray-600 hover:text-library-600">
                    Browse Library
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="text-sm text-gray-600 hover:text-library-600">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/new-releases" className="text-sm text-gray-600 hover:text-library-600">
                    New Releases
                  </Link>
                </li>
                <li>
                  <Link to="/popular" className="text-sm text-gray-600 hover:text-library-600">
                    Most Popular
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Account</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/profile" className="text-sm text-gray-600 hover:text-library-600">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/bookshelf" className="text-sm text-gray-600 hover:text-library-600">
                    My Bookshelf
                  </Link>
                </li>
                <li>
                  <Link to="/history" className="text-sm text-gray-600 hover:text-library-600">
                    Reading History
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="text-sm text-gray-600 hover:text-library-600">
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Help</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/faq" className="text-sm text-gray-600 hover:text-library-600">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-600 hover:text-library-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-gray-600 hover:text-library-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-gray-600 hover:text-library-600">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ReadShare Library. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
