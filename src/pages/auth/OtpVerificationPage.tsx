import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ChevronLeft } from 'lucide-react';

const OtpVerificationPage: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(25);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;
    
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling && element.value) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleVerify = () => {
    if (otp.join('').length === 6) {
      navigate('/profile-setup');
    }
  };

  return (
    <div className="container flex-col" style={{ minHeight: '100vh', display: 'flex' }}>
      <div style={{ padding: '1rem 0' }}>
        <Button variant="text" onClick={() => navigate(-1)} style={{ padding: 0 }}>
          <ChevronLeft size={24} color="var(--color-text-primary)" />
        </Button>
      </div>

      <div className="auth-header animate-fade-in" style={{ marginTop: '2rem' }}>
        <h1 className="text-center">Verify OTP</h1>
        <p className="text-center">Enter the 6 digit code sent to<br/>+91 98765 43210</p>
      </div>

      <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
          {otp.map((data, index) => {
            return (
              <input
                className="input-field"
                style={{ width: '40px', height: '50px', textAlign: 'center', padding: '0', fontSize: '1.25rem' }}
                type="text"
                name="otp"
                maxLength={1}
                key={index}
                value={data}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()}
              />
            );
          })}
        </div>
        
        <div className="text-center">
          <p style={{ color: 'var(--color-primary)' }}>
            Resend OTP in 00:{timeLeft.toString().padStart(2, '0')}
          </p>
          {timeLeft === 0 && (
            <Button variant="text" onClick={() => setTimeLeft(25)}>
              Didn't receive OTP? Resend
            </Button>
          )}
        </div>

        <Button fullWidth onClick={handleVerify} disabled={otp.join('').length !== 6}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default OtpVerificationPage;
