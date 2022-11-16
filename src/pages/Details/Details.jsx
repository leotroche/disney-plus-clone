// Services
import { getData } from './services'

// Hooks
import { useFetch } from '../../common/hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

// Components
import { Loading, Trailer } from '../../common/components'
import * as S from './styles'

// Page
export function Details () {
  const { id } = useParams()
  const { data, isLoading } = useFetch(() => getData(id))

  const [showModal, setShowModal] = useState(false)

  const {
    backdrop,
    genres,
    overview,
    releaseDate,
    runtime,
    title,
    videos
  } = data

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <S.Bg>
        <S.Container>
          <S.Content>
            {title && <S.Title>{title}</S.Title>}
            <S.Top>
              {releaseDate && <span>{releaseDate}</span>}
              {'  •  '}
              {runtime && <span>{runtime} minutes</span>}
              <S.TrailerButton onClick={() => setShowModal(!showModal)}>
                <i className='fa-sharp fa-solid fa-play' />
                <span>TRAILER</span>
              </S.TrailerButton>
            </S.Top>
            {overview && <p>{overview}</p>}
            <span>
              {' • '}
              {genres && genres.map((gen) => gen.name + ' • ')}
            </span>
            <S.Bottom>
              <S.PlayButton>
                <i className='fa-sharp fa-solid fa-play' />
                <span>WATCH NOW</span>
              </S.PlayButton>
              <S.WatchListButton>
                <i className='fa-solid fa-plus' />
                {/* <span>Add to WatchList</span> */}
              </S.WatchListButton>
            </S.Bottom>
            <Trailer
              videos={videos}
              showModal={showModal}
              setShowModal={setShowModal}
            />
            <S.Backdrop
              src={backdrop}
              alt={title || id}
            />
          </S.Content>
        </S.Container>
      </S.Bg>
    </>
  )
}
