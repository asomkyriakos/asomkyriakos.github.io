import React, { useState } from 'react';
import './App.css';

function App(){
    const [names, setNames] = useState('');
    const [newName, setNewName] = useState('');

    const [toDoList, setToDoList] = useState(['']);
    const [newToDoList, setNewToDoList] = useState('');

    const [counter , setCounter] = useState(0);

    const [paragraph , setParagraph] = useState('I still prefer backend');
    const [newParagraph , setNewParagraph] = useState('');


    const greeting = () => {
        setNames('Hello ' + newName);
    };
    const toDoListFunc = () => {
        setToDoList([...toDoList , newToDoList+' ']);
    }

    const hideParagraph = () => {
        if(newParagraph === ''){
            setNewParagraph(paragraph);
            setParagraph('');
        }else{
            setParagraph(newParagraph);
            setNewParagraph(paragraph);
        }
    }


    return (
        <div>
            <div>
                <h1>Hello World</h1>
                <h2>{names}</h2>
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Give Name"
                    required
                />

                <button onClick={greeting}>Add a name</button>
            </div>
            <div>
                <h2>To-Do List:</h2>
                <ul>
                    {toDoList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <input
                    type="text"
                    value={newToDoList}
                    onChange={(e) => setNewToDoList(e.target.value)}
                    placeholder="Give toDo"
                    required
                />

                <button onClick={toDoListFunc}>Add in toDo list</button>
            </div>
            <div>
                <h2>{counter}</h2>
            </div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter + -1)}>-</button>

            <h2>{paragraph}</h2>
            <button onClick={hideParagraph}>Hide or Show</button>
        </div>
    );

}

export default App;
