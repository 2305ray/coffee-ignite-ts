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
  gap: 52rem;
  padding: 1rem 2rem;
 

  img {
    width: 5.3rem;
    height: 5.3rem;
  }

  nav {
    
    display: flex;
    gap: 1rem;
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 0.560rem;
        border-radius: 8px;
        
    }

    a.map {
        color: ${(props) => props.theme["PURPLE-500"]};
        background: ${(props) => props.theme["PURPLE-100"]};
        gap: 0.2rem;
        pointer-events: none;
        font-size: 0.9rem;
    }

    a.cart {
        background: ${(props) => props.theme["YELLOW-100"]};
        transition: background-color 0.3s ease; 
        pointer-events: none;
      
    }

  
    a.map svg {
        color: ${(props) => props.theme["PURPLE-300"]};
    }

    a.cart svg {
        color: ${(props) => props.theme["YELLOW-500"]};
       
    }

  }

`;

export const CartContainer = styled.div`
  position: relative;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #C47F17;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
