import React from 'react';

function NumberTypeSelector({ fetchNumbers }) {
    return (
        <div>
            <h2>Select Number Type</h2>
            <button onClick={() => fetchNumbers('p')}>Prime Numbers</button>
            <button onClick={() => fetchNumbers('f')}>Fibonacci Numbers</button>
            <button onClick={() => fetchNumbers('e')}>Even Numbers</button>
            <button onClick={() => fetchNumbers('r')}>Random Numbers</button>
        </div>
    );
}

export default NumberTypeSelector;