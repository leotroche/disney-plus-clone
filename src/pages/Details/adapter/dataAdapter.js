import { TMDB } from '../../../config/tmdb'

export const dataAdapter = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    releaseDate: movie.release_date,
    runtime: movie.runtime,
    genres: movie.genres,
    poster: TMDB.images.poster_low + movie.poster_path,
    backdrop: TMDB.images.backdrop_original + movie.backdrop_path,
    rating: movie.vote_agerage
  }
}
