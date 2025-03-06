import { styled } from "styled-components";


export const ComprasDeCafe = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) ; /* 4 colunas flexíveis */
  gap: 1rem; /* Espaço entre os itens */
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  
  div { 
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column; /* Alinha o conteúdo dentro do item */
    background: ${props => props.theme["WHITE-300"]};
    width: 20rem;  /* Definindo largura */
    height: 23rem; /* Definindo altura */
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
    margin-top: -80px; /* Move a imagem para cima */
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

  section {
    padding: 2rem;
    margin-top: 1rem;
    gap: 1rem;
    display: flex;
    justify-content: space-between; /* Alinha os botões de incremento e decremento */
    align-items: center; /* Garante que os elementos fiquem centralizados verticalmente */
    padding-top: 1rem;
    flex-grow: 0; /* Impede que o footer cresça mais do que o necessário */
  }

  button {
    background: ${props => props.theme["GRAY-100"]};
    border-radius: 5px;
    border: none;
    width: 4.5rem;
    height: 2.375rem;
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

export const ContainerCoffee = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(4, 1fr); /* Define 4 colunas de largura igual */
  gap: 2rem; /* Espaço entre as colunas */
  width: 100%;
  margin: 0 auto; /* Centraliza o grid na tela */
  

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* Reduz para 3 colunas em telas menores */
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* Reduz para 2 colunas em telas ainda menores */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Uma coluna em telas pequenas */
  }
`;

