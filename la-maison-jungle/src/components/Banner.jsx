/**
 * Banner est le composant pour présenter la bannière (la barre de navigation)
 * Le composant Banner retourne un message codé en HTML <h1>Bienvenue à la maison</h1>
 */
// j'importe le fichier Banner.module.css appliqué au composant Banner.jsx
import styles from '../styles/Banner.module.css'

import logo from '../assets/unsplash-logo.jpg';

/**
 * 
 * @param {*} param0 
 * @returns 
 * Le composant Banner.jsx prend comme propos ses enfants déclarés dans le composant App.jsx
 * J'utilise {children} pour faire appel aux propos venant du composant <Banner> <Banner> déclaré dans le composant App.jsx 
 * Le composant Banner.jsx retourne un <div>
 */

const Banner = ({children}) => {

    return ( 
        <div className={styles.banner}>
            {children}
        </div>
    ) 
}

export default Banner