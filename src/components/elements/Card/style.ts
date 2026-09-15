import styled from 'styled-components';
import colors from '../../../styles/colors';
import { TagContainer } from '../Tags/style';

export const CardContainer = styled.div`
  border: 0.0625rem solid ${colors.orange};
  color: ${colors.orange};
  height: 24.875rem;
  display: flex;
  flex-direction: column;
  column-gap: 0.5rem;
  position: relative;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    font-style: unset;
    line-height: 1.375rem;
    margin: 0.5rem 0;
  }
`;

export const CardTags = styled.div`
  width: 11.25rem;
  height: 1.625rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  justify-content: flex-end;
  right: 0.5rem;
  top: 0.5rem;
  gap: 0.5rem;
`;

export const TagCustom = styled(TagContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;
export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    gap: 0.5rem;
  }
`;
export const CardInfos = styled.div`
  padding: 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    font-size: 0.875rem;
    background-color: ${colors.orange};
    color: ${colors.white};
    width: 5.125rem;
    height: 1.75rem;
    border: none;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
  p {
    font-size: 12px;
  }
`;
