import {useState, useEffect } from 'react'

function ItemCount(){
    const [counter, setCount] = useState(0)

    const handleSumar = () => {
        setCount(counter + 1)
    }
    const handleRestar = () => {
        setCount(counter - 1)
    }

    return (
        <div>
            <button onClick={handleRestar}>-</button>
            <button onClick={handleSumar}>+</button> Seleccionados: {counter}
        </div>
    );
}

export default ItemCount;