import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockChats = [
  { id: 1, name: 'Rahul Sharma', time: '2:30 PM', message: 'Is it possible for you to donate?', blood: 'O+', role: 'Requester', unread: 2 },
  { id: 2, name: 'Ankit Sharma', time: 'Yesterday', message: 'Great! Can you come to Apollo Hospital?', blood: 'A-', role: 'Donor', unread: 0 },
];

const ChatListPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Chats</h1>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {mockChats.map(chat => (
          <div key={chat.id} onClick={() => navigate(`/chats/${chat.id}`)} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', cursor: 'pointer' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--color-text-secondary)' }}>
              {chat.name.charAt(0)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>{chat.name}</h4>
                <span style={{ fontSize: '0.75rem', color: chat.unread ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}>{chat.time}</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>{chat.message}</p>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', marginTop: '0.25rem' }}>
                {chat.blood} Blood • {chat.role}
              </div>
            </div>
            {chat.unread > 0 && (
              <div style={{ background: 'var(--color-primary)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>
                {chat.unread}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatListPage;
