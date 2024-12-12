import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Options.module.css';

const Options: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['vertical-navbar']}>
      <ul>
        <li onClick={() => navigate('/')}>
          <a>Home</a>
        </li>
        <li onClick={() => navigate('/about')}>
          <a>About</a>
        </li>
        <li onClick={() => navigate('/register')}>
          <a>Register</a>
        </li>
        <li onClick={() => navigate('/login')}>
          <a>Log in</a>
        </li>
      </ul>
    </div>
  );
};

export default Options;
