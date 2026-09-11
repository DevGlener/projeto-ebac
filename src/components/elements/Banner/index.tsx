import { BannerContainer } from './style';
import background from '..//../../assets/images/background.png';

function Banner() {
  return (
    <BannerContainer>
      <img src={background} alt="imagem do banner" />
    </BannerContainer>
  );
}
export default Banner;
