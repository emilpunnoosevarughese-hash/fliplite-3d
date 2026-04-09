import { useSearchParams } from 'react-router-dom';
import Hero3D from '../components/Hero3D';
import ProductList from '../components/ProductList';

export default function Home({ products, loading, onAddToCart, cartItems }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const filteredProducts = products.filter(product => {
    if (!query) return true;
    return product.title.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
  });

  return (
    <div className="container">
      {/* Hide Hero3D if user is searching to save space */}
      {!query && <Hero3D />}
      
      <section style={{ marginTop: query ? '2rem' : '0' }}>
        <h2 className="section-title">
          {query ? `Search Results for "${searchParams.get('q')}"` : "Trending Now"}
        </h2>
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '8rem 0' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>Loading catalog directly from Live Store API...</h3>
          </div>
        ) : filteredProducts.length > 0 ? (
          <ProductList 
            products={filteredProducts} 
            onAddToCart={onAddToCart} 
            cartItems={cartItems}
          />
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>No products found matching your search.</h3>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Try adjusting your keywords (e.g. Headphones, Mobiles).</p>
          </div>
        )}
      </section>
    </div>
  );
}
