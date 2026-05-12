import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// J'importe le conposant Banner.jsx
import Banner from './components/Banner'

import Cart from './components/Cart'

import ShoppingList from './components/ShoppingList'

import QuestionForm from './components/QuestionForm'

import Footer from './components/Footer'

import styles from './styles/Banner.module.css'

import logo from './assets/unsplash-logo.jpg';

function App() {
    
    const title = "Bienvenue à la maison jungle"
    /**
     * Lorsque j'appelle le composant <Banner>, j'y insère deux enfants <h1> et <img>.
     * Ces enfants sont récupérer dans Banner.jsx à l'aide de propos {children}.
     */
  return (
    <>
      <Banner>
        <img src={logo} alt="Logo La maison jungle" className={styles.bannerLogo} />
        <h1 className= {styles.title} >{title}</h1>
      </Banner>
      <Cart />
      <ShoppingList />
      <QuestionForm />
      <Footer />
      
    </>
  )
}

export default App
