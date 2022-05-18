import styled from 'styled-components';
import { transparentize } from 'polished';

const PHOTOS_SRC = [
  'photo_01',
  'photo_02',
  'photo_03',
  'photo_04',
  'photo_05',
  'photo_06',
  'photo_07',
  'photo_08'
]

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 15rem);
  grid-gap: 1.5rem;
  padding: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0.25rem solid white;
`;



export const PhotosGalery = () => (
  <Section>
    <Title>Galería de Fotos</Title>
    <Container>
      {PHOTOS_SRC.map((photo) => (
        <Photo key={photo} src={`/img/photos/${photo}.jpg`} />
      ))}
    </Container>
  </Section>
);
