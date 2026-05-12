/**
 * Le composant PlantItem gère chaque plante vendue sur le site.
 * Exemple : chaque plante a un id, un nom, un type d'arrosage, un type d'éclairage
 */
/* Image de la plante — src reçoit l'URL, alt décrit l'image pour l'accessibilité */


import monsteraImg from '../assets/monstera-unsplash.jpg'

import ficusLyrataImg from '../assets/ficusLyrata-logo.jpg'

import CareScale from "./CareScale";

import styles from "../styles/PlantItem.module.css";

import pothosArgenté from "../assets/pothosArgenté-logo.jpg"

const PlantItem = ({ id, cover, name, water, light, isBestSale }) => {
    const handleClick = (plantName) => {
        console.log("Je clique sur mon evenement :", plantName);
    };

    return (
        <li key={id} className={styles.lmjPlantItem} onClick={() => handleClick(name)}>
            <img className={styles.lmjPlantItemCover} src={cover} alt={`${name} cover`} />
            {isBestSale && <div className={styles.lmjSales}>solde !</div>}
            {name}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    );
};

export default PlantItem;