import styled from 'styled-components'

export const GlobalStyle = styled.div`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    background: ${(props) => props.theme['white-200']};
    color: ${(props) => props.theme['gray-300']};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
`;