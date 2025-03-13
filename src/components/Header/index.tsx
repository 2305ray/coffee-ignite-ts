import React, { useEffect, useState } from "react";
import { ContainerHeader, CartContainer, CartCount } from "../Header/styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import LogoCoffee from "../../assets/LogoCoffee.svg";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import type { CartItem } from '../../context/cartContext'

export function Header() {
const [isScrolled, setIsScrolled] = useState(false);
const { cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60); // Se passar de 50px, muda o fundo
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ContainerHeader $isScrolled={isScrolled} className={isScrolled ? 'containerScrolled' : 'containerNotScrolled'}>
  <img src={LogoCoffee} alt="Logo Coffee" />
  <nav>
    <NavLink className="map" to="/" title="locale">
      <MapPin size={23} weight="fill" />
      Porto Alegre, RS
    </NavLink>

    <CartContainer>
  <NavLink className="cart" to="" title="cart">
    <ShoppingCart size={23} weight="fill" />
  </NavLink>
     {cartItems.length > 0 && (
    <CartCount>
      {cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0)}
    </CartCount>
  )}
</CartContainer>

  </nav>
</ContainerHeader>

  );
}
