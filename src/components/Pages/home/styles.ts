import styled from "styled-components";

export const ContainerShop = styled.section`
  display: flex;
  flex-wrap: wrap;  /* Permitindo que os itens se quebrem em várias linhas */
  width: 100%;
  align-items: center;
  margin-bottom: 12rem;

  .content {   // Classe específica para o conteúdo
    display: flex;
    flex-direction: column;  // O conteúdo será empilhado verticalmente
    width: 45%; 
    
  }

  h1 {
    font-weight: bold;
    font-size: 3rem;
    color: ${props => props.theme["GRAY-500"]};
    font-family: 'Baloo 2', sans-serif;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 400;
    margin-top: 0.875rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 6rem;

    .content {
      width: 100%;
    }
  }
`;

export const QualitysBrandConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 2rem;
  

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    display: flex;
    gap: 0.875rem;
    align-items: center;
  }

  .ShoppingCart, .Timer, .Package, .Coffee {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;  /* Faz o fundo arredondado */
    color: white;  /* Cor do ícone */
  }

  .ShoppingCart {
    background-color: ${props => props.theme["YELLOW-500"]};
    color: ${props => props.theme["WHITE-100"]};
  }

  .Timer {
    background-color: ${props => props.theme["YELLOW-300"]};
    color: ${props => props.theme["WHITE-100"]};
  }

  .Package {
    background-color: ${props => props.theme["GRAY-400"]};
    color: ${props => props.theme["WHITE-100"]};
  }

  .Coffee {
    background-color: ${props => props.theme["PURPLE-300"]};
    color: ${props => props.theme["WHITE-100"]};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  /* Em telas pequenas, 1 item por linha */
  }
`;

export const SeparatorImage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


