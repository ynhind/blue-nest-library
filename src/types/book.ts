
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  category: string;
  isBorrowable: boolean;
  isAvailableForPurchase: boolean;
  price: number;
  rating: number;
  publishDate: string;
}
