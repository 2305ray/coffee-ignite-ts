import { styled } from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['WHITE-200']};
  position: sticky;
  top: 0;
  width: 100%;
  height: 4rem; /* Define uma altura fixa */
  z-index: 9999; /* Mantém o header acima do conteúdo */
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


