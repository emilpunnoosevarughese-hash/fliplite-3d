import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Cart({ cartItems, updateQuantity, removeFromCart }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart glass-panel">
          <h2>Your Cart is Empty!</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="section-title">Shopping Cart ({cartItems.length} items)</h2>
      
      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-img" />
              
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{item.category}</p>
                <div className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</div>
                
                <div className="cart-item-actions">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: '#f1f5f9', padding: '0.2rem', borderRadius: '50px' }}>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>
                      <Minus size={14} />
                    </button>
                    <span style={{ fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={16} style={{ marginBottom: '-3px' }} /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Order Summary</h3>
          
          <div className="summary-row">
            <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
            <span style={{ fontWeight: '600' }}>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          
          <div className="summary-row">
            <span style={{ color: 'var(--text-secondary)' }}>Estimated Tax (8%)</span>
            <span style={{ fontWeight: '600' }}>₹{tax.toLocaleString('en-IN')}</span>
          </div>
          
          <div className="summary-row">
            <span style={{ color: 'var(--text-secondary)' }}>Delivery Fee</span>
            <span style={{ color: '#16a34a', fontWeight: '600' }}>FREE</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>

          <button className="btn-checkout" onClick={() => {
            if (!currentUser) {
               alert("Please log in to proceed to checkout.");
               navigate('/login');
            } else {
               navigate('/checkout');
            }
          }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
