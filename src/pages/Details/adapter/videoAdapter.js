// import { TMDB } from '../../../config/tmdb'

export const videoAdapter = (videos) => {
  return videos.map(video => {
    return {
      id: video.id,
      name: videos.name,
      src: `https://www.youtube.com/embed/${video.key}` /* cambiar */
    }
  })
}
