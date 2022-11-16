import { TMDB } from '../../../config/tmdb'
import { videoAdapter } from '../adapters/videoAdapter'

export const getSerieVideos = async (id) => {
  const resp = await TMDB.api(TMDB.serie.videos(id))
  return await videoAdapter(resp.data.results)
}
