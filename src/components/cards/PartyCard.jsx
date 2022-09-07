import { Button, Card } from '../common';

export const PartyCard = () => (
  <Card>
    <Card.Header
      title="La Fiesta!"
      imgSrc="/img/icons/party.svg"
    />
    <Card.Content>
      <p>
        <b>
        Salón 1915
        </b>
        <br />
        Progreso 59, Villa Allende, Córdoba
        <br />
        21:30 hs.
      </p>
    </Card.Content>
    <p><b>Dress code:</b> formal</p>
    <Button
      as="a"
      href="https://g.page/1915eventos?share"
      target="_blank"
    >
      ¿Cómo llegar?
    </Button>
  </Card>
);
