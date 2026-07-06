import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Droplet, FileText, Activity, LogOut } from 'lucide-react';
import { Button } from '../../components/Button';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Admin Dashboard</h1>
        <Button variant="text" onClick={() => navigate('/login')} style={{ padding: 0 }}>
          <LogOut size={24} color="var(--color-error)" />
        </Button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <Users size={32} color="var(--color-primary)" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ margin: 0, fontSize: '1.5rem' }}>1,245</h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Total Users</span>
        </div>
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <Droplet size={32} color="var(--color-primary)" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ margin: 0, fontSize: '1.5rem' }}>830</h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Total Requests</span>
        </div>
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <Activity size={32} color="var(--color-success)" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ margin: 0, fontSize: '1.5rem' }}>458</h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Active Donors</span>
        </div>
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <FileText size={32} color="var(--color-error)" style={{ marginBottom: '0.5rem' }} />
          <h3 style={{ margin: 0, fontSize: '1.5rem' }}>32</h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Reported Users</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem', boxShadow: 'var(--shadow-sm)' }}>
        <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', margin: 0 }}>Quick Actions</h3>
        <Button variant="outline" fullWidth>Manage Requests</Button>
        <Button variant="outline" fullWidth>Manage Reports</Button>
        <Button variant="outline" fullWidth>Manage Users</Button>
      </div>
    </div>
  );
};

export default AdminDashboard;
