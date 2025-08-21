import React from 'react';
import { CardProps, PizzaCardProps } from '../../types/card';
import './cards.scss';

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  price,
  badges = [],
  tags = [],
  actions = [],
  className = ''
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-content">
        {image && (
          <div className="card-icon">
            {typeof image === 'string' ? image : image}
          </div>
        )}
        
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        {badges.length > 0 && (
          <div className="badge-container">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`badge badge-${badge.variant}`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        )}

        {tags.length > 0 && (
          <div className="tags-section">
            <p className="tags-label">Tags:</p>
            <div className="tags-list">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="tag"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="card-footer">
          {price && (
            <span className="price">${price}</span>
          )}
          
          <div className="actions">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className={`action-button action-button-${action.variant}`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Convenience component for pizza-specific usage
export const PizzaCard: React.FC<PizzaCardProps> = ({ pizza, onAddToCart }) => {
  return (
    <Card
      title={pizza.name}
      description={pizza.description}
      image={pizza.image}
      price={pizza.price}
      badges={[
        { text: pizza.category, variant: 'primary' },
        { text: pizza.size, variant: 'secondary' }
      ]}
      tags={pizza.toppings}
      actions={[
        {
          label: 'Add to Cart',
          onClick: () => onAddToCart(pizza),
          variant: 'primary'
        }
      ]}
    />
  );
};
