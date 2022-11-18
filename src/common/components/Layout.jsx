import styled from 'styled-components'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </>
  )
}

/* styles.js */

const HERO_BG = '/img/home-bg.png'

export const Content = styled.main`
  padding: 5rem;
  padding-top: 10rem;
`

export const Container = styled.div`
  min-height: 100vh;
  position: relative;

  ::before {
    content: '';
    background: url(${HERO_BG}) center center / cover
      no-repeat fixed;

    position: absolute;
    inset: 0;
    z-index: -1;
  }
`
