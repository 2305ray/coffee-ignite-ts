import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8rem;


  img {
    width: 5.25rem;
    height: 2.5rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  

    /* Link comum */
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 0.5rem;
        border-radius: 8px;
    }

    /* Estilos para o link da classe "map" */
    a.map {
        color: ${(props) => props.theme["PURPLE-300"]}; /* Cor para o link de Porto Alegre */
        background: ${props => props.theme["PURPLE-100"]};
        font-weight: bold;
        font-size: 0.875rem;
        gap: 0.2rem;

    }

    a.cart  {
        background: ${(props) => props.theme["YELLOW-100"]}; 
    }

    /* Estilos específicos para os ícones */
    a.map svg {
        color: ${(props) => props.theme["PURPLE-300"]}; /* Cor do ícone de Porto Alegre */
    }

    a.cart svg {
        color: ${(props) => props.theme["YELLOW-300"]}; /* Cor do ícone do Carrinho */
    }
  
  }
`;
