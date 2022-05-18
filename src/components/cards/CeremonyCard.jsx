import { Button, Card } from '../common';

export const CeremonyCard = () => (
  <Card>
    <Card.Header
      title="La Iglesia"
      imgSrc="/img/icons/iglesia.svg"
    />
    <Card.Content>
      <p>
        <b>
          Parroquia de Ntra. Sra. del Perpetuo Socorro
        </b>
        <br />
        Av. 24 de Septiembre 1281
        <br />
        20:30 hs.
      </p>
    </Card.Content>
    <Button
      as="a"
      href="https://goo.gl/maps/G8jVJdJVVkKTdcey9"
      target="_blank"
    >
      ¿Cómo llegar?
    </Button>
  </Card>
);
