import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { CreditCard, Smartphone, Truck, CheckCircle, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Checkout({ cartItems, clearCart }) {
  const { currentUser } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handlePayment = (e) => {
    e.preventDefault();
    if (paymentMethod === 'UPI' && !upiId.includes('@')) {
      alert("Please enter a valid UPI ID (e.g., name@okhdfcbank)");
      return;
    }
    
    setIsProcessing(true);
    // Simulate secure network processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
      setTimeout(() => {
        navigate('/');
      }, 3500);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <CheckCircle size={80} color="#16a34a" style={{ marginBottom: '1.5rem' }} />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Payment Successful!</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>Your secure transaction of ₹{total.toLocaleString('en-IN')} is complete.</p>
        <div style={{ padding: '1rem 2rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-subtle)' }}>
           Redirecting you back to the shop...
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>No items to checkout</h2>
        <button className="btn-primary" onClick={() => navigate('/')} style={{ marginTop: '1.5rem' }}>Go Shopping</button>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        <ShieldCheck size={28} color="#16a34a" />
        <h2 className="section-title" style={{ margin: 0 }}>Secure Checkout</h2>
      </div>
      
      <div className="cart-layout">
        <div className="payment-options glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', height: 'fit-content' }}>
          <h3 style={{ marginBottom: '2rem', fontSize: '1.3rem' }}>Select Payment Method</h3>
          
          <div className="payment-methods" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            <label className={`payment-card ${paymentMethod === 'UPI' ? 'active' : ''}`}>
              <input type="radio" name="payment" checked={paymentMethod === 'UPI'} onChange={() => setPaymentMethod('UPI')} style={{ display: 'none' }} />
              <Smartphone size={24} className="method-icon" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>UPI (GPay, PhonePe, Paytm)</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Instant zero-fee transfer</div>
              </div>
              <div className="radio-circle"></div>
            </label>

            <label className={`payment-card ${paymentMethod === 'CARD' ? 'active' : ''}`}>
              <input type="radio" name="payment" checked={paymentMethod === 'CARD'} onChange={() => setPaymentMethod('CARD')} style={{ display: 'none' }} />
              <CreditCard size={24} className="method-icon" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Credit / Debit Card</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Visa, MasterCard, RuPay</div>
              </div>
              <div className="radio-circle"></div>
            </label>

            <label className={`payment-card ${paymentMethod === 'COD' ? 'active' : ''}`}>
              <input type="radio" name="payment" checked={paymentMethod === 'COD'} onChange={() => setPaymentMethod('COD')} style={{ display: 'none' }} />
              <Truck size={24} className="method-icon" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Cash on Delivery</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Pay at your doorstep</div>
              </div>
              <div className="radio-circle"></div>
            </label>
          </div>

          <form onSubmit={handlePayment} style={{ background: 'var(--surface-solid)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)' }}>
            {paymentMethod === 'UPI' && (
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label>Enter your UPI ID</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. yourname@ybl" 
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    required
                    style={{ paddingLeft: '2.5rem' }}
                  />
                  <Smartphone size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.8rem' }}>A payment request will be sent to your UPI app for approval.</p>
              </div>
            )}

            {paymentMethod === 'CARD' && (
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label>Card Details</label>
                <input type="text" className="form-input" placeholder="Card Number" required style={{ marginBottom: '1rem' }} />
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input type="text" className="form-input" placeholder="MM/YY" required />
                  <input type="text" className="form-input" placeholder="CVV" required />
                </div>
              </div>
            )}

            {paymentMethod === 'COD' && (
              <div style={{ marginBottom: '2rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                You have selected Cash on Delivery. Please keep exact change ready to provide to the delivery executive.
              </div>
            )}

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.2rem', display: 'flex', justifyContent: 'center' }} disabled={isProcessing}>
              {isProcessing ? 'Processing Payment...' : `Pay ₹${total.toLocaleString('en-IN')} Securely`}
            </button>
          </form>
        </div>
        
        <div className="cart-summary" style={{ top: 'calc(var(--nav-height) + 2rem)' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Order Summary</h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1.5rem', paddingRight: '0.5rem' }}>
            {cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-dark)' }}>
                 <img src={item.image} style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-sm)', objectFit: 'contain', background: '#f8fafc' }} />
                 <div style={{ flex: 1 }}>
                   <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.title}</div>
                   <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Qty: {item.quantity}</div>
                   <div style={{ fontWeight: 600, marginTop: '0.2rem' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                 </div>
              </div>
            ))}
          </div>

          <div className="summary-row">
            <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
            <span style={{ fontWeight: '600' }}>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span style={{ color: 'var(--text-secondary)' }}>Estimated Tax (8%)</span>
            <span style={{ fontWeight: '600' }}>₹{tax.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-total">
            <span>Total to Pay</span>
            <span style={{ color: 'var(--brand-primary)' }}>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
