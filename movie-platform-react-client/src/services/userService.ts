import { UserRegisterData } from '../types/userTypes';

export const baseUrl = 'https://localhost:7001/api/Users/';

export const registerUser = async (userData: UserRegisterData) => {
  try {
    const response = await fetch(`${baseUrl}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
