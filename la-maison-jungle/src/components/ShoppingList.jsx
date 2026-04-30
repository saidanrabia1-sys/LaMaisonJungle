/**
 * ShoppingList est une composant qui contient la liste des courses
 */


import styles from '../styles/ShoppingList.module.css'


// Je crée une liste de fleurs. par la suite, j'utiliserai la liste pour renvoyer des fleurs depuis le composant ShoppingList.
/*['monstera', 'ficus lyrata', 'pothos argenté', 'yucca', 'palmier', 'mawa fulera', 'mubwasera', 'langi langi'];*/

const plantList = [
    
    {  
    name: 'monstera',
    category: 'classique',
    id: '1',
    isBestSale: true
    },

    { id: '2',
    name: 'ficus lyrata',
    category: 'classique',
    isBestSale: false
    },

    { 
    name: 'pothos argenté',
    category: 'facile',
    id: '3',
    isBestSale: true
    },

    { 
    name: 'yucca',
    category: 'classique',
    id: '4',
    isBestSale: false
    },

    { 
    name: 'palmier',
    category: 'tropical',
    id: '5',
    isBestSale: false
    },

    { 
    name: 'mawa fulera',
    category: 'local',
    id: '6',
    isBestSale: true
    },

    { 
    name: 'mubwasera',
    category: 'local',
    id: '7',
    isBestSale: false
    },

    { 
    name: 'langi langi',
    category: 'local',
    id: '8',
    isBestSale: true
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
    </li>
  ))}
</ul>
</div>
       
    )
}

export default ShoppingList