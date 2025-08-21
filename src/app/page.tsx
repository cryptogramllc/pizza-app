'use client';
import React, { useState, useEffect } from 'react';
import { Pizza } from '../types';
import { PizzaCard } from '../components/cards';
import './page.scss';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = ['All', 'Classic', 'Gourmet', 'Vegetarian', 'Spicy'];
  
  // Fetch pizzas from API
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/pizzas');
        const result = await response.json();
        
        if (result.success) {
          setPizzas(result.data);
        } else {
          setError('Failed to fetch pizzas');
        }
      } catch (err) {
        setError('Error loading pizzas');
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);
  
  const filteredPizzas = pizzas.filter(pizza => {
    const matchesCategory = selectedCategory === 'All' || pizza.category === selectedCategory;
    const matchesSearch = pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pizza.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="text-center">
          <div className="loading-icon">🍕</div>
          <p className="loading-text">Loading delicious pizzas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="text-center">
          <div className="error-icon">😞</div>
          <p className="error-text">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="retry-button"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pizza-page">
      <div className="container py-8">
        {/* Header */}
        <div className="page-header">
          <h1 className="title">🍕 Pizza Palace</h1>
          <p className="subtitle">Discover our delicious pizza selection</p>
        </div>

        {/* Search and Filter */}
        <div className="search-filter-section">
          <input
            type="text"
            placeholder="Search pizzas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-button ${
                  selectedCategory === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Pizza Grid */}
        <div className="pizza-grid">
          {filteredPizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onAddToCart={(pizza) => console.log('Added to cart:', pizza.name)}
            />
          ))}
        </div>

        {filteredPizzas.length === 0 && (
          <div className="empty-state">
            <p className="empty-text">No pizzas found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
