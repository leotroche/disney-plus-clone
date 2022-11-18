import { TMDB } from '../../../config/tmdb'
import { adapter } from '../adapters/moviesAdapter'

export const getTopRatedMovies = async () => {
  const resp = await TMDB.api(TMDB.movies.top_rated)
  return await adapter(resp.data.results)
}
