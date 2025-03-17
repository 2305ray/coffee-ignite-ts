import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/cartContext';
import { ShoppingCart } from 'phosphor-react';
import { ButtonCart } from './cartStyled';

export function CarrinhoButton() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const isCartEmpty = cartItems.length === 0;

  const handleGoToCart = () => {
    if (!isCartEmpty) {
      navigate('/shopping');
    }
  };

  return (
    <ButtonCart 
      disabled={isCartEmpty}
      onClick={handleGoToCart} 
      className={!isCartEmpty ? "shoppingCart" : ""}
    >
      <ShoppingCart size={29} weight="fill" />
    </ButtonCart>
  );
}
