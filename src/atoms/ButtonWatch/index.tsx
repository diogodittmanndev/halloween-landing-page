import * as S from './styles'
import { FaPlayCircle } from 'react-icons/fa';

const ButtonWatch = () => (
    <S.Button>
        <a href="#">Watch Now </a>
        <span><FaPlayCircle  size='15' color='#FFF' /></span>
    </S.Button>
)

export default ButtonWatch