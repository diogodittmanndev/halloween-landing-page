import ButtonWatch from '../atoms/ButtonWatch'
import Frontend from '../templates/Frontend'
import * as S from './styles'
import HeroImage from '../assets/hero-image.svg'

function Main() {

  return (
    <Frontend>
      <S.Container>
        <div>
          <h1>GHOST IN THE SHELL</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolore maxime exercitationem, impedit, cum sint excepturi harum,
            ad voluptates ipsam aspernatur adipisci repellat enim necessitatibus esse numquam. Praesentium, deleniti voluptates.</p>
          <ButtonWatch />
        </div>

        <div>
          <img className='animate__animated animate__bounceIn animate__delay-1s' src={ HeroImage } alt="Imagem da página" />
        </div>

        </ S.Container>
    </Frontend>
  )
}

export default Main
