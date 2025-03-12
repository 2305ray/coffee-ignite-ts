import styled from "styled-components";

export const Container= styled.div`
 display: flex;
 justify-content: space-between;
`;

export const ContainerCompletePedido = styled.section `
flex-direction:column;
  h1 {
    color: ${props => props.theme['GRAY-300']};
  }
  width: 45rem;
  height: 36rem;
`;

export const ContainerEnderecoEntrega =  styled.div`
  margin-top: 1rem;
  display: flex; /* Para alinhar corretamente os elementos */
  flex-direction: column;
  background: ${props => props.theme['WHITE-300']};
  padding: 3rem;
  border-radius: 8px;
  width: 50rem;
  height: 26rem;
  box-shadow: ${props => props.theme["GRAY-100"]} 0px 0px 3px;


  .formularioContainer {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  input {
    display: flex;
  }
`;

export const ContentEntrega = styled.header`
  display: flex;
  align-items: center; /* Mantém o ícone e o título alinhados */
  gap: 0.5rem;

  .icon-wrapper {
   display: flex;
    align-items: center; 
    justify-content: center;
    
    /* SubiR o ícone */
    position: relative;
    bottom: 13px; 
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${props => props.theme['GRAY-500']};
    }
  }
`;




export const ContainerForm = styled.form`
  display: grid;
  gap: 1rem;
  grid-template-columns: auto auto auto; /* Ajusta os tamanhos dinamicamente */
  width: 100%;
`;

/* Ajuste dos Inputs */
export const Input = styled.input`
  padding: 0.8rem;
  box-shadow: ${props => props.theme["GRAY-200"]} 0px 0px 1.5px;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  background: ${props => props.theme['WHITE-500']};
  color: ${props => props.theme['GRAY-400']};
  font-weight: 400;

  &::placeholder {
  color:  ${props => props.theme['GRAY-200']};
  font-weight: 400;
  }

  &:focus{
    border: 1px solid  ${props => props.theme['YELLOW-500']};;
  }

  &.cep {
    grid-column: span 1; /* Mantém sozinho */
    width: 16rem;
  }

  &#rua {
    grid-column: span 3; /* Ocupa toda a linha */
   width: 100%;
  }

  &#numero {
    width: 16rem;
  }

  &#complemento {
    grid-column: span 2;
    width: 100%;
  }

  &#bairro {
    width: 16rem;
  }

  &#cidade {
    width: 22rem;
  }

  &#estado {
    width: 100%;
  }
`;




export const ContentPagamento = styled.div`
 display: flex;
  align-items: center; /* Mantém o ícone e o título alinhados */
  gap: 0.5rem;

  .icon-wrapper {
   display: flex;
    align-items: center; 
    justify-content: center;
    
    /* SubiR o ícone */
    position: relative;
    bottom: 13px; 
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${props => props.theme['GRAY-500']};
    }
  }
`;

export const PagamentoSection = styled.section`
margin-top: 1rem;
  display: flex; /* Para alinhar corretamente os elementos */
  flex-direction: column;
  background: ${props => props.theme['WHITE-300']};
  padding: 3rem;
  border-radius: 8px;
  width: 50rem;
  height: 17rem;
  box-shadow: ${props => props.theme["GRAY-100"]} 0px 0px 3px;

`

export const FormasDePagamento = styled.div`
display:grid;
gap: 1rem;
align-items: center;
justify-content: center;
margin-top: 3rem;
grid-template-columns: repeat(3, 1fr);

span{
  display: flex;
  align-items: flex-end;
  margin-right: 0.7rem;
  color: ${props => props.theme["PURPLE-300"]};
}

  button {
    display:flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme["GRAY-100"]};
    border: none;
    border-radius: 8px;
    height: 4rem;
    color: ${props => props.theme["GRAY-300"]};
    cursor: pointer;
    transition: filter 0.2s;
    

    &:hover{
     filter: brightness(0.9);
    }

    &:focus {
       background: ${props => props.theme["PURPLE-100"]};
       border: 1px solid ${props => props.theme["PURPLE-300"]};
    }
  }
`


