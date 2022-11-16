import { TMDB } from '../../../config/tmdb'
import { detailsAdapter } from '../adapters/detailsAdapter'

export const getDetails = async (id) => {
  const resp = await TMDB.api(TMDB.movie.details(id))
  return detailsAdapter(resp.data)
}
