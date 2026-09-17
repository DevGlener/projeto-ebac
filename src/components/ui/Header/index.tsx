import { HeaderContainer } from './style';
import logo from '../../../assets/images/logo.svg';

interface HeaderProps {
  quantity?: number;
  name?: string;
  text?: string;
}

function Header({ quantity, text, name }: HeaderProps) {
  return (
    <HeaderContainer>
      <div className="container">
        <h3>{name}</h3>
        <img src={logo} alt={`ìmagem da ${logo}`} />
        <h3>
          {quantity}
          {text}
        </h3>
      </div>
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </HeaderContainer>
  );
}

export default Header;
