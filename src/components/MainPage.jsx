import styled from 'styled-components';
import { Header } from './Header';
import { PhotosGalery } from './PhotosGalery';
import { Footer } from './Footer';
import { ValeritaFooter } from './ValeritaFooter';
import {
  CeremonyCard,
  PartyCard,
  ConfirmationCard,
  PresentCard,
} from './cards';

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textDefault};

  @media (max-width: 768px) {
    padding-bottom: 2.5rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 60rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem auto;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MainPage = () => (
  <>
    <Header />
    <MainContainer>
      <PhotosGalery />
      <ContentContainer>
        <CeremonyCard />
        <PartyCard />
        <ConfirmationCard />
        <PresentCard />
      </ContentContainer>
      <Footer />
    </MainContainer>
    <ValeritaFooter />
  </>
);
