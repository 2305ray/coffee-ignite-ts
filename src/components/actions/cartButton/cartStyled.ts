import { styled } from "styled-components";

export const ButtonCart = styled.button`
  background: ${({ theme }) => theme["PURPLE-500"]};
  border-radius: 8px;
  border: none;
  width: 4.5rem;
  height: 3rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme["WHITE-100"]};
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;

  &:disabled {
    background: ${({ theme }) => theme["GRAY-300"]};
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme["PURPLE-300"]};
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme["PURPLE-500"]} 0 4px 5px;
  }

  &.shoppingCart {
    background: ${({ theme }) => theme["GREEN-700"]};
  }
`;
