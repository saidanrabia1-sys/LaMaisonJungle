

import { useState } from "react";


const QuestionForm = () => {

    const [inputValue, setInputValue] = useState('Tapez votre Texte')

    const checkValue = (value) => {
        if(!value.includes('p')) {
            setInputValue(value)
        }
    }

    return(
        <div>
            <textarea
             value={inputValue} 
             onChange={(e) => checkValue(e.target.value)} 
             />

            <button onClick={() => alert(inputValue)}> Envoyer </button>
        </div>
    )
}

export default QuestionForm