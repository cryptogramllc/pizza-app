export interface CardProps {
  title: string;
  description: string;
  image?: string | React.ReactNode;
  price?: number;
  badges?: Array<{
    text: string;
    variant: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  }>;
  tags?: string[];
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant: 'primary' | 'secondary' | 'outline';
  }>;
  className?: string;
}

export interface PizzaCardProps {
  pizza: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    toppings: string[];
    size: string;
    category: string;
  };
  onAddToCart: (pizza: any) => void;
}
