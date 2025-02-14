import styled from "styled-components";

export const LayoutContainer = styled.div `
    max-width: 100rem;
    height: calc(100vh - 10rem); 
    // tamnho da altura total da tela - um tanto, o 100 vh faz ocupar 100% da tela
    margin: 5rem auto;
    padding: 2.5rem;

   background: ${(props) => props.theme["PURPLE-500"]};

   
`;