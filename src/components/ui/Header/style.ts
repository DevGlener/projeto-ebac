import styled from 'styled-components';
import Background from '../../../assets/images/background.png';
import colors from '../../../styles/colors';

export const Banner = styled.div`
  background-image: url('${Background}');
  background-size: cover;
  height: 24rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.625rem;

  p {
    color: ${colors.orange};
    font-size: 2.25rem;
    font-weight: 900;
    font-family: unset;
    width: 33.75rem;
    text-align: center;
  }
  img {
    width: 7.875rem;
  }
`;
