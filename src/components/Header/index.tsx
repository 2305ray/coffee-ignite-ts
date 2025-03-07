import React, { useEffect, useState } from "react";
import { ContainerHeader } from "../Header/styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import LogoCoffee from "../../assets/LogoCoffee.svg";
import { NavLink } from "react-router-dom";

export function Header() {
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60); // Se passar de 50px, muda o fundo
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ContainerHeader isScrolled={isScrolled} className={isScrolled ? 'containerScrolled' : 'containerNotScrolled'}>
  <img src={LogoCoffee} alt="Logo Coffee" />
  <nav>
    <NavLink className="map" to="/" title="locale">
      <MapPin size={28} weight="fill" />
      Porto Alegre, RS
    </NavLink>

    <NavLink className="cart" to="" title="cart">
      <ShoppingCart size={28} weight="fill" />
    </NavLink>
  </nav>
</ContainerHeader>

  );
}
