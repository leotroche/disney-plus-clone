import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ICONS = [
  { name: 'HOME', className: 'fa fa-home', to: '/' },
  { name: 'SEARCH', className: 'fa fa-search', to: null },
  { name: 'MOVIES', className: 'fa-solid fa-clapperboard', to: null },
  { name: 'SERIES', className: 'fa fa-television', to: null },
  { name: 'WATCHLIST', className: 'fa fa-heart', to: null }
]

export const SOCIAL_ICONS = [
  {
    name: 'LINKEDIN',
    className: 'fa-brands fa-linkedin-in',
    href: 'https://www.linkedin.com/in/leonardo-troche/'
  },
  {
    name: 'GITHUB',
    className: 'fa-brands fa-github',
    href: 'https://github.com/leotroche/disney-plus-clone'
  }
]

const LOGO_SVG = '/img/logo.svg'

export const Header = () => {
  const [headerBg, setHeaderBg] = useState(false)

  const changeBackgroundHeader = () => {
    window.scrollY >= 80 ? setHeaderBg(true) : setHeaderBg(false)
  }

  window.addEventListener('scroll', changeBackgroundHeader)

  return (
    <SHeader className={headerBg ? 'onScroll' : ''}>
      <Navbar>
        <Logo to='/'>
          <img src={LOGO_SVG} alt='Disney+ Logo' />
        </Logo>
        <Navigation>
          {ICONS.map(icon => (
            <Link to={icon.to} key={icon.name}>
              <i className={icon.className} />
              <span>{icon.name}</span>
            </Link>
          ))}
        </Navigation>
        {SOCIAL_ICONS.map(red => (
          <a href={red.href} target='_blank' rel='noreferrer' key={red.name}>
            <i className={red.className} />
            <span>{red.name}</span>
          </a>
        ))}
      </Navbar>
    </SHeader>
  )
}

/* styles.js */

export const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  width: 100%;
  padding: 0 40px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.7);

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94);

  &.onScroll {
    background-color: #000;  
  }
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 5rem;
  width: 100%;

  a {
    display: flex;
    align-items: center;
    gap: 4px;

    
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94);

    &:hover {
      color: #fff;
    }

    &:hover span::after {
      transform: scaleX(1);
   
    }
  }

  span {
    font-size: 14px;
    font-weight: bold;
    position: relative;

    &::after {
      content: '';
      height: 2px;
      background: #fff;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;

      transform-origin: left center;
      transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform: scaleX(0);
    }
  }
`

export const Logo = styled(Link)`
  width: 8rem;
  background-color: transparent;
`

export const Navigation = styled.div`
  display: none;
  
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 5rem;
  }
`
