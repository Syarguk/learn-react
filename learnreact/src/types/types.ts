export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type Products = Array<Product>;

export type CardUserData = {
  name: string | undefined;
  data: string | undefined;
  gender: string | undefined;
  promo: string | boolean | undefined;
  period: string | undefined;
  img: string | undefined;
};

export type TypePropsForm = {
  onAdd: (user: CardUserData) => void;
};
