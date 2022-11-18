import { TMDB } from '../../../config/tmdb'
import { adapter } from '../adapters/moviesAdapter'

export const getPopularSeries = async () => {
  const resp = await TMDB.api(TMDB.series.popular)
  return await adapter(resp.data.results)
}
