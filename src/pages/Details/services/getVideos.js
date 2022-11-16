import { TMDB } from '../../../config/tmdb'
import { videoAdapter } from '../adapters/videoAdapter'

export const getVideos = async (id) => {
  const resp = await TMDB.api(TMDB.movie.videos(id))
  return await videoAdapter(resp.data.results)
}
