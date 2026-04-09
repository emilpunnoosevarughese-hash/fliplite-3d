import React from 'react';
import { ShieldAlert } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Secure Environment Error Boundary Caught Injection or Crash:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: '#f8fafc', textAlign: 'center', padding: '2rem' }}>
          <ShieldAlert size={64} color="#ef4444" style={{ marginBottom: '1.5rem' }} />
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>Secure Session Terminated</h1>
          <p style={{ maxWidth: '450px', color: '#94a3b8', lineHeight: '1.6' }}>A critical system irregularity or potentially unauthorized script logic was detected. To prevent data leakage, this active session has been securely halted. Please refresh the page to establish a clean instance.</p>
          <button onClick={() => window.location.reload()} style={{ marginTop: '2.5rem', padding: '1rem 2rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: '600', transition: 'background 0.2s' }}>Re-establish Connection</button>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
