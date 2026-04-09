import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, LogOut, Settings as SettingsIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ cartCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
    setIsMobileMenuOpen(false); // Close menu securely on route change
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
          <Link to="/about" className="nav-item hide-on-mobile">
            <span style={{ fontWeight: 600, color: 'var(--brand-primary)' }}>Developer Matrix</span>
          </Link>
          {currentUser ? (
            <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--brand-primary)', marginRight: '0.5rem' }}>
                {currentUser.email?.split('@')[0] || 'User'}
              </span>
              <Link to="/settings" className="nav-item">
                <SettingsIcon size={20} />
              </Link>
              <button className="nav-item" onClick={() => logout()}>
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Link to="/settings" className="nav-item">
                  <SettingsIcon size={20} />
               </Link>
               <Link to="/login" className="nav-item">
                 <User size={20} />
               </Link>
            </div>
          )}
          
          <Link to="/cart" className="nav-item">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          
          <button className="nav-item mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile User Dropdown Overlay. Active only on phone views. */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <form className="mobile-search" onSubmit={(e) => { handleSearch(e); setIsMobileMenuOpen(false); }}>
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          
          <div className="mobile-links">
            <Link to="/about" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <span style={{ fontWeight: 600, color: 'var(--brand-primary)' }}>Developer Matrix</span>
            </Link>
            <Link to="/cart" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <ShoppingCart size={20} />
              <span>Checkout Cart ({cartCount})</span>
            </Link>
            
            <div className="mobile-divider"></div>
            
            {currentUser ? (
              <>
                <div className="mobile-nav-item" style={{ color: 'var(--text-secondary)' }}>
                  <User size={20} />
                  <span>{currentUser.email}</span>
                </div>
                <Link to="/settings" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                  <SettingsIcon size={20} />
                  <span>Profile Settings</span>
                </Link>
                <button className="mobile-nav-item" onClick={() => { logout(); setIsMobileMenuOpen(false); }} style={{ width: '100%', textAlign: 'left', color: 'var(--danger-color)', border: 'none', background: 'transparent', cursor: 'pointer' }}>
                  <LogOut size={20} />
                  <span>Secure Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/settings" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                  <SettingsIcon size={20} />
                  <span>App Settings</span>
                </Link>
                <Link to="/login" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                  <User size={20} />
                  <span>Login / Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
