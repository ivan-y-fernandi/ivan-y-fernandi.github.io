import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1.25rem;
  border-radius: 0.5rem;
  background-color: ${({theme}) => theme.colors.cardBackground};
  box-shadow: ${({theme}) => theme.shadow.default};
  font-size: 1.25rem;
  line-height: 140%;

  p {
    margin: 0;
  }
`;
