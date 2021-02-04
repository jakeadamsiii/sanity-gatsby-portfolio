import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    --red: #FF4949;
    --black: #050505;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --drkGrey: #989898;
  }

  html {
    background: var(--grey);
    font-size: 16px;
  }

  body {
    font-size: 1rem;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--grey) var(--white);
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--grey) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }

  /* container styles*/

  .container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .page {
    margin-top: 5rem;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  /* desktop */ 

  @media only screen and (min-width: 1024px) {
    .container {
        max-width: 80rem; /*1280px*/
    }

    .page {
      margin-top: 0;
    }
  }
  
  `;

  export default GlobalStyles;
