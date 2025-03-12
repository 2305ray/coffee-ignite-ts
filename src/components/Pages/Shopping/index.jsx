import React from "react";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money} from 'phosphor-react';
import { 
    ContainerCompletePedido, 
    Container, 
    ContainerEnderecoEntrega, 
    ContentEntrega,
    ContentPagamento, 
    ContainerForm, 
    Input, 
    PagamentoSection, 
    FormasDePagamento
} from './styles';

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
                <div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <p>Café Especial</p>
                            <p>Descrição do café</p>   
                        </div>
                        <div>
                            <button type="button">Adicionar</button>
                            <button type="button">Remover</button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Subtotal</p>
                            <p>R$ 30,00</p>
                        </div>

                        <div>
                            <p>Frete</p>
                            <p>R$ 5,00</p>
                        </div>

                        <div>
                            <p>Total</p>
                            <p>R$ 35,00</p>
                        </div>

                        <footer>
                            <button type="submit">Finalizar Pedido</button>
                        </footer>
                    </div>
                </div>
            </section>
        </Container>
    );
}
