import React, { useState } from 'react';
import './App.css';
import HelloTag from './components/HelloTag/HelloTag';

function App() {
    const [names, setNames] = useState(['Anastasia', 'Kyriakos', 'Manolis']);
    const [newName, setNewName] = useState('');

    const clickFunc = () => {
        setNames([...names, newName]);
        // console.log([...names, newName], [names, newName]);
    };

    const deleteFunc = () => {
        setNames(names.slice(0, names.length - 1));
    };

    return (
        <div>
            <h2 className='headerTag'>Hello!</h2>

            <HelloTag name={ 'test'} age ={'11'} gender ={'cool'} />
            {names.map((item, index) => (
                <HelloTag key={index} name={item} />
            ))}
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Give Name"
                required
            />

            <button onClick={clickFunc}>Add a name</button>


            <button onClick={deleteFunc}>Remove last name</button>
        </div>
    );
}

export default App;
