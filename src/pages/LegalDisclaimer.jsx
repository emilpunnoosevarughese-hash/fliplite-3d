import { AlertTriangle, BookOpen, Scale } from 'lucide-react';

export default function LegalDisclaimer() {
  return (
    <div className="container" style={{ padding: '3rem 0', maxWidth: '800px', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
         <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Legal & Copyright</h1>
         <p style={{ color: 'var(--text-secondary)' }}>Terms of Service and Fair Use Disclaimer</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
         
         <div className="glass-panel" style={{ padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b', background: 'linear-gradient(to right, rgba(245, 158, 11, 0.05), transparent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: '#f59e0b' }}>
               <AlertTriangle size={24} />
               <h2 style={{ fontSize: '1.4rem', margin: 0 }}>Demonstration Disclaimer</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
               This application ("FlipLite") is constructed strictly as an engineering portfolio and local demonstration project. <strong> It is not a real commercial entity. </strong> No real financial transactions are executed, and no physical goods will ever be fulfilled or shipped. Any payment gateways implemented are strictly sandbox simulations for educational layout mapping.
            </p>
         </div>

         <div className="glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--brand-primary)' }}>
               <BookOpen size={24} />
               <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-primary)' }}>Copyright & Trademark Fair Use</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
               All product names, logos, product images, and brands fetched dynamically through the DummyJSON and FakeStore open APIs are the exclusive property of their respective trademark holders. 
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
               The utilization of these materials falls safely under the <strong>Doctrine of Fair Use</strong> (17 U.S.C. § 107) as they are integrated purely for non-profit, educational, and transformational purposes (verifying responsive web design grids and API mapping integrations).
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
               FlipLite does not claim ownership, affiliation, or endorsement by any of the hardware or fashion companies represented in our mock database. If you represent a rights holder and wish for a specific placeholder image to be excluded from API fetching routes, please execute the Message Protocol on the Developer page.
            </p>
         </div>

         <div className="glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
               <Scale size={24} />
               <h2 style={{ fontSize: '1.4rem', margin: 0 }}>Open Source Architecture Licensing</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
               The structural codebase, advanced 3D algorithmic rendering routines, and custom React components developed specifically for this application are officially licensed under the MIT License and attributed primarily to Emil Punnoose Varughese. Open-source routing libraries (Vite, React, Tailwind, Lucide, Three.js) strictly retain their respective underlying licenses.
            </p>
         </div>

      </div>
    </div>
  );
}
