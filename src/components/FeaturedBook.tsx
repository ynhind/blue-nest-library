
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '@/types/book';
import { Button } from '@/components/ui/button';
import { BookOpen, ShoppingBag } from 'lucide-react';

interface FeaturedBookProps {
  book: Book;
}

const FeaturedBook = ({ book }: FeaturedBookProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg flex flex-col md:flex-row">
      <div className="md:w-1/3 relative">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 md:w-2/3 flex flex-col">
        <div>
          <span className="category-tag">{book.category}</span>
          <h2 className="mt-3 text-2xl font-serif font-semibold text-gray-900">{book.title}</h2>
          <p className="text-gray-600">by {book.author}</p>
        </div>
        
        <p className="mt-4 text-gray-700">{book.description}</p>
        
        <div className="mt-6 space-y-3 md:space-y-0 md:space-x-3 md:flex">
          {book.isBorrowable && (
            <Button className="w-full md:w-auto">
              <BookOpen className="mr-2 h-5 w-5" />
              Borrow Now
            </Button>
          )}
          <Button variant="outline" className="w-full md:w-auto">
            Preview
          </Button>
          <Button variant="secondary" className="w-full md:w-auto">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Buy for ${book.price}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBook;
