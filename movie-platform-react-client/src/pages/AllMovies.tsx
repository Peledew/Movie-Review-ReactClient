import React, { useEffect, useState } from 'react';
import MovieList from '../components/Movies/MovieList'; // Import MovieList component
import { fetchMovies } from '../services/movieService'; // Import your fetchMovies method
import { MovieData } from '../types/movieTypes';

const AllMovies: React.FC = () => {
  // Define state to store movies
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // Optional: for loading state
  const [error, setError] = useState<string | null>(null); // Optional: for error handling

  // Fetch movies when the component mounts
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const movieData = await fetchMovies(); // Assuming this returns an array of movies
        setMovies(movieData); // Set the fetched movies to state
      } catch (err) {
        setError('Failed to fetch movies'); // Handle errors
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    getMovies();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) return <div>Loading...</div>; // Optional: Display loading state
  if (error) return <div>{error}</div>; // Optional: Display error state

  return (
    <div className="all-movies">
      <h1>All Movies</h1>
      {/* Pass the fetched movies to MovieList */}
      <MovieList currentMovies={movies} />
    </div>
  );
};

export default AllMovies;
