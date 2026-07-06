import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Heart, Droplet, MessageCircle, User } from 'lucide-react';
import './BottomNavigation.css';

export const BottomNavigation: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/home" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Home size={24} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/donate" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Heart size={24} />
        <span>Donate</span>
      </NavLink>
      <NavLink to="/request" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Droplet size={24} />
        <span>Request</span>
      </NavLink>
      <NavLink to="/chats" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <MessageCircle size={24} />
        <span>Chats</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <User size={24} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};
