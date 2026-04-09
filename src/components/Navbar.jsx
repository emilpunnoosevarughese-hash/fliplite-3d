import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, LogOut, Settings as SettingsIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ cartCount }) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?q=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="navbar glass-panel">
      <div className="container">
        <Link to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <img src="/fliplite-logo.png" alt="FlipLite Logo" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'cover', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)' }} />
          <span>FlipLite</span>
        </Link>
        
        <form className="nav-search" onSubmit={handleSearch}>
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search for products, brands and more..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <div className="nav-actions">
          <Link to="/about" className="nav-item">
            <span style={{ fontWeight: 600, color: 'var(--brand-primary)' }}>Developer</span>
          </Link>
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--brand-primary)', marginRight: '0.5rem' }}>
                {currentUser.email?.split('@')[0] || 'User'}
              </span>
              <Link to="/settings" className="nav-item">
                <SettingsIcon size={20} />
              </Link>
              <button className="nav-item" onClick={() => logout()}>
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Link to="/settings" className="nav-item">
                  <SettingsIcon size={20} />
               </Link>
               <Link to="/login" className="nav-item">
                 <User size={20} />
                 <span>Login</span>
               </Link>
            </div>
          )}
          
          <Link to="/cart" className="nav-item">
            <ShoppingCart size={20} />
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          
          <button className="nav-item mobile-only" style={{ display: 'none' }}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
