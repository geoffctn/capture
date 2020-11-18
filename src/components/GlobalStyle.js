import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1700px) {
      font-size: 75%;
    }
  }
  body {
    font-family: 'Inter', sans-serif;
    background: #1b1b1b;
    overflow-x: hidden;
  }
  button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
    background: transparent;
    border: 1px solid #23d997;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      color: white;
      background-color: #23d997;
    }
  }
  h2 {
    font-weight: leghter;
    font-size: 4rem;
  }
  h3 {
    color: white;
  }
  h4 {
    font-weight: bold;
    color: #23d997;
  }
  a {
    font-size: 1.1rem;
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
  p {
    padding: 3rem 0;
    font-size: 1.4rem;
    line-height: 150%;
    color: #ccc;
  }
`

export default GlobalStyle
