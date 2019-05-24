import React from 'react';
import './Display.css';

const CaluclatorDisplay = props => {
    return (
        <div className='calc-display'>
            <p>{props.total}</p>
        </div>
    )
}

export default CalculatorDisplay;