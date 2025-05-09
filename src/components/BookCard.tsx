
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '@/types/book';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link to={`/book/${book.id}`} className="book-card group">
      <div className="book-cover">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="book-card-image transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-1">
          <span className="category-tag">{book.category}</span>
        </div>
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <div className="mt-auto">
          {book.isBorrowable && (
            <div className="flex items-center text-sm text-library-500">
              <span className="font-medium">Available to borrow</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
