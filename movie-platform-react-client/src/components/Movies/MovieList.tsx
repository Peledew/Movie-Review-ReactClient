import { MovieListData } from '../../types/movieTypes';
import MovieCard from './MovieCard/MovieCard'; // Import your MovieCard component

const MovieList: React.FC<MovieListData> = ({ currentMovies }) => {
  return (
    <div className="row">
      {currentMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} /> // Use 'key' for optimal rendering
      ))}
    </div>
  );
};

export default MovieList;
