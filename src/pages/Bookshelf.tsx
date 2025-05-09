
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen } from 'lucide-react';
import { books } from '@/data/books';
import { Book } from '@/types/book';

// Simulated borrowed books data
const borrowedBooks: { book: Book; dueDate: string; progress: number }[] = [
  { book: books[0], dueDate: '2025-06-10', progress: 35 },
  { book: books[2], dueDate: '2025-05-25', progress: 78 },
];

// Simulated purchased books data
const purchasedBooks: { book: Book; purchaseDate: string }[] = [
  { book: books[1], purchaseDate: '2025-04-15' },
  { book: books[4], purchaseDate: '2025-04-02' },
];

const Bookshelf = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-serif font-bold mb-6">My Bookshelf</h1>
          
          <Tabs defaultValue="borrowed" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="borrowed">Borrowed Books</TabsTrigger>
              <TabsTrigger value="purchased">Purchased Books</TabsTrigger>
              <TabsTrigger value="history">Reading History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="borrowed" className="space-y-6">
              {borrowedBooks.length > 0 ? (
                <div className="space-y-4">
                  {borrowedBooks.map(({ book, dueDate, progress }) => (
                    <div 
                      key={book.id} 
                      className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row"
                    >
                      <Link to={`/book/${book.id}`} className="sm:w-1/4 md:w-1/5 lg:w-1/6">
                        <img 
                          src={book.coverImage} 
                          alt={book.title}
                          className="w-full h-48 sm:h-full object-cover"
                        />
                      </Link>
                      
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="category-tag">{book.category}</span>
                            <div className="flex items-center text-amber-600">
                              <Clock className="h-4 w-4 mr-1" />
                              <span className="text-sm">Due {new Date(dueDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                          
                          <Link to={`/book/${book.id}`}>
                            <h3 className="text-xl font-serif font-semibold text-gray-900 hover:text-library-600 mb-2">
                              {book.title}
                            </h3>
                          </Link>
                          <p className="text-gray-600 mb-4">by {book.author}</p>
                          
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-library-500 h-2 rounded-full" 
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <Button className="w-full sm:w-auto">
                            <BookOpen className="mr-2 h-4 w-4" /> Continue Reading
                          </Button>
                          <Button variant="outline" className="w-full sm:w-auto">
                            Return
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No borrowed books</h3>
                  <p className="text-gray-500 mb-6">
                    You haven't borrowed any books yet.
                  </p>
                  <Button asChild>
                    <Link to="/browse">Browse Library</Link>
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="purchased" className="space-y-6">
              {purchasedBooks.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {purchasedBooks.map(({ book, purchaseDate }) => (
                    <div 
                      key={book.id} 
                      className="bg-white rounded-lg shadow-sm overflow-hidden flex"
                    >
                      <Link to={`/book/${book.id}`} className="w-1/3">
                        <img 
                          src={book.coverImage} 
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="category-tag">{book.category}</span>
                          </div>
                          
                          <Link to={`/book/${book.id}`}>
                            <h3 className="text-lg font-serif font-semibold text-gray-900 hover:text-library-600 mb-1">
                              {book.title}
                            </h3>
                          </Link>
                          <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                          <p className="text-xs text-gray-500">
                            Purchased on {new Date(purchaseDate).toLocaleDateString()}
                          </p>
                        </div>
                        
                        <Button className="w-full sm:w-auto mt-2">
                          <BookOpen className="mr-2 h-4 w-4" /> Read Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No purchased books</h3>
                  <p className="text-gray-500 mb-6">
                    You haven't purchased any books yet.
                  </p>
                  <Button asChild>
                    <Link to="/browse">Browse Library</Link>
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="history">
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-700 mb-2">Reading History</h3>
                <p className="text-gray-500 mb-6">
                  Your reading history will appear here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-library-50 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-serif font-semibold mb-4">Reading Recommendations</h2>
            <p className="text-gray-600 mb-6">
              Based on your reading history, we think you might enjoy these books.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {books.slice(5, 10).map((book) => (
                <Link 
                  key={book.id} 
                  to={`/book/${book.id}`} 
                  className="book-cover hover:scale-105 transition-transform duration-200"
                >
                  <img 
                    src={book.coverImage} 
                    alt={book.title}
                    className="w-full h-48 object-cover rounded-lg shadow"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bookshelf;
