import React from "react";
import café from '../../../assets/café.svg';
import { ComprasDeCafe, ContainerCoffee, ContainerAll, Content } from './ListaDeCafés';
import { Package, ShoppingCart, Timer, Coffee, Minus, Plus, Link } from "phosphor-react";
import { ContainerShop, QualitysBrandConatiner, Rodape, SeparatorImage } from './styles';
import { coffeeList } from "./cafés";
import type { CoffeeProps } from "./cafés";
import { useCart } from '../../../context/cartContext';
import { QuantityControls } from '../../actions/quantityControls/QuantityControls';
import { NavLink } from "react-router-dom";

export function BuyACoffee({ id, image, description, title, categories, footer }: CoffeeProps) {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <ComprasDeCafe>
      <Content>
        <header>
          <img src={image} alt={`Imagem do ${title}`} />
        </header>
        <p className="categories">
          {categories.map((tag) => (
            <span key={tag} className="tag-item">{tag}</span>
          ))}
        </p>
        <h5>{title}</h5>
        <p>{description}</p>
        <section>
          <p className="paragraph">R$
            <span>
              {footer.toLocaleString('pt-BR', {
                minimumFractionDigits: 2
              })}
            </span>
          </p>

      
          <QuantityControls
            id={id}
            image={image}
            description={description}
            title={title}
            footer={footer}
            quantity={0} 
            categories={[]}
            addToCart={addToCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            cartItems={cartItems}
          />

            <NavLink  to="/shopping" title="cart">
              <button className="ShoppingCart" type="button">
                <ShoppingCart size={29} weight="fill" />
              </button>
            </NavLink>
            
           
        </section>
      </Content>
    </ComprasDeCafe>
  );
}

export function Home() {
  return (
    <div>
      <ContainerShop>
        <SeparatorImage>
          <div className="content">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>

            <QualitysBrandConatiner>
              <div>
                <p>
                    <span className="ShoppingCart">
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
          <img src={café} alt="Imagem de um café" />
        </SeparatorImage>
      </ContainerShop>

      <ContainerAll>
        <h1>Nossos Cafés</h1>
      </ContainerAll>

      <ContainerCoffee>
        {coffeeList.map((coffee) => (
          <BuyACoffee 
            key={coffee.id}
            {...coffee}
          />
        ))}
      </ContainerCoffee>

      <Rodape> </Rodape>
    </div>
  );
}
