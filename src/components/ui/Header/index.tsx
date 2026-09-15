import logo from '../../../assets/images/logo.svg';
import { Banner } from './style';

function Header() {
  return (
    <Banner>
      <img src={logo} alt="imagem da logo" />
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </Banner>
  );
}

export default Header;
