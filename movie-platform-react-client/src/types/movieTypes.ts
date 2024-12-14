import { GenreData } from './genreTypes';

export interface MovieData {
  id: number;
  title: string;
  imageUrl: string;
  genre: GenreData;
  releaseDate: string;
  directors: string;
  cast: string;
}

export interface MovieListData {
  currentMovies: MovieData[];
}
