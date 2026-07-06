import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../../components/Button';

const mockRequests = [
  { id: 1, hospital: 'Apollo Hospital', distance: '2.4 km', blood: 'O+', units: '1/3', urgent: true },
  { id: 2, hospital: 'City Hospital', distance: '3.1 km', blood: 'A-', units: '0/2', urgent: false },
  { id: 3, hospital: 'Sunrise Hospital', distance: '4.5 km', blood: 'B+', units: '2/4', urgent: false },
];

const DonatePage: React.FC = () => {
  const navigate = useNavigate();
  const [radius, setRadius] = useState(3);
  const [bloodGroup, setBloodGroup] = useState('All');

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <Button variant="text" onClick={() => navigate(-1)} style={{ padding: 0 }}>
          <ChevronLeft size={24} color="var(--color-text-primary)" />
        </Button>
        <h1 style={{ fontSize: '1.25rem', margin: 0 }}>Find Blood Requests</h1>
      </header>

      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Search Radius</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input type="radio" name="radius" checked={radius === 3} onChange={() => setRadius(3)} /> 3 km
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input type="radio" name="radius" checked={radius === 5} onChange={() => setRadius(5)} /> 5 km
          </label>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Filters</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <select className="input-field" value={bloodGroup} onChange={e => setBloodGroup(e.target.value)} style={{ flex: 1 }}>
            <option>All Blood Groups</option>
            <option>O+</option>
            <option>A-</option>
            <option>B+</option>
          </select>
          <select className="input-field" style={{ flex: 1 }}>
            <option>Donation Type</option>
            <option>Whole Blood</option>
            <option>Plasma</option>
          </select>
        </div>
        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
           <span>Urgent Requests Only</span>
           <input type="checkbox" style={{ transform: 'scale(1.2)' }} />
        </div>
      </div>

      <Button fullWidth style={{ marginBottom: '2rem' }}>Search Requests</Button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Request List</h3>
        {mockRequests.map(req => (
          <div key={req.id} onClick={() => navigate(`/donate/${req.id}`)} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '1rem', alignItems: 'center', cursor: 'pointer', transition: 'all var(--transition-fast)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: req.urgent ? '#FEE2E2' : 'var(--color-primary-light)', color: req.urgent ? 'var(--color-error)' : 'var(--color-primary)', borderRadius: 'var(--radius-sm)', width: '60px', height: '60px', fontWeight: 'bold', fontSize: '1.25rem' }}>
              {req.blood}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>{req.hospital}</h4>
                {req.urgent && <span style={{ fontSize: '0.75rem', color: 'var(--color-error)', background: '#FEE2E2', padding: '4px 8px', borderRadius: '12px', fontWeight: '600' }}>Urgent</span>}
              </div>
              <p style={{ margin: '0.25rem 0', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{req.distance} away</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                <span>Needed by: {req.urgent ? 'Today' : '2 Days'}</span>
                <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>{req.units} Units</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonatePage;
