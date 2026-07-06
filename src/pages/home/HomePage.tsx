import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplet, Search } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Hello, Yoon-joon 👋</p>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', margin: 0 }}>Ready to save a life today?</h2>
        </div>
        <div style={{ background: 'var(--color-primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
          <Droplet size={28} color="var(--color-primary)" />
        </div>
      </header>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div 
          onClick={() => navigate('/donate')}
          style={{ flex: 1, background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', borderRadius: 'var(--radius-lg)', padding: '1.5rem', color: 'white', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer', boxShadow: 'var(--shadow-md)' }}>
          <Search size={32} />
          <div>
            <h3 style={{ color: 'white', margin: 0, fontSize: '1.1rem' }}>Donate Blood</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', margin: 0 }}>Find people in need</p>
          </div>
        </div>

        <div 
          onClick={() => navigate('/request')}
          style={{ flex: 1, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}>
          <Droplet size={32} color="var(--color-primary)" />
          <div>
            <h3 style={{ color: 'var(--color-text-primary)', margin: 0, fontSize: '1.1rem' }}>Request Blood</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>Create a blood request</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Urgent Requests Nearby</h3>
        <span style={{ color: 'var(--color-primary)', fontSize: '0.875rem', cursor: 'pointer', fontWeight: 600 }}>See all</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Mock Urgent Request Card */}
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--color-primary-light)', color: 'var(--color-primary)', borderRadius: 'var(--radius-sm)', width: '60px', height: '60px', fontWeight: 'bold', fontSize: '1.25rem' }}>
            O+
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ margin: 0, fontSize: '1rem' }}>Apollo Hospital</h4>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-error)', background: '#FEE2E2', padding: '4px 8px', borderRadius: '12px', fontWeight: '600' }}>Urgent</span>
            </div>
            <p style={{ margin: '0.25rem 0', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>2.4 km away</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
              <span>Needed by: Today</span>
              <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>1/3 Units Collected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
