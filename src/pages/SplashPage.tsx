import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplet } from 'lucide-react';
import './SplashPage.css';

const SplashPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to login after 2 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="logo-container animate-pulse-heart">
        <div className="heart-shape">
          <Droplet className="droplet-icon" size={48} color="white" />
        </div>
      </div>
      <h1 className="splash-title">BLOOD DONATION APP</h1>
      <p className="splash-subtitle">Save a Life Today</p>
    </div>
  );
};

export default SplashPage;
