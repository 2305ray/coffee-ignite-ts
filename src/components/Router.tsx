import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/home/index'
import { Shopping } from './Pages/Shopping/index'
import { DefaultLayout } from '../Layouts/Default/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}> {/* Layout para todas as páginas dentro dessa rota */}
        <Route path='/' element={<Home />} />
        <Route path='/Shopping' element={<Shopping />} />
      </Route>
    </Routes>
  )
}
