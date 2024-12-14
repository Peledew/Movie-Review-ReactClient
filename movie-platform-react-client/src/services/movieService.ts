import { MovieData } from '../types/movieTypes'; // Adjust path to your types
import { customFetch } from './fetchService';

const baseUrl = 'https://localhost:7001/api/Movies'; // Adjust endpoint if necessary

// Fetch all movies
export const fetchMovies = async (): Promise<MovieData[]> => {
  try {
    const response = await customFetch(`${baseUrl}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Fetch a movie by ID
export const fetchMovieById = async (id: number): Promise<MovieData> => {
  try {
    const response = await customFetch(`${baseUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch movie with ID ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching movie with ID ${id}:`, error);
    throw error;
  }
};

// Update a movie
export const updateMovie = async (id: number, movieData: Partial<MovieData>): Promise<MovieData> => {
  try {
    const response = await customFetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieData),
    });
    if (!response.ok) {
      throw new Error(`Failed to update movie with ID ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating movie with ID ${id}:`, error);
    throw error;
  }
};

// Get average rating for a movie
export const getAvgMovieRatingBy = async (id: number): Promise<number> => {
  try {
    const response = await customFetch(`${baseUrl}/avgrating/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch rating for movie with ID ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching rating for movie with ID ${id}:`, error);
    throw error;
  }
};
