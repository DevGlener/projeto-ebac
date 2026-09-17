import styled from 'styled-components';
import Banner from '../../../assets/images/background.png';
import colors from '../../../styles/colors';

export const FooterContainer = styled.div`
  background-image: url(${Banner});
  background-size: cover;
  background-position: center;
  padding: 2.5rem 0;
  height: 18.625rem;
  margin-top: auto;

  p {
    color: ${colors.orange};
    width: 30rem;
    font-size: 0.625rem;
    font-weight: 400;
    font-family: unset;
    text-align: center;
    margin: 0 auto;
  }
`;

export const Redes = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 5rem 0;
  column-gap: 0.5rem;
`;
export const LogoFooter = styled.img`
  display: block;
  margin: 0 auto;
`;
