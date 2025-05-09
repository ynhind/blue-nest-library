
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, ShoppingBag, Star } from 'lucide-react';
import { getBookById } from '@/data/books';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const book = id ? getBookById(id) : undefined;
  
  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Book Not Found</h1>
            <p className="mb-6 text-gray-600">Sorry, we couldn't find the book you're looking for.</p>
            <Button onClick={() => navigate('/browse')}>Browse Library</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Book Hero Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/3 lg:w-1/4 p-6 flex justify-center">
                <div className="book-cover w-full max-w-[250px]">
                  <img 
                    src={book.coverImage} 
                    alt={book.title}
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 lg:w-3/4 p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="category-tag">{book.category}</span>
                    <div className="ml-auto flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-gray-800 font-medium">{book.rating}</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">{book.title}</h1>
                  <p className="text-lg text-gray-700">by {book.author}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed">{book.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {book.isBorrowable && (
                    <Button className="w-full sm:w-auto">
                      <BookOpen className="mr-2 h-5 w-5" /> Borrow Now
                    </Button>
                  )}
                  <Button variant="outline" className="w-full sm:w-auto">
                    Preview
                  </Button>
                  {book.isAvailableForPurchase && (
                    <Button variant="secondary" className="w-full sm:w-auto">
                      <ShoppingBag className="mr-2 h-5 w-5" /> Buy for ${book.price}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Book Details Tabs */}
          <Tabs defaultValue="details" className="bg-white rounded-lg shadow-sm p-6">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Book Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="related">Related Books</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">About the Book</h3>
                  <dl className="space-y-2">
                    <div className="flex">
                      <dt className="w-32 font-medium text-gray-700">Title:</dt>
                      <dd>{book.title}</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-32 font-medium text-gray-700">Author:</dt>
                      <dd>{book.author}</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-32 font-medium text-gray-700">Category:</dt>
                      <dd>{book.category}</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-32 font-medium text-gray-700">Published:</dt>
                      <dd>{new Date(book.publishDate).toLocaleDateString()}</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-32 font-medium text-gray-700">Rating:</dt>
                      <dd className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1">{book.rating}/5</span>
                      </dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Summary</h3>
                  <p className="text-gray-600">{book.description}</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">Coming Soon</h3>
                <p className="text-gray-500">
                  Reader reviews will be available soon.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="related">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">Coming Soon</h3>
                <p className="text-gray-500">
                  Related books recommendations will be available soon.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetail;
