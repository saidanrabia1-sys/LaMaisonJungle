/**
 * ShoppingList est une composant qui contient la liste des courses
 */

// Conteneur principal de la liste
/* Liste non ordonnée avec le style CSS module */
/* On parcourt chaque plante du tableau plantList */
/* Carte individuelle — key obligatoire pour React */
/* Affiche ❤️ si best-seller, 🪷 sinon */
 /* Nom de la plante */

         
   

import styles from '../styles/ShoppingList.module.css'

import CareScale from './CareScale'


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
    light: 5
    },

    { id: '2',
    name: 'ficus lyrata',
    category: 'classique',
    isBestSale: false,
    isSpecialOffer: false,
    water: 2,
    light: 5
    },

    { 
    name: 'pothos argenté',
    category: 'facile',
    id: '3',
    isBestSale: true,
    isSpecialOffer: true,
    water: 3,
    light: 4
    },

    { 
    name: 'yucca',
    category: 'classique',
    id: '4',
    isBestSale: false,
    isSpecialOffer: false,
    water: 1,
    light: 5
    },

    { 
    name: 'palmier',
    category: 'tropical',
    id: '5',
    isBestSale: false,
    isSpecialOffer: false,
    water: 3,
    light: 2
    },

    { 
    name: 'mawa fulera',
    category: 'local',
    id: '6',
    isBestSale: true,
    isSpecialOffer: true,
    water: 1,
    light: 6
    },

    { 
    name: 'mubwasera',
    category: 'local',
    id: '7',
    isBestSale: false,
    isSpecialOffer: false,
    water: 2,
    light: 3
    },

    { 
    name: 'langi langi',
    category: 'local',
    id: '8',
    isBestSale: true,
    isSpecialOffer: true,
    water: 2,
    light: 2
    },
    
] 
    
const ShoppingList = () => {
    return (
        <div className={styles.plantList}>
        <ul className={styles.lmjPlantList}>
        {plantList.map((plant) => (
        <li key={plant.id} className={styles.lmjPlantItem}>
        {plant.isBestSale ? <span> ❤️ </span>: <span > 🪷 </span>
      }
      {plant.name}
      {plant.isSpecialOffer ? <span className={styles.lmjSales}>solde</span> : <span></span>}

      <CareScale careType="light" scaleValue={plant.light}></CareScale>
      <CareScale careType="water" scaleValue={plant.water}></CareScale>
    </li>
  ))}
</ul>
</div>
       
    )
}

export default ShoppingList

