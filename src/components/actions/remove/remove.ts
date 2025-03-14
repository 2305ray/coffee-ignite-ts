import { styled } from "styled-components";

export const ButtonsContent = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: flex-start; 
  margin-top: 0.5rem;
  

  .remover {
    border-radius: 8px;
     background: ${props => props.theme["WHITE-500"]}; 
     border: none;
     color: ${props => props.theme["GRAY-300"]};
     cursor: pointer;
     align-items: center;
     display: flex;
     justify-content: center;
     gap: 0.4rem;
     transition: background 0.2s ease;
     width: 7rem;

      &:hover {
        background: ${props => props.theme["GRAY-100"]};
         color: ${props => props.theme["GRAY-500"]};
      }

      &:active {
        transform: scale(0.9); 
      }
  }
`;