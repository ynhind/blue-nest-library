
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedBook from '@/components/FeaturedBook';
import BookGrid from '@/components/BookGrid';
import CategorySelector from '@/components/CategorySelector';
import { Button } from '@/components/ui/button';
import { getFeaturedBooks, getNewArrivals, getCategories, getBooksByCategory } from '@/data/books';

const Index = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const featuredBooks = getFeaturedBooks(1);
  const newArrivals = getNewArrivals(5);
  const categories = getCategories();
  const filteredBooks = getBooksByCategory(selectedCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-library-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-library-900 mb-4">
                Discover, Borrow, and Read Your Next Favorite Book
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Access thousands of books online. Preview, borrow, or purchase - all in one place.
              </p>
              <Button 
                onClick={() => navigate('/browse')} 
                className="text-base px-6 py-3"
              >
                Explore Library
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Book */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-semibold mb-6">Featured Book</h2>
            {featuredBooks.length > 0 && (
              <FeaturedBook book={featuredBooks[0]} />
            )}
          </div>
        </section>
        
        {/* New Arrivals */}
        <section className="py-10 bg-library-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif font-semibold">New Arrivals</h2>
              <Button variant="link" onClick={() => navigate('/browse')}>
                View all
              </Button>
            </div>
            <BookGrid books={newArrivals} />
          </div>
        </section>
        
        {/* Browse by Category */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-semibold mb-4">Browse by Category</h2>
            <CategorySelector 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <BookGrid books={filteredBooks.slice(0, 5)} />
            <div className="text-center mt-8">
              <Button onClick={() => navigate('/browse')} variant="outline" className="px-6">
                See All Books
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-library-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">Ready to Start Reading?</h2>
            <p className="text-lg text-library-100 max-w-xl mx-auto mb-8">
              Join our online library today and get access to thousands of books. Preview, borrow, or purchase your next favorite read.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => navigate('/browse')} className="bg-white text-library-700 hover:bg-library-50">
                Browse Library
              </Button>
              <Button onClick={() => navigate('/signup')} variant="outline" className="text-white border-white hover:bg-library-600">
                Sign Up Free
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
