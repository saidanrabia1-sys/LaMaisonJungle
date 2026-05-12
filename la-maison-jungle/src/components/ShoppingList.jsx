/**
 * ShoppingList est une composant qui contient la liste des courses
 */

// Conteneur principal de la liste
/* Liste non ordonnée avec le style CSS module */
/* On parcourt chaque plante du tableau plantList */
/* Carte individuelle — key obligatoire pour React */
/* Affiche ❤️ si best-seller, 🪷 sinon */
 /* Nom de la plante */

         
import yucca from '../assets/yucca-logo.jpg'

import styles from '../styles/ShoppingList.module.css'

import CareScale from './CareScale'

import PlantItem from './PlantItem'

import monsteraImg from '../assets/monstera-unsplash.jpg'

import ficusLyrataImg from '../assets/ficusLyrata-logo.jpg'

import pothosArgenté from '../assets/pothosArgenté-logo.jpg'

import palmier from '../assets/palmier-logo.jpg'

import mawaFulera from '../assets/mawaFulera-logo.jpg'



// Je crée une liste de fleurs. par la suite, j'utiliserai la liste pour renvoyer des fleurs depuis le composant ShoppingList.
/*['monstera', 'ficus lyrata', 'pothos argenté', 'yucca', 'palmier', 'mawa fulera', 'mubwasera', 'langi langi'];*/

const plantList = [
    
    {  
    name: 'monstera',
    category: 'classique',
    id: '1',
    isBestSale: true,
    isSpecialOffer: true,
    water: 1,
    light: 5,
    cover: monsteraImg
    },

    { id: '2',
    name: 'ficus lyrata',
    category: 'classique',
    isBestSale: false,
    isSpecialOffer: false,
    water: 2,
    light: 5,
    cover: ficusLyrataImg
    },

    { 
    name: 'pothos argenté',
    category: 'facile',
    id: '3',
    isBestSale: true,
    isSpecialOffer: true,
    water: 3,
    light: 4,
    cover: pothosArgenté
    },

    { 
    name: 'yucca',
    category: 'classique',
    id: '4',
    isBestSale: false,
    isSpecialOffer: false,
    water: 1,
    light: 5,
    cover: yucca
    },

    { 
    name: 'palmier',
    category: 'tropical',
    id: '5',
    isBestSale: false,
    isSpecialOffer: false,
    water: 3,
    light: 2,
    cover: palmier
    },

    { 
    name: 'mawa fulera',
    category: 'local',
    id: '6',
    isBestSale: true,
    isSpecialOffer: true,
    water: 1,
    light: 6,
    cover: mawaFulera
    },

    { 
    name: 'mubwasera',
    category: 'local',
    id: '7',
    isBestSale: false,
    isSpecialOffer: false,
    water: 2,
    light: 3,
    cover: 'https://via.placeholder.com/200x200?text=Mubwasera'
    },

    { 
    name: 'langi langi',
    category: 'local',
    id: '8',
    isBestSale: true,
    isSpecialOffer: true,
    water: 2,
    light: 2,
    cover: 'https://via.placeholder.com/200x200?text=Langi+Langi'
    },
    
] 
    
const ShoppingList = () => {
    return (
        <div>
            <ul className={styles.lmjPlantList}>
                {plantList.map(({ id, name, water, light, isBestSale, cover }) => (
                    <PlantItem
                        key={id}
                        id={id}
                        name={name}
                        water={water}
                        light={light}
                        isBestSale={isBestSale}
                        cover={cover}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList

