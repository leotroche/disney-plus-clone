import { dataAdapter } from '../adapters/dataAdapter'
import { getDetails } from './getDetails'
import { getVideos } from './getVideos'

export const getData = async (id) => {
  const movie = await getDetails(id)
  const videos = await getVideos(id)

  return await dataAdapter(movie, videos)
}
