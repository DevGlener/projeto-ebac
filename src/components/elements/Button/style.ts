import styled from 'styled-components';
import colors from '../../../styles/colors';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled.div`
  font-size: 0.875rem;
  background-color: ${colors.orange};
  color: ${colors.white};
  width: 5.125rem;
  height: 1.75rem;
  border: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
export const ButtonLink = styled(Link)`
  font-size: 0.875rem;
  background-color: ${colors.orange};
  color: ${colors.white};
  width: 5.125rem;
  height: 1.75rem;
  border: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
