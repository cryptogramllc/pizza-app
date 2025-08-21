import { NextResponse } from 'next/server';
import { Pizza } from '../../../types';

// Pizza data
const pizzaData: Pizza[] = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic tomato sauce with fresh mozzarella and basil",
    price: 12.99,
    image: "🍕",
    toppings: ["Tomato Sauce", "Mozzarella", "Basil"],
    size: "Medium",
    category: "Classic"
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Spicy pepperoni with melted cheese and tomato sauce",
    price: 14.99,
    image: "🍕",
    toppings: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
    size: "Medium",
    category: "Classic"
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description: "BBQ sauce with grilled chicken, red onions, and cilantro",
    price: 16.99,
    image: "🍕",
    toppings: ["BBQ Sauce", "Grilled Chicken", "Red Onions", "Cilantro"],
    size: "Medium",
    category: "Gourmet"
  },
  {
    id: 4,
    name: "Vegetarian Supreme",
    description: "Fresh vegetables with mushrooms, bell peppers, and olives",
    price: 15.99,
    image: "🍕",
    toppings: ["Tomato Sauce", "Mozzarella", "Mushrooms", "Bell Peppers", "Olives"],
    size: "Medium",
    category: "Vegetarian"
  },
  {
    id: 5,
    name: "Spicy Jalapeño",
    description: "Hot jalapeños with spicy sausage and extra cheese",
    price: 17.99,
    image: "🍕",
    toppings: ["Tomato Sauce", "Mozzarella", "Spicy Sausage", "Jalapeños"],
    size: "Medium",
    category: "Spicy"
  },
  {
    id: 6,
    name: "Hawaiian",
    description: "Ham and pineapple with a sweet and savory taste",
    price: 15.99,
    image: "🍕",
    toppings: ["Tomato Sauce", "Mozzarella", "Ham", "Pineapple"],
    size: "Medium",
    category: "Classic"
  }
];

export async function GET() {
  try {
    // Simulate a small delay to mimic real API behavior
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return NextResponse.json({
      success: true,
      data: pizzaData,
      count: pizzaData.length
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch pizzas' 
      },
      { status: 500 }
    );
  }
}
