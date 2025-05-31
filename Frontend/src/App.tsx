import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ScreenSharePage } from './pages/ScreenSharePage';
import { FC } from 'react';
import './App.css';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/screenshare" element={<ScreenSharePage />} />
      </Routes>
    </Router>
  );
};

export default App;
