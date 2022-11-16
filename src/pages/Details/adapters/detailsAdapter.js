import { TMDB } from '../../../config/tmdb'

export const detailsAdapter = (movie) => {
  return {
    backdrop: TMDB.images.backdrop_original + movie.backdrop_path,
    genres: movie.genres,
    id: movie.id,
    overview: movie.overview,
    poster: TMDB.images.poster_low + movie.poster_path,
    rating: movie.vote_agerage,
    releaseDate: movie.release_date,
    runtime: movie.runtime,
    title: movie.title
  }
}
