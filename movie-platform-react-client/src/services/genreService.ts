import { GenreData } from '../types/genreTypes';
import { customFetch } from './fetchService';

const baseUrl = 'https://localhost:7001/api/Genres';

// Fetch all genres
export const fetchGenres = async (): Promise<GenreData[]> => {
  try {
    const response = await customFetch(`${baseUrl}`);
    if (!response.ok) {
      throw new Error('Failed to fetch genres');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};
