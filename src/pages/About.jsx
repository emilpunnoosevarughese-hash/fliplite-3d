import { Terminal, Code, Cpu, Database, Server, UserCheck } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [isContacting, setIsContacting] = useState(false);
  const [puzzleAnswer, setPuzzleAnswer] = useState('');
  const [puzzleError, setPuzzleError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  
  // Setup the bot-defense math puzzle
  const [puzzleVal1] = useState(Math.floor(Math.random() * 10) + 1);
  const [puzzleVal2] = useState(Math.floor(Math.random() * 10) + 1);

  return (
    <div className="container" style={{ padding: '3rem 0', minHeight: 'calc(100vh - var(--nav-height))' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)' }}>Development Profile</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '0.5rem' }}>Architecture & Engineering</p>
        </div>

        {/* Premium Terminal/Code Card */}
        <div className="glass-panel" style={{ padding: '0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-dark)', boxShadow: 'var(--shadow-glass)' }}>
          
          {/* Terminal Mock Header */}
          <div style={{ background: '#0f172a', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #1e293b' }}>
             <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
             <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
             <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
             <div style={{ marginLeft: '1rem', color: '#94a3b8', fontSize: '0.9rem', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Terminal size={14} /> about_developer.sh
             </div>
          </div>
          
          {/* Engineering Body */}
          <div style={{ background: '#1e293b', padding: '3rem', color: '#e2e8f0', fontFamily: 'monospace', lineHeight: 1.8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
                <Terminal size={36} color="#10b981" />
              </div>
              <div>
                <h2 style={{ fontSize: '2rem', color: '#10b981', margin: 0, fontWeight: 700 }}>Emil Punnoose Varughese</h2>
                <div style={{ color: '#94a3b8', fontSize: '1.2rem' }}>Lead Computer Engineer</div>
              </div>
            </div>
            
            {/* JSON Code Representation */}
            <div style={{ fontSize: '1.15rem', marginBottom: '1.5rem' }}>
              <span style={{ color: '#f472b6' }}>const</span> <span style={{ color: '#38bdf8' }}>developerProfile</span> = {'{'}
            </div>
            
            <div style={{ paddingLeft: '2rem', marginBottom: '1.5rem', fontSize: '1.1rem', letterSpacing: '0.5px' }}>
              <div style={{ marginBottom: '0.8rem' }}>
                <span style={{ color: '#a78bfa' }}>fullName:</span> <span style={{ color: '#a3e635' }}>"Emil Punnoose Varughese"</span>,
              </div>
              <div style={{ marginBottom: '0.8rem' }}>
                <span style={{ color: '#a78bfa' }}>profession:</span> <span style={{ color: '#a3e635' }}>"Computer Engineer / Interface Architect"</span>,
              </div>
              <div style={{ marginBottom: '0.8rem' }}>
                <span style={{ color: '#a78bfa' }}>coreStack:</span> [
                <span style={{ color: '#a3e635' }}>"React"</span>, 
                <span style={{ color: '#a3e635' }}>"Three.js Fiber"</span>, 
                <span style={{ color: '#a3e635' }}>"Firebase Auth"</span>,
                <span style={{ color: '#a3e635' }}>"Restful APIs"</span>],
              </div>
              <div style={{ marginBottom: '0.8rem' }}>
                <span style={{ color: '#a78bfa' }}>systemStatus:</span> <span style={{ color: '#a3e635' }}>"Building robust, highly polished digital experiences."</span>
              </div>
            </div>
            
            <div style={{ fontSize: '1.2rem', marginBottom: '3.5rem' }}>
              {'}'};
            </div>

            {/* Architecture Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', borderTop: '1px dashed #334155', paddingTop: '2.5rem' }}>
               <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                 <Code color="#38bdf8" size={24} style={{ marginTop: '0.2rem' }} />
                 <div>
                   <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#f8fafc' }}>Clean Architecture</div>
                   <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.3rem' }}>Scalable component-driven logic.</div>
                 </div>
               </div>
               <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                 <Cpu color="#a78bfa" size={24} style={{ marginTop: '0.2rem' }} />
                 <div>
                   <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#f8fafc' }}>Optimized Rendering</div>
                   <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.3rem' }}>WebGL 3D engine physics integration.</div>
                 </div>
               </div>
               <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                 <Database color="#f472b6" size={24} style={{ marginTop: '0.2rem' }} />
                 <div>
                   <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#f8fafc' }}>Backend Security</div>
                   <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.3rem' }}>Cloud-based user authentication.</div>
                 </div>
               </div>
               <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                 <Server color="#a3e635" size={24} style={{ marginTop: '0.2rem' }} />
                 <div>
                   <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#f8fafc' }}>Live API Streams</div>
                   <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.3rem' }}>Asynchronous internet fetch tunnels.</div>
                 </div>
               </div>
            </div>

            {/* Contact Execution Block */}
            <div style={{ marginTop: '3.5rem', background: '#0f172a', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', color: '#38bdf8' }}>
                 <Terminal size={20} />
                 <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>initiate_contact()</span>
               </div>
               
               <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '1rem' }}>
                 Interested in collaborating on a massive system upgrade? Ping the developer channel below:
               </p>

               <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%' }}>
                      <UserCheck size={20} color="#38bdf8" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Primary Matrix (Email)</div>
                      <div style={{ color: '#e2e8f0', fontWeight: 'bold' }}>emil.pk@example.com</div>
                    </div>
                 </div>

                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
                      <Server size={20} color="#10b981" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Direct Ping (Phone)</div>
                      <div style={{ color: '#e2e8f0', fontWeight: 'bold' }}>+91 98765 43210</div>
                    </div>
                 </div>
               </div>

               <button onClick={() => setIsContacting(true)} className="btn-primary" style={{ marginTop: '2rem', background: '#3b82f6', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Terminal size={18} /> Execute Message Protocol
               </button>
            </div>
          </div>
        </div>

      </div>

      {/* SECURE MESSAGE PROTOCOL MODAL */}
      {isContacting && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
           <div style={{ background: '#0f172a', padding: '2.5rem', borderRadius: '12px', border: '1px solid #3b82f6', width: '100%', maxWidth: '550px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
              {messageSent ? (
                 <div style={{ textAlign: 'center', color: '#10b981' }}>
                   <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '50%', display: 'inline-block', marginBottom: '1.5rem' }}>
                     <Terminal size={48} />
                   </div>
                   <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Transmission Successful</h3>
                   <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>The developer has received your datalink ping. All payloads encrypted.</p>
                   <button onClick={() => { setIsContacting(false); setMessageSent(false); setPuzzleAnswer(''); }} style={{ marginTop: '2.5rem', padding: '0.8rem 2rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1.1rem', cursor: 'pointer', fontFamily: 'monospace' }}>Close Firewall Session</button>
                 </div>
              ) : (
                 <form onSubmit={(e) => {
                    e.preventDefault();
                    if (parseInt(puzzleAnswer) === puzzleVal1 * puzzleVal2) {
                       setMessageSent(true);
                       setPuzzleError(false);
                    } else {
                       setPuzzleError(true);
                    }
                 }}>
                   <h3 style={{ color: '#f8fafc', marginBottom: '1.5rem', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 'bold' }}>
                     <Terminal size={24} color="#3b82f6" /> Secure Message Protocol
                   </h3>
                   <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Opening direct encrypted channel to the central engineering matrix.</p>
                   
                   <input type="email" required placeholder="Origin-Email@domain.com" style={{ width: '100%', padding: '1rem', marginBottom: '1.2rem', background: '#1e293b', border: '1px solid #334155', borderRadius: '6px', color: 'white', fontFamily: 'monospace', fontSize: '1rem' }} />
                   
                   <textarea required placeholder="Encrypt payload here..." rows="4" style={{ width: '100%', padding: '1rem', marginBottom: '1.5rem', background: '#1e293b', border: '1px solid #334155', borderRadius: '6px', color: 'white', fontFamily: 'monospace', resize: 'none', fontSize: '1rem' }}></textarea>
                   
                   {/* Security Puzzle (Bot Defense) */}
                   <div style={{ background: 'rgba(239, 68, 68, 0.05)', borderLeft: '4px solid #ef4444', padding: '1.2rem', marginBottom: '2.5rem', borderRadius: '0 6px 6px 0' }}>
                      <div style={{ color: '#fca5a5', fontSize: '0.85rem', marginBottom: '0.8rem', letterSpacing: '1px', fontWeight: 'bold' }}>BOT-DEFENSE PUZZLE REQUIRED:</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                         <span style={{ color: 'white', fontFamily: 'monospace', fontSize: '1.2rem' }}>Validate `{puzzleVal1} * {puzzleVal2}` = </span>
                         <input type="number" required value={puzzleAnswer} onChange={e => setPuzzleAnswer(e.target.value)} style={{ width: '90px', padding: '0.6rem', background: '#1e293b', border: puzzleError ? '2px solid #ef4444' : '1px solid #334155', color: 'white', fontFamily: 'monospace', fontSize: '1.2rem', borderRadius: '4px' }} />
                      </div>
                      {puzzleError && <div style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '0.8rem', fontWeight: 'bold' }}>Validation failed. Hacker detected. Override denied.</div>}
                   </div>

                   <div style={{ display: 'flex', gap: '1rem' }}>
                      <button type="submit" style={{ flex: 1, padding: '1rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontFamily: 'monospace', fontSize: '1.1rem', fontWeight: 'bold', transition: 'background 0.2s' }}>[ EXECUTE_PING ]</button>
                      <button type="button" onClick={() => setIsContacting(false)} style={{ padding: '1rem', background: 'transparent', color: '#94a3b8', border: '1px solid #334155', borderRadius: '6px', cursor: 'pointer', fontFamily: 'monospace', fontSize: '1.1rem', fontWeight: 'bold', transition: 'background 0.2s' }}>[ CANCEL ]</button>
                   </div>
                 </form>
              )}
           </div>
        </div>
      )}

    </div>
  );
}
