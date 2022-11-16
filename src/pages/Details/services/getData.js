// Adapters
import { dataAdapter } from '../adapters/dataAdapter'

// Services
import { getMovieDetails } from './getMovieDetails'
import { getMovieVideos } from './getMovieVideos'
import { getSerieDetails } from './getSerieDetails'
import { getSerieVideos } from './getSerieVideos'

export const getData = async (id) => {
  try {
    const movieDetails = await getMovieDetails(id)
    const movieVideos = await getMovieVideos(id)
    return await dataAdapter(movieDetails, movieVideos)
  } catch (error) {
    const serieDetails = await getSerieDetails(id)
    const serieVideos = await getSerieVideos(id)
    return await dataAdapter(serieDetails, serieVideos)
  }
}
