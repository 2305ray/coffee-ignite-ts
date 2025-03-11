import React from "react";

export function Shopping() {
    return (
        <>
        <section>
            <h1>Complete seu pedido</h1>
            <div>
                <section>
                    <h3>
                        Endereço de Entrega
                    </h3>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                    <form action="">
                        <input type="text" id="cep" placeholder="CEP" />
                        <input type="email" id="rua" placeholder="Rua"/>
                        <input type="email" id="numero" placeholder="Número" />
                        <input type="email" id="complemento" placeholder="Complemento opcional" />
                        <input type="email" id="bairro" placeholder="Bairro"/>
                        <input type="email" id="cidade" placeholder="Cidade"/>
                        <input type="email" id="estado" placeholder="Estado"/>
                    </form>


                </section>

                <section>
                    <h3>
                        Pagamento
                    </h3>
                    <p>O pagamento é feito na entrega.Escolha a forma que deseja pagar</p>
                    <div>
                        <button type="button"> gegthr</button>
                        <button type="button"> gegthr</button>
                        <button type="button"> gegthr</button>
                    </div>
                </section>
            </div>  
        </section>   


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
            
            </>
    );
}