import { Link } from 'react-router-dom';
import { Shield, Copyright } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ background: '#0f172a', padding: '3rem 0 1rem 0', color: '#94a3b8', borderTop: '1px solid #1e293b', marginTop: 'auto' }}>
       <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
             <div style={{ maxWidth: '400px' }}>
                <h3 style={{ color: '#f8fafc', fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Shield size={20} color="#3b82f6" /> FlipLite Security
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>FlipLite is a demonstration e-commerce architecture. All transactions, products, and brands represented are mock properties intended solely for engineering portfolio mapping purposes.</p>
             </div>
             
             <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
               <div>
                  <h4 style={{ color: '#f8fafc', marginBottom: '1rem', fontWeight: 600 }}>Company Operations</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                     <li><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>Developer Matrix</Link></li>
                     <li><Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>Profile Settings</Link></li>
                  </ul>
               </div>
               <div>
                  <h4 style={{ color: '#f8fafc', marginBottom: '1rem', fontWeight: 600 }}>Security & Legal</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                     <li><Link to="/privacy" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</Link></li>
                     <li><Link to="/legal" style={{ textDecoration: 'none', color: 'inherit' }}>Terms & Copyright</Link></li>
                  </ul>
               </div>
             </div>
          </div>

          <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Copyright size={14} /> {currentYear} FlipLite Systems. All rights strictly reserved.
             </div>
             <div>
                Handcrafted securely by <strong>Emil Punnoose Varughese</strong>
             </div>
          </div>
       </div>
    </footer>
  );
}
