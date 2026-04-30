import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// J'importe le conposant Banner.jsx
import Banner from './components/Banner'

import Cart from './components/Cart'

import ShoppingList from './components/ShoppingList'

function App() {

  return (
    <>
    
      <Banner />
      <Cart />
      <ShoppingList />
      
    </>
  )
}

export default App
