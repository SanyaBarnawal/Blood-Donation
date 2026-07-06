import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, MoreVertical, Send, MapPin } from 'lucide-react';
import { Button } from '../../components/Button';

const ChatRoomPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, I need O+ blood.', sender: 'them', time: '10:30 AM' },
    { id: 2, text: 'Is it possible for you to donate?', sender: 'them', time: '10:30 AM' },
    { id: 3, text: 'Yes, I can donate.', sender: 'me', time: '10:32 AM' },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { id: Date.now(), text: message, sender: 'me', time: 'Now' }]);
      setMessage('');
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--color-background)' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Button variant="text" onClick={() => navigate(-1)} style={{ padding: 0 }}>
            <ChevronLeft size={24} color="var(--color-text-primary)" />
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
             <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
               R
             </div>
             <div>
               <h3 style={{ margin: 0, fontSize: '1rem' }}>Rahul Sharma</h3>
               <span style={{ fontSize: '0.75rem', color: 'var(--color-success)' }}>Online</span>
             </div>
          </div>
        </div>
        <Button variant="text" style={{ padding: 0 }}><MoreVertical size={24} color="var(--color-text-primary)" /></Button>
      </header>

      <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'me' ? 'flex-end' : 'flex-start' }}>
            <div style={{ maxWidth: '75%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', background: msg.sender === 'me' ? 'var(--color-primary)' : 'var(--color-surface)', color: msg.sender === 'me' ? 'white' : 'var(--color-text-primary)', border: msg.sender !== 'me' ? '1px solid var(--color-border)' : 'none', boxShadow: 'var(--shadow-sm)' }}>
              {msg.text}
            </div>
            <span style={{ fontSize: '0.625rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>{msg.time}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} style={{ padding: '1rem', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <button type="button" style={{ background: 'transparent', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
          <MapPin size={24} />
        </button>
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..." 
          style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', outline: 'none' }} 
        />
        <button type="submit" style={{ background: 'var(--color-primary)', border: 'none', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ChatRoomPage;
