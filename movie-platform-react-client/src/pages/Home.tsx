import React from 'react';
import { decodeToken, logOut } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../services/userService';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const loggedUser = decodeToken();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('login');
    } catch (error) {
      console.error('Error during logout: ', error);
    }
  };

  return (
    <div>
      <div>
        <h1>Home page</h1>
        {loggedUser ? <h2>Hello, {loggedUser.unique_name}!</h2> : <h2>Welcome, Guest!</h2>}
        <button className='btn' onClick={() => getAll()}>Klikni me</button>
      </div>

      <div>
        <button className='btn' onClick={() => handleLogout()}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
