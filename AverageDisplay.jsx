import React from 'react';

function AverageDisplay({ windowState, average }) {
    return (
        <div>
            <h2>Current Window</h2>
            <p>{JSON.stringify(windowState)}</p>
            <h2>Average</h2>
            <p>{average.toFixed(2)}</p>
        </div>
    );
}

export default AverageDisplay;
