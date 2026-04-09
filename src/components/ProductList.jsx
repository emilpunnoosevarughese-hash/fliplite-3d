import ProductCard from './ProductCard';

export default function ProductList({ products, onAddToCart, cartItems }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
}
