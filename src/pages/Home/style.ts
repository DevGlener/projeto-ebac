import styled from 'styled-components';
import Button from '../../components/elements/Button';

export const ListCards = styled.ul`
  margin: 5rem 0 7.5rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem 5rem;
`;

export const ButtonEdit = styled(Button)`
  margin-top: 8px;
`;
