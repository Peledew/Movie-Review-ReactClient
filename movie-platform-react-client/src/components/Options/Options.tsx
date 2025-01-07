import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Options.module.css';
import { decodeToken } from '../../services/authService';

const Options: React.FC = () => {
  const navigate = useNavigate();
  const loggedUser = decodeToken();
  const userRole = loggedUser?.role;

  const menuOptions = [
    { path: '/', label: 'Home', roles: ['Admin', 'User'] },
    { path: '/about', label: 'About', roles: ['Admin', 'User'] },
    { path: '/register', label: 'Register', roles: ['Admin', 'User'] },
    { path: '/allMovies', label: 'Movies list', roles: ['Admin', 'User'] },
    { path: '/sassPractice', label: 'Sass practice', roles: ['Admin', 'User'] },
  ];

  // Filter options based on the role
  const filteredOptions = menuOptions.filter((option) => option.roles.includes(userRole || ''));

  return (
    <div className={styles['vertical-navbar']}>
      <ul>
        {filteredOptions.map((option) => (
          <li key={option.path} onClick={() => navigate(option.path)}>
            <a>{option.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
