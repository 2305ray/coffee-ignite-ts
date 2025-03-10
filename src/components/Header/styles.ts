import { styled } from "styled-components";

interface HeaderProps {
  $isScrolled: boolean;
}

export const ContainerHeader = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999; /* Mantém o header acima do conteúdo */

  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => (props.$isScrolled ? props.theme['WHITE-200'] : "transparent")};
  box-shadow: ${(props) => (props.$isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none")};
  
  width: 100%;
  height: 9rem; /* Define uma altura fixa */
  gap: 25rem;
  padding: 1rem 2rem;
 

  img {
    width: 6rem;
    height: 6rem;
  }

  nav {
    
    display: flex;
    gap: 1rem;
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 0.7rem;
        border-radius: 8px;
        
    }

    a.map {
        color: ${(props) => props.theme["PURPLE-500"]};
        background: ${(props) => props.theme["PURPLE-100"]};
        font-size: 0.875rem;
        gap: 0.2rem;
        pointer-events: none;
        font-size: 1rem;
    }

    a.cart {
        background: ${(props) => props.theme["YELLOW-100"]};
        transition: background-color 0.3s ease; /* Suaviza a transição do hover */
      
    }

     a.cart:hover {
    background: ${(props) => props.theme["YELLOW-300"]}; /* Altere a cor de fundo ao passar o mouse */
    
}

    a.cart:focus {
    outline: none; /* Remove a borda de foco no estado de foco */
    box-shadow: none; /* Remove qualquer sombra de foco que possa aparecer */
}

    a.map svg {
        color: ${(props) => props.theme["PURPLE-300"]};
    }

    a.cart svg {
        color: ${(props) => props.theme["YELLOW-500"]};
        transition: color 0.3s ease; /* Suaviza a transição da cor do ícone */
    }

     a.cart:hover svg {
    color: ${(props) => props.theme["WHITE-200"]}; /* Altere a cor do ícone ao passar o mouse */
}
  }

`;

