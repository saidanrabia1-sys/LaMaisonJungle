/**
 * Le composant PlantItem gère chaque plante vendue sur le site.
 * Exemple : chaque plante a un id, un nom, un type d'arrosage, un type d'éclairage
 */
/* Image de la plante — src reçoit l'URL, alt décrit l'image pour l'accessibilité */

import CareScale from "./CareScale"
import styles from "../styles/PlantItem.module.css";

import monsteraImg from '../assets/monstera-unsplash.jpg'


 const PlantItem = ({id, cover, name, water, light, isBestSale}) =>
 {
    return (
        <li key={id} className={styles.lmjPlantItem}>
        <img className={styles.lmjPlantItemCover} src={cover} alt={`${name} cover`} />
        {isBestSale && <div className={styles.lmjSales}>solde !</div>}
        {name}

        <div>
            <CareScale careType="water" scaleValue={water}/>
            <CareScale careType="light" scaleValue={light}/>

        </div>
        </li>
    )
 }

export default PlantItem