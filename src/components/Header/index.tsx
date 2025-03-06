import React from "react";
import { ContainerHeader } from "../Header/styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import LogoCoffee from "../../assets/LogoCoffee.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <ContainerHeader>
      <img src={LogoCoffee}alt="Logo Coffee"  />
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
