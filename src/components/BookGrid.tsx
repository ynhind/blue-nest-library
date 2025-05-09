
import React from 'react';
import BookCard from './BookCard';
import { Book } from '@/types/book';

interface BookGridProps {
  books: Book[];
  title?: string;
}

const BookGrid = ({ books, title }: BookGridProps) => {
  return (
    <div className="py-6">
      {title && (
        <h2 className="text-2xl font-serif font-semibold mb-4">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
