import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const STUDIOS = [
  {
    name: 'disney',
    logo: '/studios/disney.png',
    video: '/studios/disney.mp4'
  },
  {
    name: 'pixar',
    logo: '/studios/pixar.png',
    video: '/studios/pixar.mp4'
  },
  {
    name: 'marvel',
    logo: '/studios/marvel.png',
    video: '/studios/marvel.mp4'
  },
  {
    name: 'starwars',
    logo: '/studios/starwars.png',
    video: '/studios/starwars.mp4'
  },
  {
    name: 'national',
    logo: '/studios/national.png',
    video: '/studios/national.mp4'
  }
]

export const Studios = () => {
  return (
    <>
      <Container>
        {STUDIOS.map(({ name, logo, video, id }) => (
          <Anchor key={name}>
            <img src={logo} alt={name} />
            <video autoPlay loop playinline='true' preload='auto'>
              <source type='video/mp4' src={video} />
            </video>
          </Anchor>
        ))}
      </Container>
    </>
  )
}

/* styles.js */

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 0.8rem;
  padding-bottom: 5rem;
`

export const Anchor = styled(Link)`
  border-radius: 0.4rem;
  background-color: var(--black);

  position: relative;
  overflow: hidden;
  
  transition: transform 0.3s ease-in 0.05s;
  
  video {
    position: absolute;
    inset: 0;
    opacity: 0;

    transition: opacity 0.3s ease-in 0.05s;
  }

  :hover {
    transform: scale(1.15);
    z-index: 1;

    video {
      opacity: 1;
    }
  }
`
