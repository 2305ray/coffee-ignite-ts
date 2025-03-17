import React, { createContext, useState, useContext } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

export interface CartItem {
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
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
  setCartItems((prevItems) => {
    const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);

    if (itemExists) {
      return prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...prevItems, { ...item, quantity: 1 }];
  });
}

  function increaseQuantity(id: number) {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartItems(updatedCart);
  }

  function decreaseQuantity(id: number) {
    const updatedCart = cartItems
      .map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
      .filter(item => item.quantity > 0);

    setCartItems(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
