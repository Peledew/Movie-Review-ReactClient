import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken'); // Retrieve JWT token from local storage
  return accessToken ? <>{children}</> : <Navigate to="/login" />; // Redirect if no token
};

export default ProtectedRoute;
