import { styled } from "styled-components";

export const ContainerHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.theme['WHITE-200']};
  z-index: 9999; /* Mantém o header acima do conteúdo */
  
  width: 100%;
  height: 7rem; /* Define uma altura fixa */
  gap: 25rem;
  padding: 1rem 2rem;
  margin-bottom: 5rem;
 

  img {
    width: 5.25rem;
    height: 2.5rem;
  }

  nav {
    display: flex;
    gap: 1rem;
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 0.5rem;
        border-radius: 8px;
    }

    a.map {
        color: ${(props) => props.theme["PURPLE-300"]};
        background: ${(props) => props.theme["PURPLE-100"]};
        font-weight: bold;
        font-size: 0.875rem;
        gap: 0.2rem;
    }

    a.cart {
        background: ${(props) => props.theme["YELLOW-100"]};
    }

    a.map svg {
        color: ${(props) => props.theme["PURPLE-300"]};
    }

    a.cart svg {
        color: ${(props) => props.theme["YELLOW-300"]};
    }
  }
`;

export const MainContent = styled.main`
  padding-top: 6.5rem; /* Adiciona um espaçamento igual à altura do header */
`;

