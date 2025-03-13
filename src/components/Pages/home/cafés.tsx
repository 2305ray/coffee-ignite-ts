 import { Minus, Plus } from 'phosphor-react';
import { QuantityControl } from './ListaDeCafés'
import { expressoTradicional, expressoAmericano, expressoCremoso, expressoGelado, 
  caféComLeite, latte, capuccino, macchiato, mocaccino, chocolateQuente, cubano,
  havaiano, arabe, irlandes } from './cafesSvg';

export interface CoffeeProps {
  id: number;
  image: string;
  title: string;
  description: string;
  footer: number;
  categories: string[];
}


export const coffeeList = [
  {
    id: 1, 
    image: expressoTradicional, 
    categories: ["TRADICIONAL"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    footer: 9.90
  },
  {
     id: 2,
     image: expressoAmericano,
     categories: ["TRADICIONAL"],
     title: "Expresso Americano",
     description: "Expresso diluído, menos intenso que o tradicional",
     footer: 9.90
  },
  { 
    id: 3,
    image: expressoCremoso, 
    categories: ["TRADICIONAL"],
    title: "Expresso Cremoso", 
    description: "Café expresso tradicional com espuma cremosa", 
    footer: 9.90 
  },
  { 
    id: 4,
    image: expressoGelado, 
    categories: ["TRADICIONAL", "GELADO"],
    title: "Expresso Gelado", 
    description: "Bebida preparada com café expresso e cubos de gelo", 
    footer: 9.90 
  },
  { 
    id: 5,
    image: caféComLeite, 
    categories: ["TRADICIONAL", "COM LEITE"],
    title: "Café com Leite", 
    description: "Meio a meio de expresso tradicional com leite vaporizado", 
    footer: 9.90 
  },
  { 
    id: 6,
    image: latte, 
    categories: ["TRADICIONAL", "COM LEITE"],
    title: "Latte", 
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa", 
    footer: 9.90 
  },
  { 
    id: 7,
    image: capuccino, 
    categories: ["TRADICIONAL", "COM LEITE"],
    title: "Capuccino", 
    description: "Bebida com canela feita de doses iguais de café, leite e espuma", 
    footer: 9.90
  },
  { 
    id: 8,
    image: macchiato, 
    categories: ["TRADICIONAL", "COM LEITE"],
    title: "Macchiato", 
    description: "Café expresso misturado com um pouco de leite quente e espuma", 
    footer: 9.90 
  },
  { 
    id: 9,
    image: mocaccino, 
    categories: ["TRADICIONAL", "COM LEITE"],
    title: "Mocaccino", 
    description: "Café expresso com calda de chocolate, pouco leite e espuma", 
    footer: 9.90 
  },
  { 
    id: 10,
    image: chocolateQuente, 
    categories: ["TRADICIONAL", "COM LEITE"],
    title: "Chocolate Quente", 
    description: "Bebida feita com chocolate dissolvido no leite quente e café", 
    footer: 9.90 
  },
  { 
    id: 11,
    image: cubano, 
    categories: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    title: "Cubano", 
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã", 
    footer: 9.90 
  },
  { 
    id: 12,
    image: havaiano,
    categories: ["ESPECIAL"], 
    title: "Havaiano", 
    description: "Bebida adocicada preparada com café e leite de coco", 
    footer: 9.90
  },
  { 
    id: 13,
    image: arabe, 
    categories: ["ESPECIAL"],
    title: "Árabe", 
    description: "Bebida preparada com grãos de café árabe e especiarias", 
    footer: 9.90 
  },
  { 
    id: 14,
    image: irlandes, 
    categories: ["ESPECIAL", "ALCOÓLICO"],
    title: "Irlandês", 
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly", 
    footer: 9.90 
  }
];


import React from 'react';

export function AdicionarItem() {
    return (
  <QuantityControl>
              <button type="button"><Minus size={17} weight='bold' /></button>
              <span>1</span>
              <button type="button"><Plus size={17} weight='bold'/></button>
    </QuantityControl>
 )
}

