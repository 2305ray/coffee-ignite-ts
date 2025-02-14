import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/home/index'

import { DefaultLayout } from '../Layouts/Default/DefaultLayout'




export function Router() {
<Routes>
     <Route path='/' element={<DefaultLayout />}> {/* ao colocar / todos q começarem vão pegar a aplicação do header */}
        <Route path='/' element={<Home />} />
    </Route>
</Routes>
}