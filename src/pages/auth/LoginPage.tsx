import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Heart } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone === '0000000000') {
      navigate('/admin');
    } else if (phone.length >= 10) {
      navigate('/otp');
    }
  };

  return (
    <div className="container flex-col justify-between" style={{ minHeight: '100vh', display: 'flex' }}>
      <div className="auth-header animate-fade-in" style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div style={{ background: 'var(--color-primary)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
            <Heart size={32} />
          </div>
        </div>
        <h1 className="text-center" style={{ color: 'var(--color-primary)' }}>Welcome!</h1>
        <p className="text-center">Enter your mobile number</p>
      </div>
      
      <form onSubmit={handleSendOtp} className="auth-form animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}>
        <div>
          <Input 
            type="tel"
            placeholder="+91 - 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', display: 'block', textAlign: 'center' }}>
            Tip: Use <strong>0000000000</strong> to login as Admin.
          </span>
        </div>
        
        <Button type="submit" fullWidth>Send OTP</Button>
      </form>
    </div>
  );
};

export default LoginPage;
