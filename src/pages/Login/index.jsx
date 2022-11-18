import * as S from './styles'

export function Login () {
  return (
    <>
      <S.Container>
        <S.Hero />
        <img src='/img/cta-logo-one.svg' alt='cta-logo' />
        <S.SubscribeButton>LOG IN</S.SubscribeButton>
        {/* <p>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $
        </p> */}
        <img src='/img/cta-logo-two.png' alt='cta-logo' />
      </S.Container>
    </>
  )
}
