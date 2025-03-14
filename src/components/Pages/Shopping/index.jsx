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
} from './styles';
import { coffeeList } from '../home/cafés'
import { QuantityControls } from '../../actions/quantityControls/QuantityControls';
import { RemoveButton } from '../../actions/remove/removeCart'



export function Shopping() {
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
                            <Input type="text" id="cep" className="cep" placeholder="CEP" />
                            <Input type="text" id="rua" className="rua" placeholder="Rua" />
                            <Input type="text" id="numero" className="numero" placeholder="Número" />
                            <Input type="text" id="complemento" className="complemento" placeholder="Complemento" />
                            <Input type="text" id="bairro" className="bairro" placeholder="Bairro"/>
                            <Input type="text" id="cidade" className="cidade" placeholder="Cidade" />
                            <Input type="text" id="estado" className="estado" placeholder="UF" />
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
                        <button  type="button"> 
                            <span><CreditCard size={20} /></span>
                            CARTÃO DE CRÉDITO
                        </button>
                        <button  type="button"> 
                            <span><Bank size={20} /></span>
                            CARTÃO DE DÉBITO
                        </button>
                        <button  type="button"> 
                            <span><Money size={20} /></span>
                            DINHEIRO
                        </button>
                   </FormasDePagamento>
                </PagamentoSection>
            </ContainerCompletePedido>

            
            <section>
                <h1>Cafés selecionados</h1>

                <ContainerSelectCoffees>

            {coffeeList.map((cafe) => (
                <ContainerCafesSelecionados key={cafe.id}>
                    <HeaderSelectCoffee>
                    <img className="image" src={cafe.image} alt={cafe.title} />

                    <CoffeeInfo>
                        <SelecionadosName>
                        <p>{cafe.title}</p>
                        <p className="price">{cafe.footer.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2
                        })}</p>
                        </SelecionadosName>    

                        <ButtonsContent>
                        <QuantityControls />
                        <RemoveButton className="remover" id={cafe.id} />
                        </ButtonsContent>
                    </CoffeeInfo>
                    </HeaderSelectCoffee>
                </ContainerCafesSelecionados>

            ))}


                    <div>
                        <div>
                            <p>Total de itens</p>
                            <p>R$ 29,70</p>
                        </div>

                        <div>
                            <p>Entrega</p>
                            <p>R$ 3,50</p>
                        </div>

                        <div>
                            <p>Total</p>
                            <p>R$ 33,20</p>
                        </div>

                        <footer>
                            <button type="submit">Confirmar Pedido</button>
                        </footer>
                    </div>
                </ContainerSelectCoffees>
            </section>
        </Container>
    );
}
