


const CareScale = ({scaleValue, careType}) => {
    const renge = [1, 2, 3];
    const scaleType = careType === 'light' ? '🌤️' : '🚿';

    return(
        <div>
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
