import { Star, StarHalf, Plus, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onAddToCart, cartItems }) {
  const isAdded = cartItems.some(item => item.id === product.id);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <img src={product.image} alt={product.title} />
      </Link>
      
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.title}</h3>
        </Link>
        
        <div className="product-rating">
          <div className="rating-badge">
            <span>{product.rating}</span>
            <Star size={12} fill="white" />
          </div>
          <span className="rating-count">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="product-price-row">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="product-mrp">₹{product.mrp.toLocaleString('en-IN')}</span>
          <span className="product-discount">{product.discount}</span>
        </div>

        <button 
          className={`btn-add-cart ${isAdded ? 'added' : ''}`}
          onClick={() => onAddToCart(product)}
        >
          {isAdded ? (
            <>
              <Check size={18} />
              Added to Cart
            </>
          ) : (
            <>
              <Plus size={18} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
