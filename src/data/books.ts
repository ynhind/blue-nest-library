
import { Book } from '@/types/book';

export const books: Book[] = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop',
    category: 'Fiction',
    isBorrowable: true,
    isAvailableForPurchase: true,
    price: 12.99,
    rating: 4.8,
    publishDate: '1960-07-11'
  },
  {
    id: '2',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'An exquisitely crafted tale of America in the 1920s that depicts the life of the fabulously wealthy Jay Gatsby.',
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop',
    category: 'Fiction',
    isBorrowable: true,
    isAvailableForPurchase: true,
    price: 10.99,
    rating: 4.5,
    publishDate: '1925-04-10'
  },
  {
    id: '3',
    title: 'Becoming',
    author: 'Michelle Obama',
    description: 'In her memoir, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her.',
    coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop',
    category: 'Biography',
    isBorrowable: true,
    isAvailableForPurchase: true,
    price: 15.99,
    rating: 4.9,
    publishDate: '2018-11-13'
  },
  {
    id: '4',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    description: 'A fascinating exploration of how humans evolved from insignificant apes to rulers of the world.',
    coverImage: 'https://images.unsplash.com/photo-1515098506762-79e1384e5903?q=80&w=800&auto=format&fit=crop',
    category: 'History',
    isBorrowable: true,
    isAvailableForPurchase: true,
    price: 14.99,
    rating: 4.7,
    publishDate: '2011-01-01'
  },
  {
    id: '5',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'A fable about following your dream and about understanding the world around you.',
    coverImage: 'https://images.unsplash.com/photo-1531901599143-df8c80d0cf73?q=80&w=800&auto=format&fit=crop',
    category: 'Fiction',
    isBorrowable: true,
    isAvailableForPurchase: true,
    price: 9.99,
    rating: 4.6,
    publishDate: '1988-01-01'
  },
  {
    id: '6',
    title: 'Educated',
    author: 'Tara Westover',
    description: 'A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD.',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
    category: 'Biography',
    isBorrowable: true,
    isAvailableForPurchase: true,
    price: 13.99,
    rating: 4.7,
    publishDate: '2018-02-20'
  },
  {
    id: '7',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'A proven framework for improving every day through tiny changes in your habits.',
    coverImage: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?q=80&w=800&auto=format&fit=crop',
    category: 'Self-Help',
    isBorrowable: true,
    isAvailableForPurchase: true,
    price: 11.99,
    rating: 4.8,
    publishDate: '2018-10-16'
  },
  {
    id: '8',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    description: 'A murder mystery, a coming-of-age narrative, and a celebration of nature.',
    coverImage: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=800&auto=format&fit=crop',
    category: 'Fiction',
    isBorrowable: true,
    isAvailableForPurchase: true,
    price: 12.99,
    rating: 4.8,
    publishDate: '2018-08-14'
  },
  {
    id: '9',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    description: "A shocking psychological thriller of a woman's act of violence against her husband.",
    coverImage: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=800&auto=format&fit=crop',
    category: 'Thriller',
    isBorrowable: true,
    isAvailableForPurchase: true,
    price: 13.99,
    rating: 4.5,
    publishDate: '2019-02-05'
  },
  {
    id: '10',
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    description: 'An award-winning New York Times business reporter explores why habits exist and how they can be changed.',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop',
    category: 'Self-Help',
    isBorrowable: true,
    isAvailableForPurchase: true,
    price: 10.99,
    rating: 4.6,
    publishDate: '2012-02-28'
  }
];

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const getBooksByCategory = (category: string | null): Book[] => {
  if (!category) return books;
  return books.filter(book => book.category === category);
};

export const getFeaturedBooks = (count: number): Book[] => {
  return books.slice(0, count);
};

export const getNewArrivals = (count: number): Book[] => {
  return [...books]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
};

export const getCategories = (): { id: string, name: string }[] => {
  const uniqueCategories = [...new Set(books.map(book => book.category))];
  return uniqueCategories.map(category => ({
    id: category,
    name: category
  }));
};
