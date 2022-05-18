import { useMemo, useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import styled from 'styled-components';
import { MolecularCount } from './common';

const Container = styled.div`
  grid-area: countdown;
  justify-content: center;
  display: flex;
  gap: 0.5rem;
`;

export const Countdown = () => {
  const end = DateTime.fromISO('2023-03-25');
  const start = DateTime.now();
  const [countdown, setCountdown] = useState({});

  useEffect(
    () => {
      let timer1 = setTimeout(() => setCountdown(end.diff(start, ['days', 'hours', 'minutes', 'seconds']).toObject()), 1000);

      return () => {
        clearTimeout(timer1);
      };
    },
    [end, start]
  );

  const { days, hours, minutes, seconds } = useMemo(() => countdown, [countdown]);


  return (
    <Container>
      <MolecularCount title="Días" count={days} />
      <MolecularCount title="Horas" count={hours} />
      <MolecularCount title="Min." count={minutes} />
      <MolecularCount title="Seg." count={Math.trunc(seconds)} />
    </Container>
  );
};