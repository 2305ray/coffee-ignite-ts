import React from "react";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Trash} from 'phosphor-react';
import { 
  ContainerCompletePedido, 
  Container, 
  ContainerEnderecoEntrega, 
  ContentEntrega,
  ContentPagamento, 
  ContainerForm, 
  Input, 
  PagamentoSection, 
  FormasDePagamento,
  ContainerSelectCoffees,
  HeaderSelectCoffee,
  CoffeeInfo,
  SelecionadosName,
  ButtonsContent,
  ContainerCafesSelecionados,
  SomaItens,
} from './styles';

import { QuantityControls } from '../../actions/quantityControls/QuantityControls';
import RemoveButton from '../../actions/remove/removeCart';
import { useCart } from '../../../context/cartContext';

export function Shopping() {
  const { cartItems } = useCart();

  return (
    <Container>
      <ContainerCompletePedido>
        <h1>Complete seu pedido</h1>

        <ContainerEnderecoEntrega> 
          <section className="formularioContainer">
            <ContentEntrega>
              <div className="icon-wrapper">
                <MapPinLine size={25} color='#C47F17' />
              </div>
              <div className="text-container">
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </ContentEntrega>

            <ContainerForm>
              <Input type="text" id="cep" placeholder="CEP" />
              <Input type="text" id="rua" placeholder="Rua" />
              <Input type="text" id="numero" placeholder="Número" />
              <Input type="text" id="complemento" placeholder="Complemento" />
              <Input type="text" id="bairro" placeholder="Bairro"/>
              <Input type="text" id="cidade" placeholder="Cidade" />
              <Input type="text" id="estado" placeholder="UF" />
            </ContainerForm>
          </section>
        </ContainerEnderecoEntrega> 

        <PagamentoSection>
          <ContentPagamento>
            <div className="icon-wrapper">
              <CurrencyDollar size={25} color='#8047F8' />
            </div>
            <div className="text-container">
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </ContentPagamento>

          <FormasDePagamento>
            <button type="button"> 
              <span><CreditCard size={20} /></span>
              CARTÃO DE CRÉDITO
            </button>
            <button type="button"> 
              <span><Bank size={20} /></span>
              CARTÃO DE DÉBITO
            </button>
            <button type="button"> 
              <span><Money size={20} /></span>
              DINHEIRO
            </button>
          </FormasDePagamento>
        </PagamentoSection>
      </ContainerCompletePedido>

      <section>
        <h1>Cafés selecionados</h1>

        <ContainerSelectCoffees>
          {cartItems.map(cafe => (
            <ContainerCafesSelecionados key={cafe.id}>
              <HeaderSelectCoffee>
                <img className="image" src={cafe.image} alt={cafe.title} />

                <CoffeeInfo>
                  <SelecionadosName>
                    <p>{cafe.title}</p>
                    <p className="price">R$ {cafe.footer.toLocaleString('pt-BR', {
                minimumFractionDigits: 2
              })}</p>
                  </SelecionadosName>    

                  <ButtonsContent>
                    <QuantityControls 
                      id={cafe.id} 
                      quantity={cafe.quantity} 
                      image={cafe.image}
                      title={cafe.title}
                      description={cafe.description}
                      footer={cafe.footer}
                      categories={cafe.categories}
                    />

                    <RemoveButton id={cafe.id} />
                  </ButtonsContent>
                </CoffeeInfo>
              </HeaderSelectCoffee>
            </ContainerCafesSelecionados>
          ))}


          <SomaItens>
                        
                            <p>Total de itens <span>R$ 29,70</span></p>
                        
                            <p>Entrega <span>R$ 3,50</span></p>
                  
                            <p>Total <span>R$ 33,20</span></p>
                          
                        <footer>
                            <button type="submit">Confirmar Pedido</button>
                        </footer>
                    </SomaItens>
        </ContainerSelectCoffees>
      </section>
    </Container>
  );
}
