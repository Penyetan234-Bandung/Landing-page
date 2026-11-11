export type MenuCategory = 
  | 'semua'
  | 'ayam-bebek'
  | 'ikan-seafood'
  | 'nasi'
  | 'sambal'
  | 'tambahan'
  | 'minuman';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  isRecommended?: boolean;
  isFavorite?: boolean;
  isSpicy?: boolean;
  spicyLevel?: 1 | 2 | 3;
  image?: string;
  portion?: string;
  ingredients?: string[];
}

export interface NasiKotakPackage {
  id: string;
  name: string;
  startingPrice: number;
  description: string;
  includes: string[];
  minOrder: number;
  isPopular?: boolean;
  badge?: string;
  image: string;
}

export interface Promotion {
  id: string;
  title: string;
  tag: string;
  period: string;
  description: string;
  terms: string[];
  discountHighlight: string;
}

export interface CartItem {
  id: string;
  dishId: string;
  name: string;
  price: number;
  quantity: number;
  sambalChoice: string;
  riceChoice: string;
  notes?: string;
}
