import styled from 'styled-components';
import { Heart } from './common';

const Section = styled.div`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 2rem 1.5rem;

  h1 {
    font-size: 2.5rem;
    margin: 0.75rem 0;
  }

  h1 + h1 {
    margin: 1rem 0 1rem auto;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Image = styled.img.attrs({
  src: '/img/photos/final.jpg'
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0.25rem solid white;
`;

const Frase = styled.h2`
  position: absolute;
  bottom: 1.5rem;
  padding: 0 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 3px #000;
`;

const Message = styled.h2`
  font-size: 2rem;
  font-family: ${({theme}) => theme.fonts.default};
`;

const Signature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const Footer = () => (
  <Section>
    <Container>
      <Image src="/img/photos/nosCasamos.jpg" />
      <Frase>Un buen destino es que dos personas se encuentren, cuando ni siquiera se estaban buscando.</Frase>
    </Container>
    <Message>¡Los esperamos!</Message>
    <Signature>
      <Heart iconHeight={16} />
      <h1>Iván & Fer</h1>
      <Heart iconHeight={16} />
    </Signature>
  </Section>
);
