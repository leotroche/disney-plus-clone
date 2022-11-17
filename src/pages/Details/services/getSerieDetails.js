import { TMDB } from '../../../config/tmdb'
import { detailsAdapter } from '../adapters/detailsAdapter'

export const getSerieDetails = async (id) => {
  const resp = await TMDB.api(TMDB.serie.details + id)
  return detailsAdapter(resp.data)
}
