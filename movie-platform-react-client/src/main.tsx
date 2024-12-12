import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import AppRouter from './router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </StrictMode>,
);
