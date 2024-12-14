import React from 'react';
import { getAll, logOut } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try{
      await logOut();
      navigate('login');
    }
    catch(error){
      console.error('Error during logout: ', error);
    }
  };



  return (
    <div>
      <div>
        <h1>Home page</h1>
        <button onClick={() => getAll()}>Klikni me</button>
      </div>

      <div>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>


    </div>
  );
};

export default Home;
