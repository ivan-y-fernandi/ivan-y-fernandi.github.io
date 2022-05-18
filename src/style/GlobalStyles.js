import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Breetty';
    src: url('/fonts/Breetty.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  };

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  };

  @font-face {
    font-family: 'PTRegular';
    src: url('/fonts/PTRegular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  };

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${({theme}) => theme.colors.textDefault};
    font-size: 1rem;
    font-family: ${({theme}) => theme.fonts.default};
    background-image: url('/img/mapBackground.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left bottom;
  } 

  body::after{
    content:"";
    position:fixed; /* stretch a fixed position to the whole screen */      top:0;
    height:100vh; /* fix for mobile browser address bar appearing disappearing */
    left:0;
    right:0;
    z-index:-1; /* needed to keep in the background */
    background-image: url('/img/mapBackground.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left bottom;
  }

  h1, h2, h3 {
    font-weight: 500;
    font-family: ${({theme}) => theme.fonts.italic};
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.textDefault};
  }

  a:hover, a:focus {
    text-decoration: none;
    color: theme.colors.textDefault};
    opacity: 0.8;
  }
`;