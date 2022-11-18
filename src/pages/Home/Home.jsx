import { useFetch } from '../../common/hooks/useFetch'
import {
  Footer,
  Loading,
  MovieCarousel,
  Studios
} from '../../common/components'

// Services
import {
  getPopularMovies,
  getPopularSeries,
  getTopRatedMovies,
  getTopRatedSeries
} from './services'

export const Home = () => {
  const { data: popularMovies, isLoading } = useFetch(getPopularMovies)
  const { data: popularSeries } = useFetch(getPopularSeries)
  const { data: topRatedMovies } = useFetch(getTopRatedMovies)
  const { data: topRatedSeries } = useFetch(getTopRatedSeries)

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Studios />
      <MovieCarousel category='Top Rated Movies' movies={popularMovies} />
      <MovieCarousel category='Popular Movies' movies={topRatedMovies} />
      <MovieCarousel category='Top Rated Series' movies={popularSeries} />
      <MovieCarousel category='Popular Series' movies={topRatedSeries} />
      <Footer />
    </>

  )
}
