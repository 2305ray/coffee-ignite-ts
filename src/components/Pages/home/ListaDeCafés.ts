import { ShoppingCart, Plus } from 'phosphor-react';
import { styled } from "styled-components";

export const ContainerAll = styled.div`
  display: flex; 

  h1 {
    font-size: 2.5rem;
    margin-bottom: 6rem;
    font-weight: 800;
    color: ${props => props.theme["GRAY-400"]};
  }
`;

export const ComprasDeCafe = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  header {
    width: 100%;
    display: flex;
    justify-content: center; 
    margin-bottom: 1rem;
  }

  header img {
    max-width: 100%;
    height: auto;
    max-height: 120px;
    margin-top: -80px;
  }

  h5 {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme["GRAY-300"]};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme["GRAY-200"]};
    margin-bottom: 1rem;


    &.categories {
      font-size: 0.8rem;
      font-weight: 700;
      display: flex;
      color: ${props => props.theme["YELLOW-500"]};
      height: 2rem;
      width: 5rem;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      white-space: nowrap;

      .tag-item {
        padding: 4px 10px;
        border-radius: 15px;
        background: ${props => props.theme["YELLOW-100"]};
      }
    }

  }

  .paragraph{
      color: ${props => props.theme["GRAY-300"]};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      font-size: 1.1rem;
      margin-right: 1rem;

       span {
        color: ${props => props.theme["GRAY-300"]};
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 1.8rem;
       }
    }

  section {
    margin-top: 0.8rem;
    gap: 0.7rem;
    display: flex;
    padding-top: 1rem;
    flex-grow: 0;
  }

  button {
    background: ${props => props.theme["GRAY-100"]};
    border-radius: 8px;
    border: none;
    width: 4.5rem;
    height: 3rem;
    opacity: 0.7;
    font-size: 1.2rem;
  }

  .ShoppingCart {
    color: ${props => props.theme["WHITE-100"]};
    background: ${props => props.theme["PURPLE-500"]};
    width: 3rem;
    height: 3rem;
    opacity: 1;
    padding: 0.6rem;
    transition: transform 0.1s ease, background-color 0.2s ease;
  }

  .ShoppingCart:hover {
    background: ${props => props.theme["PURPLE-300"]};
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: ${(props) => props.theme["PURPLE-500"]} 0 4px 5px;
  }

  .ShoppingCart:focus {
    outline: none;
  }

  .ShoppingCart:active {
    transform: translateY(2px);
    box-shadow: ${(props) => props.theme["PURPLE-500"]} 0 2px 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;

    header img {
      max-height: 100px; 
    }

    h5 {
      font-size: 1.25rem; 
    }

    p {
      font-size: 0.875rem; 
    }
  }
`;

export const Content = styled.div`
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${props => props.theme["WHITE-300"]};
  width: 20rem;
  height: 23rem;
  box-shadow: ${props => props.theme["GRAY-100"]} 0px 0px 3px;
`;

export const ContainerCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

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
