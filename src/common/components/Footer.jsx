import styled from 'styled-components'

export function Footer () {
  return (
    <SFooter>
      <div>
        <p>
          Website developed by Leonardo Troche - No commercial purporses
          intended, made only for showing web development techniques and to be
          included as a piece of portfolio. All copyrights are owned by Disney.
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
        <img src='/img/tmdb.svg' alt='tmdb logo' />
      </div>
    </SFooter>
  )
}

export const SFooter = styled.footer`
  width: 100%;
  font-size: 1.8rem;

  div {
    padding: 1rem 2rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  p {
    max-width: 85vw;
  }

  img {
    width: 12rem;
  }
`
