import * as S from './styles'
import Menu from '../Menu'
import Logo from '../Logo'
import Button from '../../atoms/Button';

const Header = () => {
    return (
    <S.headerBox>
        <Logo />
        < Menu />
        <Button />
    </S.headerBox>
    );
};

export default Header