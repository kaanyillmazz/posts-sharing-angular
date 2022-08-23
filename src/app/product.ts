export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  count: number;
  rating: rating;
}

interface rating {
  rate: number;
  count: number;
}
