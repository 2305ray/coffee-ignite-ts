// RemoveButton.tsx
import { Trash } from 'phosphor-react';
import { useCart } from '../../../context/cartContext';
import React from 'react';

interface RemoveButtonProps {
  id: number;
}

export default function RemoveButton({ id }: RemoveButtonProps) {
  const { cartItems, setCartItems } = useCart();

  function handleRemove() {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  }

  return (
    <button onClick={handleRemove} className='remover' type='button'>
      <Trash size={20} color="#8047F8" />
      Remover
    </button>
  );
}
