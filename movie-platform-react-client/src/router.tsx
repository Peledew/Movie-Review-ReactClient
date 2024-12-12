import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import LogIn from './pages/LogIn';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* This is the parent route */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LogIn />} />
      </Route>

      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
