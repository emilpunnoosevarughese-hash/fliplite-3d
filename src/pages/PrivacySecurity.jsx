import { Shield, Fingerprint, Lock, EyeOff, Server, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function PrivacySecurity() {
  const { currentUser } = useAuth();
  const [twoFactor, setTwoFactor] = useState(false);
  const [dataSharing, setDataSharing] = useState(true);

  return (
    <div className="container" style={{ padding: '2rem 0', maxWidth: '800px' }}>
      <h2 className="section-title">Privacy & Security</h2>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        
        {/* Security Shield Card */}
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(145deg, var(--surface-solid), var(--surface-color))', borderLeft: '4px solid #10b981' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
             <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
               <Shield size={36} color="#10b981" />
             </div>
             <div>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Your Account is Secure</h3>
               <p style={{ color: 'var(--text-secondary)' }}>Protected by Google Firebase Authentication infrastructure.</p>
             </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-dark)' }}>Login Settings</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--border-dark)', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ padding: '0.6rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-sm)' }}>
                 <Lock size={20} className="brand-icon" />
               </div>
               <div>
                 <div style={{ fontWeight: 500 }}>Password Management</div>
                 <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Last changed 3 months ago</div>
               </div>
            </div>
            <button className="btn-secondary" style={{ padding: '0.5rem 1rem' }}>Change</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ padding: '0.6rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-sm)' }}>
                 <Fingerprint size={20} className="brand-icon" />
               </div>
               <div>
                 <div style={{ fontWeight: 500 }}>Two-Factor Authentication</div>
                 <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Add an extra layer of biometric security</div>
               </div>
            </div>
            
            <label className="theme-switch" style={{ cursor: 'pointer' }}>
               <div onClick={() => setTwoFactor(!twoFactor)} style={{ width: '50px', height: '26px', background: twoFactor ? 'var(--brand-primary)' : 'var(--text-secondary)', borderRadius: '20px', position: 'relative', transition: 'all 0.3s' }}>
                  <div style={{ width: '22px', height: '22px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: twoFactor ? '26px' : '2px', transition: 'all 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}></div>
               </div>
            </label>
          </div>
        </div>

        {/* Data Privacy */}
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-dark)' }}>Data Privacy Control</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--border-dark)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ padding: '0.6rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-sm)' }}>
                 <EyeOff size={20} className="brand-icon" />
               </div>
               <div>
                 <div style={{ fontWeight: 500 }}>Usage Data Sharing</div>
                 <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Help us improve by sharing completely anonymous analytical data.</div>
               </div>
            </div>
            <label className="theme-switch" style={{ cursor: 'pointer' }}>
               <div onClick={() => setDataSharing(!dataSharing)} style={{ width: '50px', height: '26px', background: dataSharing ? 'var(--brand-primary)' : 'var(--text-secondary)', borderRadius: '20px', position: 'relative', transition: 'all 0.3s' }}>
                  <div style={{ width: '22px', height: '22px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: dataSharing ? '26px' : '2px', transition: 'all 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}></div>
               </div>
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ padding: '0.6rem', background: 'var(--surface-solid)', borderRadius: 'var(--radius-sm)' }}>
                 <Server size={20} className="brand-icon" />
               </div>
               <div>
                 <div style={{ fontWeight: 500 }}>Download My Data Vault</div>
                 <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Receive a full ZIP copy of all information saved on your account.</div>
               </div>
            </div>
             <ChevronRight size={20} color="var(--text-secondary)" />
          </div>
        </div>

        {/* Legal Text */}
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', padding: '1rem' }}>
           <p><strong>Privacy Promise:</strong> We enforce strict encryption policies on all outgoing queries prioritizing maximum cloud security standards. Your credentials, stored locally or within Firebase authentication hubs, undergo heavy cipher scrubbing protocols preventing external vulnerability breaches.</p>
        </div>

      </div>
    </div>
  );
}
