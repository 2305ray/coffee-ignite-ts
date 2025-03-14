import { Minus, Plus } from "phosphor-react";
import React from "react";
import { QuantityControl } from "./controls"
import { useCart } from "../../../context/cartContext";
import {
  getCoffeeInCart,
  handleIncrease,
  handleDecrease,
} from "./quantityControl";
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

  const coffeeInCart = getCoffeeInCart(id, cartItems);

  return (
    <QuantityControl>
      <button
        type="button"
        onClick={() => handleDecrease(id, decreaseQuantity, cartItems)}
      >
        <Minus size={17} weight="bold" />
      </button>

      <span>{coffeeInCart?.quantity || 0}</span>

      <button
        type="button"
        onClick={() =>
          handleIncrease(Number(id), 
          { 
            id,
            image,
            description,
            title,
            categories,
            footer,
            quantity: 1  
          },
            addToCart,
            increaseQuantity, 
            cartItems
          )
        }
      >
        <Plus size={17} weight="bold" />
      </button>
    </QuantityControl>
  );
}
