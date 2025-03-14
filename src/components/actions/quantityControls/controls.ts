import { styled } from "styled-components";

export const QuantityControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme["WHITE-500"]}; /* Mantém a harmonia do layout */
  padding: 0.5rem;
  border-radius: 8px;
  width: 5rem;
  height: 3rem;
  gap: 0.5rem;

  button {
    display: flex;
    background: none;
    border: none;
    padding: 2px;
    border-radius: 4px;
    cursor: pointer;
    color: ${props => props.theme["PURPLE-300"]};
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${props => props.theme["PURPLE-500"]};
    }

    &:focus-visible {
       outline: none !important; /* Remover qualquer outline */
      border: none !important;  /* Garantir que não tenha borda */
    }

    &:active {
      transform: scale(0.9); /* Faz o ícone encolher um pouco ao clicar */
    }
  }

  span {
    font-size: 1.2rem;
  }
`;
