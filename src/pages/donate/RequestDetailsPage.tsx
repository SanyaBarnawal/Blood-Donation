import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Share2, AlertCircle } from 'lucide-react';
import { Button } from '../../components/Button';

const RequestDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [donationConfirmed, setDonationConfirmed] = useState(false);

  const handleDonateClick = () => {
    setShowGuidelines(true);
  };

  const confirmDonation = () => {
    setShowGuidelines(false);
    setDonationConfirmed(true);
  };

  if (donationConfirmed) {
    return (
      <div className="container animate-fade-in flex-col items-center justify-center" style={{ minHeight: '100vh', display: 'flex', textAlign: 'center' }}>
        <div style={{ background: '#E8F5E9', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
          <AlertCircle size={64} color="var(--color-success)" />
        </div>
        <h1 style={{ color: 'var(--color-success)', marginBottom: '1rem' }}>Thank You!</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          Your interest has been sent. The requester will be notified and may contact you soon.
        </p>
        <Button onClick={() => navigate('/home')} fullWidth>Go to Home</Button>
      </div>
    );
  }

  if (showGuidelines) {
    return (
      <div className="container animate-fade-in" style={{ paddingBottom: '2rem' }}>
        <header style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Button variant="text" onClick={() => setShowGuidelines(false)} style={{ padding: 0 }}>
            <ChevronLeft size={24} color="var(--color-text-primary)" />
          </Button>
          <h1 style={{ fontSize: '1.25rem', margin: 0 }}>Donor Declaration</h1>
        </header>

        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Please confirm the following:</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <input type="checkbox" defaultChecked style={{ marginTop: '4px' }} />
              <span>I am above 18 years of age.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <input type="checkbox" defaultChecked style={{ marginTop: '4px' }} />
              <span>I weigh more than 50 kg.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <input type="checkbox" defaultChecked style={{ marginTop: '4px' }} />
              <span>I have not donated blood in the last 3 months.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <input type="checkbox" defaultChecked style={{ marginTop: '4px' }} />
              <span>I am not suffering from any infectious diseases.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <input type="checkbox" defaultChecked style={{ marginTop: '4px' }} />
              <span>I voluntarily agree to donate blood.</span>
            </li>
          </ul>
        </div>
        
        <Button fullWidth onClick={confirmDonation}>Confirm</Button>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Button variant="text" onClick={() => navigate(-1)} style={{ padding: 0 }}>
            <ChevronLeft size={24} color="var(--color-text-primary)" />
          </Button>
          <h1 style={{ fontSize: '1.25rem', margin: 0 }}>Request Details</h1>
        </div>
        <Button variant="text" style={{ padding: 0 }}><Share2 size={24} color="var(--color-text-secondary)" /></Button>
      </header>

      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
             <div style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>
                O+
             </div>
             <div>
               <h2 style={{ margin: 0, fontSize: '1.125rem' }}>Blood Required</h2>
               <span style={{ fontSize: '0.875rem', color: 'var(--color-warning)', fontWeight: 600 }}>Pending</span>
             </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Patient Details</span>
            <span style={{ fontWeight: 500 }}>Rahul Sharma (42)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Units Required</span>
            <span style={{ fontWeight: 500 }}>3 Units</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Purpose</span>
            <span style={{ fontWeight: 500 }}>Liver Surgery</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Needed By</span>
            <span style={{ fontWeight: 500 }}>Today</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Attendee</span>
            <span style={{ fontWeight: 500 }}>Ankit Sharma</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>Hospital</span>
            <span style={{ fontWeight: 500, textAlign: 'right' }}>Apollo Hospital<br/><span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Ghatkopar, Mumbai</span></span>
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <Button variant="outline" style={{ flex: 1 }}>Share</Button>
          <Button style={{ flex: 2 }} onClick={handleDonateClick}>I Can Donate</Button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetailsPage;
