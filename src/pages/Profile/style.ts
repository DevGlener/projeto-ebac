import styled from 'styled-components';
import Card from '../../components/elements/Card';
import colors from '../../styles/colors';

export const ProfileContainer = styled.div``;

export const ListCards = styled.div`
  margin: 3.5rem auto 7.5rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const CardProfile = styled(Card)`
  background-color: ${colors.orange};
`;
