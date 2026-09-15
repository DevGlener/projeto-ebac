import styled from 'styled-components';
import colors from '../../styles/colors';
import Button from '../../components/elements/Button';

export const ListCards = styled.ul`
  margin: 5rem 0 7.5rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem 5rem;
  p {
    color: ${colors.orange};
    font-size: 2.25rem;
    font-weight: 900;
    font-family: unset;
    width: 100%;
  }
`;
export const CardProfile = styled(Button)`
  background-color: ${colors.orange};
`;
