import { useAuth } from '../context/AuthContext';
import { Moon, Sun, Bell, Globe, Shield, CreditCard, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Settings({ toggleTheme, isDarkMode }) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container" style={{ padding: '2rem 0', maxWidth: '800px' }}>
      <h2 className="section-title">Account Settings</h2>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        
        {/* Profile Card */}
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
             <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 600 }}>
                {currentUser?.email ? currentUser.email[0].toUpperCase() : 'U'}
             </div>
             <div>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{currentUser?.email?.split('@')[0] || 'Guest User'}</h3>
               <p style={{ color: 'var(--text-secondary)' }}>{currentUser?.email || 'Not logged in'}</p>
             </div>
          </div>
          
          {currentUser ? (
              <button className="btn-secondary" onClick={() => { logout(); navigate('/'); }}>Sign Out</button>
          ) : (
              <button className="btn-primary" onClick={() => navigate('/login')}>Log In to manage profile</button>
          )}
        </div>

        {/* Preferences */}
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-dark)' }}>App Preferences</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--border-dark)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ padding: '0.6rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-sm)' }}>
                 {isDarkMode ? <Moon size={20} className="brand-icon" /> : <Sun size={20} className="brand-icon" />}
               </div>
               <div>
                 <div style={{ fontWeight: 500 }}>Dark Mode</div>
                 <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Toggle dark interface</div>
               </div>
            </div>
            <label className="theme-switch" style={{ cursor: 'pointer' }}>
               <div onClick={toggleTheme} style={{ width: '50px', height: '26px', background: isDarkMode ? 'var(--brand-primary)' : 'var(--text-secondary)', borderRadius: '20px', position: 'relative', transition: 'all 0.3s' }}>
                  <div style={{ width: '22px', height: '22px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: isDarkMode ? '26px' : '2px', transition: 'all 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}></div>
               </div>
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--border-dark)', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ padding: '0.6rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-sm)' }}>
                 <Globe size={20} className="brand-icon" />
               </div>
               <div>
                 <div style={{ fontWeight: 500 }}>Region & Currency</div>
                 <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>India (INR ₹)</div>
               </div>
            </div>
            <ChevronRight size={20} color="var(--text-secondary)" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ padding: '0.6rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-sm)' }}>
                 <Bell size={20} className="brand-icon" />
               </div>
               <div>
                 <div style={{ fontWeight: 500 }}>Notifications</div>
                 <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Manage order alerts & promotional emails</div>
               </div>
            </div>
            <ChevronRight size={20} color="var(--text-secondary)" />
          </div>

        </div>

        {/* Security & Payment */}
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-dark)' }}>Account details</h3>
          
          <div onClick={() => navigate('/privacy')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--border-dark)', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ padding: '0.6rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-sm)' }}>
                 <Shield size={20} className="brand-icon" />
               </div>
               <div style={{ fontWeight: 500 }}>Privacy & Security</div>
            </div>
            <ChevronRight size={20} color="var(--text-secondary)" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ padding: '0.6rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-sm)' }}>
                 <CreditCard size={20} className="brand-icon" />
               </div>
               <div style={{ fontWeight: 500 }}>Saved Payment Methods</div>
            </div>
            <ChevronRight size={20} color="var(--text-secondary)" />
          </div>

        </div>

      </div>
    </div>
  );
}
