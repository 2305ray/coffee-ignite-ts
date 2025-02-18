import React from "react";
import café from '../../../assets/café.svg';
import { ComprasDeCafe } from './cafés'
import { expressoTradicional, expressoAmericano,expressoCremoso,expressoGelado, 
  caféComLeite, latte, capuccino, macchiato, mocaccino, chocolateQuente, cubano,
  havaiano, arabe, irlandes } from './cafesSvg';
import { Package, ShoppingCart, Timer, Coffee } from "phosphor-react";
import { ContainerCoffee, QualitysBrandConatiner, SeparatorImage } from './styles';


 interface CoffeeProps {
  image: string;       // Caminho da imagem
  title: string;       // Título do café
  description: string; // Descrição do café
  footer: string;
  
}

export const coffeeList = [
  {
    image: expressoTradicional,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image: expressoAmericano,
    title: "Expresso Americano",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image: expressoCremoso,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image: expressoGelado,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image: caféComLeite,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image: latte,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image: capuccino,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image:  macchiato,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image: mocaccino,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image: chocolateQuente,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image: cubano,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image:  havaiano,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image:  arabe,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
    image: irlandes,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
 
];

export function BuyACoffee({ image, title, description, footer }: CoffeeProps) {
  return (
          <ComprasDeCafe>
            <div>
              <header>
                  <img src={image} />
              </header>

             
                  <h5>{title}</h5>
                  <p>{description}</p>
               

              <footer>{footer}</footer>
             </div>
          


      
  
</ComprasDeCafe>
)
}


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

      <ContainerCoffee>
          {coffeeList.map((coffee, index) => (
          <BuyACoffee 
          key={index}  // A chave única para cada item da lista
          image={coffee.image}
          title={coffee.title}
          description={coffee.description}
          footer={coffee.footer}
        />
        ))}

      </ContainerCoffee>
    </div>
  );
}
