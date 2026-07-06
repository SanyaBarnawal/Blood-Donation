import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

// Fix for default marker icons in Leaflet when using React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const LocationPicker = ({ position, setPosition }: { position: [number, number] | null, setPosition: any }) => {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return position === null ? null : (
    <Marker position={position}></Marker>
  );
};

const RequestBloodPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [requestCreated, setRequestCreated] = useState(false);
  const [position, setPosition] = useState<[number, number] | null>(null);

  if (requestCreated) {
    return (
      <div className="container animate-fade-in flex-col items-center justify-center" style={{ minHeight: '100vh', display: 'flex', textAlign: 'center' }}>
        <div style={{ background: '#E8F5E9', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
          <CheckCircle2 size={64} color="var(--color-success)" />
        </div>
        <h1 style={{ color: 'var(--color-success)', marginBottom: '1rem' }}>Request Created!</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          Your request has been submitted successfully.<br/>Request ID: REQ123456
        </p>
        <Button onClick={() => navigate('/home')} fullWidth>View My Requests</Button>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <Button variant="text" onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)} style={{ padding: 0 }}>
          <ChevronLeft size={24} color="var(--color-text-primary)" />
        </Button>
        <h1 style={{ fontSize: '1.25rem', margin: 0 }}>
          {step === 1 ? 'Patient Information' : step === 2 ? 'Hospital Details' : 'Review & Submit'}
        </h1>
      </header>

      {/* Progress Indicators */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, height: '4px', background: step >= 1 ? 'var(--color-primary)' : 'var(--color-border)', borderRadius: '4px' }} />
        <div style={{ flex: 1, height: '4px', background: step >= 2 ? 'var(--color-primary)' : 'var(--color-border)', borderRadius: '4px' }} />
        <div style={{ flex: 1, height: '4px', background: step >= 3 ? 'var(--color-primary)' : 'var(--color-border)', borderRadius: '4px' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {step === 1 && (
          <div className="animate-fade-in">
            <Input label="Patient Name" placeholder="Rahul Sharma" />
            <Input label="Age" type="number" placeholder="42" />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <label className="input-label">Blood Group Required</label>
              <select className="input-field">
                <option>O+</option>
                <option>A-</option>
                <option>B+</option>
              </select>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <label className="input-label">Donation Type</label>
              <select className="input-field">
                <option>Whole Blood</option>
                <option>Platelets</option>
                <option>Plasma</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <Input label="Units Required" type="number" placeholder="3" />
              <Input label="Needed By" type="date" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
             <Input label="Hospital Name" placeholder="Apollo Hospital" />
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <label className="input-label">Select Hospital Location</label>
                <div style={{ width: '100%', height: '200px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border)', zIndex: 0 }}>
                   <MapContainer center={[19.0760, 72.8777]} zoom={11} scrollWheelZoom={true} style={{ height: '100%', width: '100%', zIndex: 1 }}>
                     <TileLayer
                       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     />
                     <LocationPicker position={position} setPosition={setPosition} />
                   </MapContainer>
                </div>
                {position && <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)' }}>Location selected!</span>}
             </div>
             <Input label="Attendee Name" placeholder="Ankit Sharma" />
             <Input label="Attendee Phone Number" placeholder="+91 98765 43210" />
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <label className="input-label">Urgency Level</label>
                <select className="input-field">
                  <option>Normal</option>
                  <option>Urgent</option>
                </select>
             </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Patient Name</span>
              <span style={{ fontWeight: 500 }}>Rahul Sharma</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Blood Group</span>
              <span style={{ fontWeight: 500 }}>O+</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Units Required</span>
              <span style={{ fontWeight: 500 }}>3 Units</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Needed By</span>
              <span style={{ fontWeight: 500 }}>15 Jun 2026</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Hospital</span>
              <span style={{ fontWeight: 500 }}>Apollo Hospital</span>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <Button fullWidth onClick={() => step < 3 ? setStep(step + 1) : setRequestCreated(true)}>
          {step === 3 ? 'Submit Request' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default RequestBloodPage;
