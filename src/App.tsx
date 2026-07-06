import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/auth/LoginPage';
import OtpVerificationPage from './pages/auth/OtpVerificationPage';
import ProfileSetupPage from './pages/auth/ProfileSetupPage';
import HomePage from './pages/home/HomePage';
import DonatePage from './pages/donate/DonatePage';
import RequestDetailsPage from './pages/donate/RequestDetailsPage';
import RequestBloodPage from './pages/request/RequestBloodPage';
import ChatListPage from './pages/chats/ChatListPage';
import ChatRoomPage from './pages/chats/ChatRoomPage';
import ProfilePage from './pages/profile/ProfilePage';
import AdminDashboard from './pages/admin/AdminDashboard';
import { MainLayout } from './components/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpVerificationPage />} />
        <Route path="/profile-setup" element={<ProfileSetupPage />} />
        
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/donate/:id" element={<RequestDetailsPage />} />
          <Route path="/request" element={<RequestBloodPage />} />
          <Route path="/chats" element={<ChatListPage />} />
          <Route path="/chats/:id" element={<ChatRoomPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
