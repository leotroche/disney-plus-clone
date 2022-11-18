import styled from 'styled-components'

export const Hero = styled.div`
  background: url("/img/login-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  inset: 0;
  z-index: -1;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 3rem;

  margin: 0 auto;

  max-width: 90vw;
  min-height: 100vh;
  padding: 4rem 0;
`

export const SubscribeButton = styled.button`
  padding: 1rem;
  border-radius: 0.6rem;
  width: 50%;

  font-weight: bold;
  font-size: 1.5rem;

  background-color: #2563eb;

  @media screen and (min-width: 800px) {
    font-size: 4rem;
  }
`
