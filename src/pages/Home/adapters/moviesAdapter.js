import { TMDB } from '../../../config/tmdb'

export const adapter = (movies) => {
  return movies.map(movie => {
    return {
      backdrop: TMDB.images.backdrop_high + movie.backdrop_path,
      genres: movie.genres,
      id: movie.id,
      overview: movie.overview,
      poster: TMDB.images.poster_high + movie.poster_path,
      rating: movie.vote_agerage,
      releaseDate: movie.release_date,
      runtime: movie.runtime,
      title: movie.title
    }
  })
}
