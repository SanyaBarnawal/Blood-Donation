import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ChevronLeft, Camera } from 'lucide-react';

const ProfileSetupPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container flex-col" style={{ minHeight: '100vh', display: 'flex' }}>
      <div style={{ padding: '1rem 0' }}>
        <Button variant="text" onClick={() => navigate(-1)} style={{ padding: 0 }}>
          <ChevronLeft size={24} color="var(--color-text-primary)" />
        </Button>
      </div>

      <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <Camera size={32} color="var(--color-text-secondary)" />
            <div style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--color-primary)', borderRadius: '50%', padding: '4px' }}>
               <Camera size={12} color="white" />
            </div>
          </div>
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Upload Photo</span>
        </div>

        <Input label="Full Name" placeholder="Yoon-joon" />
        <Input label="Date of Birth" type="date" />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <label className="input-label">Gender</label>
          <select className="input-field">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <Input label="Address" placeholder="Chembur, Mumbai" />
        <Input label="Pincode" placeholder="400071" />

        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
           <Button fullWidth onClick={() => navigate('/home')}>Complete Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetupPage;
