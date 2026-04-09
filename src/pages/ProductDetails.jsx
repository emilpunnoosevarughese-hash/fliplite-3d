import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Truck, Shield, ArrowLeft, Plus, Check } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Environment, ContactShadows, Float } from '@react-three/drei';
import ProductModel3D from '../components/ProductModel3D';
import { useAuth } from '../context/AuthContext';

export default function ProductDetails({ products, loading, onAddToCart, cartItems }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [viewMode, setViewMode] = useState('2D'); // '2D' or '3D'

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '10rem 0' }}>
         <h2 style={{ color: 'var(--text-secondary)' }}>Loading Product Details...</h2>
      </div>
    );
  }

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2>Product not found</h2>
        <Link to="/" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Back to Home</Link>
      </div>
    );
  }

  const isAdded = cartItems.some(item => item.id === product.id);

  return (
    <div className="container">
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={16} /> Back to Products
      </Link>
      
      <div className="product-details-page">
        <div className="product-gallery">
          {product.badge && <span className="product-badge" style={{ position: 'absolute', top: '2rem', left: '2rem', fontSize: '1rem', padding: '0.5rem 1rem', zIndex: 10 }}>{product.badge}</span>}
          
          {viewMode === '2D' ? (
            <img src={product.image} alt={product.title} />
          ) : (
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ width: '100%', height: '100%' }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} intensity={1} castShadow />
              
              <PresentationControls
                global
                config={{ mass: 2, tension: 500 }}
                snap={{ mass: 4, tension: 1500 }}
                rotation={[0, -0.5, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
              >
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                  <ProductModel3D imageUrl={product.image} color="#2563eb" />
                </Float>
              </PresentationControls>

              <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
              <Environment preset="city" />
            </Canvas>
          )}

          <div className="gallery-toggle">
            <button 
              className={viewMode === '2D' ? 'active' : ''} 
              onClick={() => setViewMode('2D')}
            >2D Image</button>
            <button 
              className={viewMode === '3D' ? 'active' : ''} 
              onClick={() => setViewMode('3D')}
            >3D View</button>
          </div>
        </div>

        <div className="details-content">
          <span className="details-brand">{product.category}</span>
          <h1 className="details-title">{product.title}</h1>
          
          <div className="details-rating">
            <div className="rating-badge" style={{ fontSize: '1rem', padding: '0.3rem 0.6rem' }}>
              <span>{product.rating}</span>
              <Star size={14} fill="white" />
            </div>
            <span className="rating-count" style={{ fontSize: '1rem' }}>{product.reviews.toLocaleString()} Ratings & Reviews</span>
          </div>

          <div className="details-price-wrap">
            <div className="details-price">
              ₹{product.price.toLocaleString('en-IN')}
              <span className="details-mrp">₹{product.mrp.toLocaleString('en-IN')}</span>
              <span className="product-discount" style={{ fontSize: '1.2rem' }}>{product.discount}</span>
            </div>
          </div>

          <p className="details-desc" style={{ textTransform: 'capitalize' }}>
            {product.description || `Experience premium quality with the ${product.title}.`}
          </p>
          
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <Truck size={20} color="var(--brand-primary)" /> Free Delivery
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <Shield size={20} color="var(--brand-primary)" /> 1 Year Warranty
            </div>
          </div>

          <div className="details-actions">
            <button 
              className={`btn-primary btn-large ${isAdded ? 'added' : ''}`}
              onClick={() => onAddToCart(product)}
              style={isAdded ? { background: '#16a34a' } : {}}
            >
              {isAdded ? (
                <>
                  <Check size={20} />
                  Added to Cart
                </>
              ) : (
                <>
                  <Plus size={20} />
                  Add to Cart
                </>
              )}
            </button>
            <button className="btn-secondary btn-large" onClick={() => {
              if (!currentUser) {
                alert("Please log in to purchase products.");
                navigate('/login');
              } else {
                onAddToCart(product);
                navigate('/checkout');
              }
            }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
