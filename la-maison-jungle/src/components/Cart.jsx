/**
 * Le composant cart représente le panier de courses.
 * Le composant cart sera réutilisé dans le composant App.
 */


const Cart = () => {
    const monstera = 8
    const lierre = 12
    const bouquet = 9

    return(
        <div>
             <h2>Votre panier</h2>
        <ul>
            <li>Monstera : {monstera} €</li>
            <li>Lierre : {lierre} $</li>
            <li>Bouquet de fleurs : {bouquet} €</li>
        </ul>
        <p>Total : {monstera + lierre + bouquet} €</p>
        </div>
    )
}

export default Cart 