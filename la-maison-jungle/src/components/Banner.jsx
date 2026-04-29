/**
 * Banner est le composant pour présenter la bannière (la barre de navigation)
 * Le composant Banner retourne un message codé en HTML <h1>Bienvenue à la maison</h1>
 */
// j'importe le fichier Banner.css appliqué au composant Banner.jsx
import '../styles/Banner.css'
import logo from '../assets/unsplash-logo.jpg';

const Banner = () => {
    const title = "Bienvenue à la maison jugle "

    return ( 
        <div className="banner">
             <img src={logo}  alt="Logo La maison jungle" className="banner-logo" />
            <h1  className="banner-title">{title}</h1>
        </div>
     ) 
}

/**
 * J'exporte le composant banner en utilisant les mots-clès export default suivi du nom du composant
 */
export default Banner