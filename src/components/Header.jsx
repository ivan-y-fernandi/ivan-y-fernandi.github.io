import styled from 'styled-components';
import { lighten } from 'polished';
import { Heart } from './common';
import { Countdown } from './Countdown';

const Section = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => lighten(0.1, theme.colors.secondary)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Container = styled.div`
  z-index: 10;
  display: grid;
  grid-template-areas:
  'image content'
  'image  countdown '
  'frase frase';
  align-items: center;
  grid-gap: 1rem;
  grid-column-gap: 3rem;
  font-size: 1.5rem;
  padding: 1rem 0 0;

  @media (max-width: 768px) {
    padding: 1rem 0;
    grid-column-gap: 0;
    grid-template-areas:
    'content'
    ' image '
    ' frase '
    'countdown';
  }
`;

const FlowersLeft = styled.img.attrs({
  src: "/img/flowers.svg"
})`
  opacity: 0.9;
  position: absolute;
  left: 0;
  top: -1.5rem;
`;

const FlowersRight = styled.img.attrs({
  src: "/img/flowers.svg"
})`
  opacity: 0.9;
  position: absolute;
  right: 0;
  bottom: -1.5rem;
  transform:  scaleX(-1) scaleY(-1);
`;

const Content = styled.div`
  grid-area: content;
  text-align: center;

  h1, h2, h3 {
    margin: 0;
  }
  
  p, img {
    margin: 0.5rem 0;
  }
`;

const Image = styled.img`
  grid-area: image;
  width: 20rem;
  border: 1rem solid ${({ theme }) => theme.colors.cardBackground};
  transform: rotate(-10deg);

  @media (max-width: 768px) {
    justify-self: center;
  }
`;

const Frase = styled.p`
  grid-area: frase;
  text-align: center;
`;

export const Header = () => (
  <Section>
    <FlowersLeft />
    <FlowersRight />
    <Container>
      <Image src="/img/photos/nosCasamos.jpg" />
      <Content>
        <p>Nos Casamos!</p>
        <Heart />
        <h1>Iván y Fer</h1>
        <p>25/03/2023</p>
      </Content>
      <Frase>Y queremos compartir con ustedes este momento tan especial</Frase>
      <Countdown />
    </Container>
  </Section>
);
