import { useState } from 'react';
import { containerStyles, buttonGroupStyles, counterStyles } from '../styles/itemCount.styles';

function ItemCount({ onAddToCart }) {
    const [counter, setCount] = useState(0);

    const handleSumar = () => {
        setCount(counter + 1);
    };

    const handleRestar = () => {
        if (counter > 0) setCount(counter - 1);
    };

    const handleAddToCart = () => {
        if (counter > 0) {
            onAddToCart(counter);
        }
    };

    return (
        <div style={containerStyles}>
            <div style={buttonGroupStyles}>
                <button onClick={handleRestar} aria-label="Decrease quantity">-</button>
                <span style={counterStyles}>{counter}</span>
                <button onClick={handleSumar} aria-label="Increase quantity">+</button>
            </div>
            <div>
                <button onClick={handleAddToCart} aria-label="Add to cart">Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;