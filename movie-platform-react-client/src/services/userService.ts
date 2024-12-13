import { TokenData } from '../types/tokenTypes';
import { UserLoginData, UserRegisterData } from '../types/userTypes';
import { customFetch } from './fetchService'; // Assuming customFetch is defined in fetchService.ts

export const baseUrl = 'https://localhost:7001/api/Users';

export const registerUser = async (userData: UserRegisterData) => {
  try {
    const response = await customFetch(`${baseUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    return response.json(); // Return parsed JSON directly
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const loginUser = async (loginData: UserLoginData) => {
  try {
    const response = await customFetch(`${baseUrl}/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    const { accessToken, refreshToken } = await response.json();
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    return { accessToken, refreshToken };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const refreshAccessToken = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken') || '';  // Default to empty string
    const refreshToken = localStorage.getItem('refreshToken') || '';  // Default to empty string


    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    // Construct the request body to match TokenApiDto structure
    const body: TokenData = {
      accessToken,
      refreshToken,
    };

    const response = await customFetch(`${baseUrl}/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    const { accessToken: newAccessToken } = await response.json();
    localStorage.setItem('accessToken', newAccessToken); // Save new access token

    return newAccessToken;
  } catch (error) {
    console.error('Refresh token error:', error);
    throw error;
  }
};



export const getAll = async () => {
  try{
    const response = await customFetch(`${baseUrl}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

  }
  catch(error){
    console.error('Error during fetching all users: ', error);
    throw error;
  }
};