import { TMDB } from '../../../config/tmdb'
import { adapter } from '../adapters/moviesAdapter'

export const getTopRatedSeries = async () => {
  const resp = await TMDB.api(TMDB.series.top_rated)
  return await adapter(resp.data.results)
}
