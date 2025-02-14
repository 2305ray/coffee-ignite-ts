import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
   // vai estar em todas as páginas 
   return (
    
      <LayoutContainer>
         <Header />
         <Outlet /> {/* /é um espaço pra inserir um conteúdo */}
      </LayoutContainer>
        
   
   );
}


