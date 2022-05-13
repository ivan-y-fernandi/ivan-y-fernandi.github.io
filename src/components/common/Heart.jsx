import styled from 'styled-components';

export const Heart = styled.img.attrs({
  src: '/img/icons/heart.svg'
})`
  height: ${({iconHeight}) => iconHeight ?? 20}px;
`;