import { Minus, Plus } from "phosphor-react";
import { QuantityControl } from "./controls";
import { useCart } from "../../../context/cartContext";
import React from "react";
import type { CartItem } from "../../../context/cartContext";


interface QuantityControlProps {
  id: number;
  image: string;
  description: string;
  title: string;
  footer: number;
  quantity: number; 
  categories: string[];

  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  cartItems: CartItem[];
}


export function QuantityControls({
  id,
  image,
  description,
  title,
  categories,
  footer,
}: QuantityControlProps) {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart();

  const coffeeInCart = cartItems.find(item => item.id === id);
 const quantity = coffeeInCart?.quantity || 0; 

  return (
    <QuantityControl>
      <button type="button" onClick={() => decreaseQuantity(id)}>
        <Minus size={17} weight="bold" />
      </button>

      <span>{coffeeInCart?.quantity || 0}</span>

      <button
        type="button"
        onClick={() =>
          addToCart({
            id,
            image,
            description,
            title,
            categories,
            footer,
            quantity: quantity + 1 
          })
        }
      >
        <Plus size={17} weight="bold" />
      </button>
    </QuantityControl>
  );
}
