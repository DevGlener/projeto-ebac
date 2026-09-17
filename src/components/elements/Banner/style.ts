import styled from 'styled-components';
import BannerImg from '../../../assets/images/BannerImg.png';
import colors from '../../../styles/colors';

export const BaanerContainer = styled.div`
  position: relative;
  background-image: url(${BannerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 17.5rem;

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    inset: 0;
  }

  h5 {
    font-size: 32px;
    font-weight: 100;
  }
  h4 {
    font-size: 32px;
    font-weight: 900;
  }

  .container {
    position: relative;
    margin: 0 auto;
    z-index: 1;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${colors.white};
    height: 280px;
  }
`;
