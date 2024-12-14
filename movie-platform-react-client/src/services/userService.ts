import { customFetch } from './fetchService'; // Assuming customFetch is defined in fetchService.ts

export const baseUrl = 'https://localhost:7001/api/Users';

export const getAll = async () => {
  try {
    const response = await customFetch(`${baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }
  } catch (error) {
    console.error('Error during fetching all users: ', error);
    throw error;
  }
};
