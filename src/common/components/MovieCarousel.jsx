import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MovieCarousel = ({ category = '', movies }) => {
  return (
    <>
      <Container>
        <H2>{category}</H2>
        <MovieGrid>
          {movies.map(({ id, poster, title }) => (
            <Anchor to={`/details/${id}`} key={id}>
              <img
                src={poster}
                alt={title || id}
              />
            </Anchor>
          ))}
        </MovieGrid>
      </Container>
    </>
  )
}

/* styles.js */

export const Container = styled.div`
  padding-bottom: 5rem;
`

export const MovieGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 0.8rem;
`

export const Anchor = styled(Link)`
  border-radius: 1rem;
  border: 3px solid  rgba(249, 249,249, 0.1 );

  overflow: hidden;
  
  transition: all 250ms ease-in 5ms;
  
  img {
    transition: all 250ms ease-in 5ms;
  }

  :hover {
    border-color: rgba(249, 249, 249, 0.8);

    img {
      transform: scale(1.15);
    }
  }
`

export const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  padding: 1rem 0;
`
/**/
