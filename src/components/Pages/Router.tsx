import { Route, Routes } from 'react-router-dom'
import { Home } from './home/index'
import React from 'react'



export function Router() {
<Routes>
    <Route path='/' element={<Home />} />
    
</Routes>
}