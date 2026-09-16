import styled from 'styled-components';
import BannerImg from '../../../assets/images/BannerImg.png';
import colors from '../../../styles/colors';

export const BaanerContainer = styled.div`
  position: relative;

  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 17.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  div {
    position: relative;
    z-index: 1;

    padding: 26px 0 32px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    font-size: 32px;
    color: ${colors.white};
  }
`;
