import styled from 'styled-components';
import { transparentize } from 'polished';

const Container = styled.div`
  width: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => transparentize(0.6, theme.colors.white)};
  }
`;

const Count = styled.div`
  height: 3.5rem;
`;

const Unit = styled.div`
  font-size: 1.25rem;
`;

export const MolecularCount = ({ title, count }) => (
  <Container>
    <Count>{count}</Count>
    <Unit>{title}</Unit>
  </Container>
);
