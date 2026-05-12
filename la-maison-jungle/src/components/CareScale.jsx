
const quantityLabel = {
    1: 'peu',
    2: 'medérement',
    3: 'beaucoup'
}

const CareScale = ({scaleValue, careType}) => {
    const renge = [1, 2, 3];
    const scaleType = careType === 'light' ? '🌤️' : '🚿';

    return(
        <div
            onClick={() => {
                alert(`Cette plante a besoin de ${quantityLabel[scaleValue]} ${
                    careType === "light" ? "de la lumière" : "d'orrosage"
                }`)
            }}
        >
            {
                renge.map((rangeElement) => 
                    scaleValue >= rangeElement ? (
                    <span key={rangeElement.toString()}> {scaleType} </span>) : null
                )
            }
        </div>
    )
}

export default CareScale;
