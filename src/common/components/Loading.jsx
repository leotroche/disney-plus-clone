import styled, { keyframes } from 'styled-components'

export const Loading = () => {
  return (
    <Container>
      <Spinner className='fa-sharp fa-solid fa-spinner' />
    </Container>
  )
}

/* styles.js */

const rotating = keyframes`
  from{
    -webkit-transform: rotate(0deg);
  }
  
  to{
    -webkit-transform: rotate(360deg);
  }
`

export const Container = styled.div`
  position: absolute;
  inset: 0;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Spinner = styled.i`
  font-size: 6rem;

  animation: ${rotating} 2s linear infinite;
`
