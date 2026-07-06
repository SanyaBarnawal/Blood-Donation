import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, LogOut, Heart, FileText, Droplet } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Profile</h1>
        <Settings size={24} color="var(--color-text-primary)" cursor="pointer" />
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ width: '96px', height: '96px', borderRadius: '50%', background: 'var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Y
        </div>
        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Yoon-joon</h2>
        <span style={{ color: 'var(--color-primary)', background: 'var(--color-primary-light)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 600, marginTop: '0.5rem' }}>O+ Blood</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
           <span style={{ fontSize: '0.875rem' }}>Available to donate</span>
           <input type="checkbox" defaultChecked style={{ transform: 'scale(1.2)' }} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <Heart size={24} color="var(--color-primary)" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ margin: 0, fontSize: '1.5rem' }}>5</h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Total Donations</span>
        </div>
        <div style={{ flex: 1, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <Droplet size={24} color="var(--color-secondary)" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ margin: 0, fontSize: '1.5rem' }}>5</h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Lives Saved</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--color-border)', cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <FileText size={20} color="var(--color-text-secondary)" />
            <span style={{ fontWeight: 500 }}>Donation History</span>
          </div>
          <span style={{ color: 'var(--color-text-secondary)' }}>&gt;</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--color-border)', cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Droplet size={20} color="var(--color-text-secondary)" />
            <span style={{ fontWeight: 500 }}>Request History</span>
          </div>
          <span style={{ color: 'var(--color-text-secondary)' }}>&gt;</span>
        </div>
        <div onClick={() => navigate('/login')} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 0', cursor: 'pointer', color: 'var(--color-error)' }}>
          <LogOut size={20} />
          <span style={{ fontWeight: 500 }}>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
