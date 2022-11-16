export const videoAdapter = (videos) => {
  return videos.map(video => (
    { src: `https://www.youtube.com/embed/${video.key}` }
  ))
}
