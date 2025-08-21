export interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  toppings: string[];
  size: 'Small' | 'Medium' | 'Large';
  category: 'Classic' | 'Gourmet' | 'Vegetarian' | 'Spicy';
}
