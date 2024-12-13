import React from 'react';
import { getAll } from '../services/userService';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => getAll()}>Klikni me</button>
    </div>
  );
};

export default Home;
