/**
 * Banner est le composant pour présenter la bannière (la barre de navigation)
 * Le composant Banner retourne un message codé en HTML <h1>Bienvenue à la maison</h1>
 */
// j'importe le fichier Banner.module.css appliqué au composant Banner.jsx
import styles from '../styles/Banner.module.css'

import logo from '../assets/unsplash-logo.jpg';

const Banner = () => {
    const title = "Bienvenue à la maison jungle"

    return ( 
        <div className={styles.banner}>
            <img src={logo} alt="Logo La maison jungle" className={styles.bannerLogo} />
            <h1 className={styles.bannerTitle}>{title}</h1>
        </div>
    ) 
}

export default Banner