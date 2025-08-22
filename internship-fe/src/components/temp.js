import React, { useState } from 'react';
import './App.css';

function App(){
    const [newColour , setNewColour] = useState('white');
    const [changedColour , setChangedColour] = useState('');

    const changeColour = () => {
        setChangedColour(changedColour);
        setNewColour(changedColour);
    };

    return (<div style={{ backgroundColor: newColour, height: '100vh'}} >
        <h2>Uncool</h2>
        <input
            type="text"
            value={changedColour}
            onChange={(e) => setChangedColour(e.target.value)}
            placeholder="Give Colour"
            required
        />
        <button onClick={changeColour}>Change Background Colour</button>
    </div>);
}

export default App;
