import type { CartItem } from "../../../context/cartContext";

export function getCoffeeInCart(id: number, cartItems: CartItem[]) {
  return cartItems.find((item) => item.id === id);
}

export function handleIncrease(
  id: number, 
  coffee: CartItem,
  addToCart: (coffee: CartItem) => void,
  increaseQuantity: (id: number) => void,
  cartItems: CartItem[]
) {
  const coffeeInCart = getCoffeeInCart(id, cartItems);

  if (coffeeInCart) {
    increaseQuantity(id);
  } else {
    addToCart(coffee);
  }
}

export function handleDecrease(
  id: number, 
  decreaseQuantity: (id: number) => void, 
  cartItems: CartItem[]
) {
  const coffeeInCart = getCoffeeInCart(id, cartItems);

  if (coffeeInCart && coffeeInCart.quantity > 0) {
    decreaseQuantity(id);
  }
}

