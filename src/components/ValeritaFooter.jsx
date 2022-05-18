import styled from 'styled-components';
import { transparentize } from 'polished';
import { DateTime } from 'luxon';
import { Heart } from './common';

const Section = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => transparentize(0.4, theme.colors.secondary)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;


  h1, h2, h3 {
    margin: 0;
  }
  
  p, img {
    margin: 0.5rem 0;
  }
`;

export const ValeritaFooter = () => {
  const { year } = DateTime.now();
  return (
    <Section>
      <Content>
        ©{year}
        <Heart iconHeight="12" />
        <a href="mailto:vale.mollea@gmail.com">Consultas por tarjetas virtuales</a>
      </Content>
    </Section>
  );
};
