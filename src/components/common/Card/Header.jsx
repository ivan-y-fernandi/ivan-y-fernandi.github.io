import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
  }
`;

const Img = styled.img`
  height: 6rem;
`;

export const Header = ({title, imgSrc}) => (
  <Container>
    <Img src={imgSrc} alt={title} />
    <h2>{title}</h2>
  </Container>
);