import React from "react";
import café from '../../../assets/café.svg';
import { ComprasDeCafe, ContainerCoffee } from './cafés'
import { expressoTradicional, expressoAmericano, expressoCremoso, expressoGelado, 
  caféComLeite, latte, capuccino, macchiato, mocaccino, chocolateQuente, cubano,
  havaiano, arabe, irlandes } from './cafesSvg';
import { Package, ShoppingCart, Timer, Coffee } from "phosphor-react";
import { ContainerShop, QualitysBrandConatiner, SeparatorImage } from './styles';


interface CoffeeProps {
  image: string;
  title: string;
  description: string;
  footer: string;
  about?: string | string[];
}

export const coffeeList = [
  {
    id: 1, 
    image: expressoTradicional, 
    about: "Tradicional",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 'R$9,90'
  },
  {
     id: 2,
     image: expressoAmericano,
     about: "Tradicional",
     title: "Expresso Americano",
     description: "Expresso diluído, menos intenso que o tradicional",
     footer: 'R$9,90'
  },
  { 
    id: 3,
    image: expressoCremoso, 
    about: ["Tradicional"],
    title: "Expresso Cremoso", 
    description: "Café expresso tradicional com espuma cremosa", 
    footer: 'R$9,90' 
  },
  { 
    id: 4,
    image: expressoGelado, 
    about: ["Tradicional", "Geleado"],
    title: "Expresso Gelado", 
    description: "Bebida preparada com café expresso e cubos de gelo", 
    footer: 'R$9,90' 
  },
  { 
    id: 5,
    image: caféComLeite, 
    title: "Café com Leite", 
    description: "Meio a meio de expresso tradicional com leite vaporizado", 
    footer: 'R$9,90' },
  { 
    id: 6,
    image: latte, 
    title: "Latte", 
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa", 
    footer: 'R$9,90' 
  },
  { 
    id: 7,
    image: capuccino, 
    title: "Capuccino", 
    description: "Bebida com canela feita de doses iguais de café, leite e espuma", 
    footer: 'R$9,90' 
  },
  { 
    id: 8,
    image: macchiato, 
    title: "Macchiato", 
    description: "Café expresso misturado com um pouco de leite quente e espuma", 
    footer: 'R$9,90' 
  },
  { 
    id: 9,
    image: mocaccino, 
    title: "Mocaccino", 
    description: "Café expresso com calda de chocolate, pouco leite e espuma", 
    footer: 'R$9,90' 
  },
  { 
    id: 10,
    image: chocolateQuente, 
    title: "Chocolate Quente", 
    description: "Bebida feita com chocolate dissolvido no leite quente e café", 
    footer: 'R$9,90' 
  },
  { 
    id: 11,
    image: cubano, 
    title: "Cubano", 
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã", 
    footer: 'R$9,90' 
  },
  { 
    id: 12,
    image: havaiano, 
    title: "Havaiano", 
    description: "Bebida adocicada preparada com café e leite de coco", 
    footer: 'R$9,90' 
  },
  { 
    id: 13,
    image: arabe, 
    title: "Árabe", 
    description: "Bebida preparada com grãos de café árabe e especiarias", 
    footer: 'R$9,90' 
  },
  { 
    id: 14,
    image: irlandes, 
    title: "Irlandês", 
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly", 
    footer: 'R$9,90' 
  }
];

export function BuyACoffee({ image, description, title, about, footer }: CoffeeProps) {
  return (

    <ComprasDeCafe>
      <div>
        <header>
          <img src={image} alt={`Imagem do ${title}`} />
        </header>
        <p>{about}</p>
        <h5>{title}</h5>
        <p>{description}</p>
        <footer>
          {footer}

            <button type="button">- <span>1</span> +</button>
            
        </footer>
      </div>
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

      <ContainerCoffee>
        {coffeeList.map((coffee) => (
          <BuyACoffee 
            key={coffee.id}
            image={coffee.image}
            about={coffee.about}
            title={coffee.title}
            description={coffee.description}
            footer={coffee.footer}
          />
        ))}
      </ContainerCoffee>
    </div>
  );
}
