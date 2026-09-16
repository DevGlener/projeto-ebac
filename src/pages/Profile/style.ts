import styled from 'styled-components';
import Card from '../../components/elements/Card';
import colors from '../../styles/colors';
import Button from '../../components/elements/Button';
import { BaanerContainer } from '../../components/elements/Banner/style';
import Header from '../../components/ui/Header';

export const ProfileContainer = styled.div`
  position: relative;

  ${BaanerContainer} {
    position: absolute;
    top: 10.125rem;
    left: 0;
    width: 100%;
    font-size: 2rem;
    font-family: unset;

    h5 {
      font-weight: 100;
    }
    h4 {
      font-weight: bold;
    }
  }
`;
export const ListCards = styled.ul`
  margin: 112px auto 7.5rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const CardEdit = styled(Card)`
  padding: 0.5rem;
  background-color: ${colors.orange};
  color: ${colors.white};
  height: 338px;
`;
export const ButonEdit = styled(Button)`
  color: ${colors.orange};
  background-color: ${colors.orangeCard};
  width: 100%;
  height: 24px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const HeaderEdit = styled(Header)`
  height: 11.625rem;
`;
