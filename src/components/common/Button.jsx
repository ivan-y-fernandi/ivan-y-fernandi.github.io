import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.sans};
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background-color: ${({theme}) => theme.colors.primary};
  }
`;
