import { TMDB } from '../../../config/tmdb'
import { adapter } from '../adapters/moviesAdapter'

export const getPopularMovies = async () => {
  const resp = await TMDB.api(TMDB.movies.popular)
  return await adapter(resp.data.results)
}
