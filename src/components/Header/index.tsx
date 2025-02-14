import React from "react"
import {  ContainerHeader } from "../Header/styles"
import { MapPin, ShoppingCart } from "phosphor-react"
import LogoCoffee from '../../assets/LogoCoffee.svg'

export function Header() {
    return (
        < ContainerHeader>
           <img src={LogoCoffee} />
            <nav>
                <a href=""><MapPin size={22} weight="fill" />Porto alegre</a>
                <a href="">
                <ShoppingCart size={22} weight="fill" />
                </a>
            </nav>
        </ ContainerHeader>
        
    )
}