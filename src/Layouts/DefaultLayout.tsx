import { Outlet } from 'react-router-dom'
import { Header } from '../components/Pages/home/Header/index'
import React from 'react'

export function DefaultLayout() {
   // vai estar em todas as páginas 
   return (
    <div>
        <Header />
         <Outlet /> {/* /é um espaço pra inserir um conteúdo */}
    </div>
   )
}