import React from "react";
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { ContainerCompletePedido, Container, ContainerEndereçoEntrega, ContentEntrega,
 ContentPagamento, ContainerForm, Input } from './styles'

export function Shopping() {
    return (
        <Container>
            <ContainerCompletePedido>
                
                <h1>Complete seu pedido</h1>
                <ContainerEndereçoEntrega>
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
                            <Input type="text" id="rua" placeholder="Rua"/>
                            <Input type="text" id="numero" placeholder="Número" />
                            <Input type="text" id="complemento" placeholder="Complemento opcional" />
                            <Input type="text" id="bairro" placeholder="Bairro"/>
                            <Input type="text" id="cidade" placeholder="Cidade"/>
                            <Input type="text" id="estado" placeholder="Estado"/>
                        </ContainerForm>


                    </section>

                    <section>
                          <ContentPagamento>
                             <div className="icon-wrapper">
                                <CurrencyDollar size={25} color='#8047F8' />
                            </div>
                            <div className="text-container">
                                <h3>Pagamento</h3>
                                <p>O pagamento é feito na entrega.Escolha a forma que deseja pagar</p>
                            </div>
                        </ContentPagamento>
                        
                        <div>
                            <button type="button"> gegthr</button>
                            <button type="button"> gegthr</button>
                            <button type="button"> gegthr</button>
                        </div>
                    </section>
                </ContainerEndereçoEntrega>  
            </ContainerCompletePedido>   


            <section>
                <h1>Cafés selecionados</h1>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <p>wergte</p>
                                <p>efwg</p>   
                            </div>
                            <div>
                                <button type="button">wrgq</button>
                                <button type="button">wrgq</button>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>rge</p>
                                <p>sdfg</p>
                            </div>

                            <div>
                                <p>rge</p>
                                <p>sdfg</p>
                            </div>

                            <div>
                                <p>rge</p>
                                <p>sdfg</p>
                            </div>

                            <footer>
                                <button type="submit">aefwg</button>
                            </footer>
                        </div>
                    </div>
                </section>
            
            </Container>
    );
}