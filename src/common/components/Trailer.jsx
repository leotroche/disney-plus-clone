import styled from 'styled-components'

export function Trailer ({ videos, showModal, setShowModal }) {
  const handleClose = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      {showModal &&
        <Overlay onClick={handleClose}>
          <ModalContainer>
            <Iframe
              src={videos[0]?.src}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
            <CloseModal onClick={handleClose}>
              <i className='fa-solid fa-x' />
            </CloseModal>
            {/* <NextTrailer>
              <i class='fa-solid fa-circle-right' />
            </NextTrailer>
            <PrevTrailer>
              <i class='fa-solid fa-circle-left' />
            </PrevTrailer> */}
          </ModalContainer>
        </Overlay>}
    </>
  )
}

/* styles.js */

export const ModalContainer = styled.div`
  width: 75%;
  /* padding: 4rem; */
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;
  /* z-index: 100; */
`

export const Iframe = styled.iframe`
  aspect-ratio: 16/9;
  position: relative;
`

export const CloseModal = styled.button`
  position: absolute;
  
  top: -5rem;
  top: -5rem;
  right: -5rem;

  padding: 2rem;
  
  background: transparent;

  i {
    font-size: 2.5rem;
    transition: all 250ms ease-in 5ms;
  }

  :hover i{
    transform: scale(1.35);
    color: rgb(192, 0, 0);
  }
`

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  `

export const NextTrailer = styled.button`
  position: absolute;
  
  right: -10rem;
  margin: auto 0;

  padding: 5rem;
  
  background: transparent;

  i {
    font-size: 5rem;
    transition: all 250ms ease-in 5ms;
  }

  :hover i{
    transform: scale(1.35);
    color: white;
  }

  border: 1px solid;
`

export const PrevTrailer = styled.button`
  position: absolute;
  
  left: -10rem;
  margin: auto 0;

  padding: 5rem;
  
  background: transparent;
  
  i {
    font-size: 5rem;
    transition: all 250ms ease-in 5ms;
  }

  :hover i{
    transform: scale(1.35);
    color: white;
  }
`
