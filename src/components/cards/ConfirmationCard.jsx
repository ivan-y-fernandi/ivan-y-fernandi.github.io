import { Button, Card } from '../common';

export const ConfirmationCard = () => (
  <Card>
    <Card.Header
      title="Confirmar asistencia!"
      imgSrc="/img/icons/invitation.svg"
    />
    <Card.Content>
      <p>
        Para nosotros es muy importante que confirmes esta invitación,
        o que nos cuentes si no nos puedes acompañar
      </p>
    </Card.Content>
    <Button
      as="a"
      href="https://docs.google.com/forms/d/e/1FAIpQLSe4w6k_6p51HKNycEGyF7yZ0DSeH4C2INRH2F7I-lAWWh7dlQ/viewform?usp=sf_link"
      target="_blank"
    >
      Confirmar aquí
    </Button>
  </Card>
);
