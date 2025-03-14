import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { CartProvider } from './context/cartContext'

const rootElement = document.getElementById('root') as HTMLElement;

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
