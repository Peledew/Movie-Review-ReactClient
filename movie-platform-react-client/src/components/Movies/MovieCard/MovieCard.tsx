import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAvgMovieRatingBy } from '../../../services/movieService';
import { MovieData } from '../../../types/movieTypes';
import { decodeToken } from '../../../services/authService';
import './MovieCard.module.css';

interface MovieCardProps {
  movie: MovieData;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [avgRating, setAvgRating] = useState<number>(0);
  const [role, setRole] = useState<string>('');
  const navigate = useNavigate();
  const loggedUser = decodeToken();

  // Fetch average movie rating and user role
  useEffect(() => {
    const fetchAvgRating = async () => {
      const rating = await getAvgMovieRatingBy(movie.id);
      setAvgRating(rating);
    };

    const fetchRole = async () => {
      // Check if loggedUser is not null before accessing the role
      if (loggedUser) {
        const roleFromStore = loggedUser.role;
        setRole(roleFromStore);
      } else {
        // Handle the case where the user is not logged in or loggedUser is null
        console.log('No user logged in or token invalid');
        navigate('/login');
      }
    };

    fetchAvgRating();
    fetchRole();
  }, [movie.id]);

  const openUserReview = () => {
    navigate(`/userReview/${movie.id}`);
  };

  const updateMovie = () => {
    navigate(`/movieUpdate/${movie.id}`);
  };

  return (
    <div className="col s12 m12 l6">
      <div className="card large custom-movie-card">
        <div className="card-image waves-effect waves-block waves-light">
          <img src={movie.imageUrl} alt={movie.title} className="image-size" />
        </div>
        <div className="card-content">
          <div className="text-content">
            <span className="card-title activator grey-text text-darken-4">
              <strong>{movie.title}</strong>
            </span>
            <div>
              <p className="inline-block">{movie.genre.name}</p>
              <span className="inline-block right">
                <i className="material-icons left tiny star-icon">star_border</i>
                <b>{avgRating}</b>/10
              </span>
            </div>
          </div>

          <div className="update-movie">
            {role === 'Admin' && (
              <button
                className="btn waves-effect white purple-text text-darken-4 margin-top-25 inline-block reset-border"
                onClick={updateMovie}
              >
                Movie edit
                <i className="material-icons right">edit</i>
              </button>
            )}
          </div>

          <div className="rate-movie">
            <button className="btn waves-effect waves-light purple lighten-1" name="action" onClick={openUserReview}>
              Movie review
              <i className="material-icons right">rate_review</i>
            </button>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            More info..<i className="material-icons right">close</i>
          </span>
          <p>
            Release date:{' '}
            {new Date(movie.releaseDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
          <p>Directors: {movie.directors}</p>
          <p>Cast: {movie.cast}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
