import styled from 'styled-components';
import { HeaderContainer } from '../../components/ui/Header/style';
import Card from '../../components/elements/Card';
import colors from '../../styles/colors';
import Button from '../../components/elements/Button';

export const ProfileContainer = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 3.5rem auto 7.5rem auto;
    gap: 32px;
  }

  ${HeaderContainer} {
    display: flex;
    align-items: center;
    height: 186px;
    p {
      display: none;
    }
  }

  .titles {
    display: flex;
    flex-direction: column;
  }
`;
export const CardEdit = styled(Card)`
  background-color: ${colors.orange};
  color: ${colors.white};
  height: 338px;
  padding: 8px;
`;

export const ButtonEdit = styled(Button)`
  width: 100%;
  background-color: ${colors.backgroundP};
  color: ${colors.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  margin-top: 8px;
`;
