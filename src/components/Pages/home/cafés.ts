// styles/BuyACoffee.styles.ts
import styled from "styled-components";

export const ComprasDeCafe = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Criação de colunas flexíveis */
  gap: 2rem; /* Espaço entre os itens */
  width: 100%;
  padding: 3rem;

  text-align: center;
  justify-content: center;
  align-items: center;

  /* Estilo para o conteúdo dentro de cada item */
  div {
    background: ${props => props.theme["WHITE-300"]};
    border-bottom-left-radius: 15px; /* Arredonda o canto inferior esquerdo */
    border-bottom-right-radius: 15px; /* Arredonda o canto inferior direito */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para dar destaque ao card */
    padding: 2rem; /* Adiciona padding no interior */
    display: flex;
    flex-direction: column; /* Alinha o conteúdo dentro do item */
    gap: 1rem; /* Espaço entre os elementos internos */
  }

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
  }

  h5 {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme["GRAY-500"]};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme["GRAY-200"]};
    margin-bottom: 1rem;
  }

  footer {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Em telas menores, um item por linha */
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
