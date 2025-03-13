import { createContext, useContext, useState } from "react";
import type {ReactNode} from 'react'
import React from 'react'

interface CartItem {
  id: number;
  title: string;
  image: string;
  quantity: number;
 description: string;
 categories: string[];
 footer: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

function addToCart(newItem: CartItem) {
  const itemExists = cartItems.find(item => item.id === newItem.id)

  const updatedCart = itemExists
    ? cartItems.map(item =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + newItem.quantity }
          : item
      )
    : [...cartItems, newItem]

  setCartItems(updatedCart)
}


  function increaseQuantity(id: number) {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartItems(updatedCart);
  }

  function decreaseQuantity(id: number) {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
