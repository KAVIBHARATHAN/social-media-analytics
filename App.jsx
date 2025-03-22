import React, { useState } from 'react';
import NumberTypeSelector from './components/NumberTypeSelector';
import AverageDisplay from './components/AverageDisplay';
import './App.css';

function App() {
    const [windowState, setWindowState] = useState([]);
    const [average, setAverage] = useState(0);

    const fetchNumbers = async (type) => {
        let url;
        switch (type) {
            case 'p':
                url = 'http://20.244.56.144/test/primes';
                break;
            case 'f':
                url = 'http://20.244.56.144/test/fibo';
                break;
            case 'e':
                url = 'http://20.244.56.144/test/even';
                break;
            case 'r':
                url = 'http://20.244.56.144/test/rand';
                break;
            default:
                return;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            const numbers = data.numbers;

            // Update window state with unique numbers
            const uniqueNumbers = [...new Set([...windowState, ...numbers])].slice(-10);
            setWindowState(uniqueNumbers);

            // Calculate average
            const avg = uniqueNumbers.reduce((sum, num) => sum + num, 0) / uniqueNumbers.length;
            setAverage(avg);
        } catch (error) {
            console.error('Error fetching numbers:', error);
        }
    };

    return (
        <div className="App">
            <h1>Average Calculator</h1>
            <NumberTypeSelector fetchNumbers={fetchNumbers} />
            <AverageDisplay windowState={windowState} average={average} />
        </div>
    );
}

export default App;