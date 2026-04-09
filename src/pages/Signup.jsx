import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to create an account. Password must be 6+ characters.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      navigate('/');
    } catch (err) {
      setError('Failed to sign in with Google.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Create Account</h2>
            <p>Join FlipLite for the best 3D shopping experience</p>
          </div>

          {error && <div className="alert-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                className="form-input" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                className="form-input" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input 
                type="password" 
                className="form-input" 
                required 
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>

            <button disabled={loading} type="submit" className="btn-primary btn-block">
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <button 
            type="button" 
            className="btn-primary btn-block btn-google" 
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            Continue with Google
          </button>

          <div className="auth-footer">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
