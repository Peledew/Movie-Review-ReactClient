import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send registration request to backend
    const registrationData = {
      username,
      firstName,
      lastName,
      email,
      password,
    };

    try {
      // Call the userService to register the user
      const result = await registerUser(registrationData);
      console.log('User registered successfully:', result);

      // Optionally, you can navigate to another page after successful registration
      navigate('/login'); // Navigate to the login page
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name</label>
          <input type="text" name="userName" value={username} onChange={handleInputChange} required />
        </div>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={firstName} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={lastName} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handleInputChange} required />
        </div>
        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <button onClick={() => navigate('/login')}>Log In</button>
      </p>
    </div>
  );
};

export default Register;
