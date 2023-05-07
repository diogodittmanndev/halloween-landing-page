import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body, #root {
    height: 100%;
    
  }

  body {
    background: linear-gradient(136.16deg, rgba(91, 135, 75, 0.76) 12.91%, #0C3720 87.68%);
  }

  button {
    background-color: none;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    outline: none;
  }

`
export default globalStyle