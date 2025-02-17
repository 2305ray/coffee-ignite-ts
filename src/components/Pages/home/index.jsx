import React from "react";
import café from '../../../assets/café.svg';
import { Package, ShoppingCart, Timer, Coffee } from "phosphor-react";
import { ContainerCoffee, QualitysBrandConatiner, SeparatorImage } from './styles';

export function Home() {
  return (
    <div>
      <ContainerCoffee>
        <SeparatorImage>
          <div className="content">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>

            <QualitysBrandConatiner>
                <div>
                    <p>
                        <span className="ShoppingCart ">
                            <ShoppingCart size={22} weight="fill" />
                        </span>
                        Compra simples e segura
                    </p> 
                </div>

                <div>
                    <p>
                        <span className="Package">
                            <Package size={22} weight="fill" />
                        </span>
                        Embalagem mantém o café intacto
                    </p>
                </div>

                <div>
                    <p>
                        <span className="Timer">
                            <Timer size={22} weight="fill" />
                        </span>
                        Entrega rápida e rastreada
                    </p>
                    
                </div>

                <div>
                    <p>
                        <span className="Coffee">
                            <Coffee size={22} weight="fill" />
                        </span>
                        O café chega fresquinho até você
                    </p>
                </div>
            </QualitysBrandConatiner>


          </div>
          <img src={café} alt="Café" />
        </SeparatorImage>
      </ContainerCoffee>

      <section></section>
    </div>
  );
}
