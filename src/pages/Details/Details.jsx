// Components
import { Loading, Trailer } from '../../common/components'
import * as S from './styles'

// Hooks
import { useFetch } from '../../common/hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

// Services
import { getData } from './services'

export function Details () {
  const { id } = useParams()
  const { data, isLoading } = useFetch(() => getData(id))

  const [showModal, setShowModal] = useState(false)

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <S.Bg>
        <S.Container>
          <S.Content>
            {data.title && <S.Title>{data.title}</S.Title>}
            <S.Top>
              {data.releaseDate && <span>{data.releaseDate}</span>}
              {'  •  '}
              {data.runtime && <span>{data.runtime} minutes</span>}
              <S.TrailerButton onClick={() => setShowModal(!showModal)}>
                <i className='fa-sharp fa-solid fa-play' />
                <span>TRAILER</span>
              </S.TrailerButton>
            </S.Top>
            {data.overview && <p>{data.overview}</p>}
            <span>
              {' • '}
              {data.genres && data.genres.map((gen) => gen.name + ' • ')}
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
              videos={data.videos}
              showModal={showModal}
              setShowModal={setShowModal}
            />
            <S.Backdrop
              src={data.backdrop}
              alt={data.title || data.id}
            />
          </S.Content>
        </S.Container>
      </S.Bg>
    </>
  )
}
