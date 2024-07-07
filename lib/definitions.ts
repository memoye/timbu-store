export interface Product {
  id: string | number;
  title: string;
  subtitle?: string;
  rating: number;
  reviews: number;
  desc: string;
  price: number;
  items_left: number;
  discount_percentage: number;
  image: {
    src: string;
    alt?: string;
    w?: number;
    h?: number;
  };
  features?: string[];
}
