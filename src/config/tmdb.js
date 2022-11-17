import axios from 'axios'
import { ENV } from '../environment/environment.js'

export const TMDB = {
  api: axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: ENV.API_KEY
      // language: 'es-MX'
      // page: 1
    },
    timeout: 2000
  }),
  movie: {
    details: '/movie/',
    videos: (id) => '/movie/' + id + '/videos'
  },

  serie: {
    details: '/tv/',
    videos: (id) => '/tv/' + id + '/videos'
  },

  movies: {
    popular: '/movie/popular',
    top_rated: '/movie/top_rated'
  },

  series: {
    popular: '/tv/popular',
    top_rated: '/tv/top_rated'
  },

  images: {
    poster_low: 'https://image.tmdb.org/t/p/w185',
    poster_high: 'https://image.tmdb.org/t/p/w500',
    poster_original: 'https://image.tmdb.org/t/p/original',
    backdrop_low: 'https://image.tmdb.org/t/p/w300',
    backdrop_high: 'https://image.tmdb.org/t/p/w1280',
    backdrop_original: 'https://image.tmdb.org/t/p/original'
  }
}
