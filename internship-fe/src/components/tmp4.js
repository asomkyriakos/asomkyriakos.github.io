import React, { useState } from 'react';
import './App.css';
import ButtonTag from './components/Button Tag/ButtonTag';

function UserCard({ id, name, email }) {
    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
            <h3>{name}</h3>
            <p>ID: {id}</p>
            <p>Email: {email}</p>
        </div>
    );
}

function PriceItemCard({ price, item}) {
    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
            <h3>{item}</h3>
            <p>Price:{price}</p>
        </div>
    );
}

function EachItemPrice({name,price, quantity}){
    const fullPrice = price*quantity;
    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
            <h3>{name}</h3>
            <p>Cost:{fullPrice}</p>
        </div>
    )
}

function ReduceCode(initialPriceItemList){

}

function EvenCheck({nums}){
    if((nums % 2) === 0){
        return(
            <div>
                <h3 style={{backgroundColor: "red"}}>{nums}</h3>
            </div>
        )
    }else{
        return(
            <div>
                <h3>{nums}</h3>
            </div>
        )
    } //kanto me jsx

}


function App() {

    const [users, setUsers] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const toDoList = ["Apple", "Banana", "Cherry", "Mango", "Pineapple"];
    const [searchTerm, setSearchTerm] = useState("");
    const filteredFruits = toDoList.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const numbersList = [1,2,3,4];

    const initialPriceItemList = [
        { item: "cow", price: 10 },
        { item: "gas", price: 20 },
        { item: "nokia", price: 30 },
    ];
    const [priceItemList, setPriceItemList] = useState(initialPriceItemList);
    const [maxValue, setMaxValue] = useState("");
    const filteredPriceItems = priceItemList.filter(
        (entry) => maxValue === "" || entry.price <= Number(maxValue)
    );

    const initialSearchItemList = [
        { item: "shirts", type: "clothing" },
        { item: "gloves", type: "clothing" },
        { item: "Chronicles of time", type: "books" },
        { item: "other book", type: "books" },
    ];
    const [searchItemList, setSearchItemList] = useState(initialSearchItemList);
    const [searchFilter, setSearchFilter] = useState("All");
    const filteredSearchItems = searchItemList.filter(
        (entry) =>
            searchFilter === "All" || entry.type.toLowerCase() === searchFilter.toLowerCase()
    );

    const initialSumItemList = [
        { name: "shirts", price: 10 , quantity: 20},
        { name: "gloves", price: 33 , quantity: 5},
        { name: "Chronicles of time", price: 54 , quantity: 1},
        { name: "other books", price: 32 , quantity: 50},
    ];

    const handleAddUser = (e) => {
        e.preventDefault();
        if (!id || !name || !email) return;
        setUsers((prevUsers) => [...prevUsers, [id, name, email]]);
        setId("");
        setName("");
        setEmail("");
    };


    return (
        <div>
            <h1>User Cards List</h1>

            <form onSubmit={handleAddUser} style={{marginBottom: "20px"}}>
                <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Add User</button>
            </form>


            {users.map((userRow) => (
                <UserCard
                    key={userRow[0]}
                    id={userRow[0]}
                    name={userRow[1]}
                    email={userRow[2]}
                />
            ))}

            <div style={{ marginTop: "30px" }}>
                <input
                    id="searchBar"
                    type="text"
                    placeholder="Search fruit..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ul>
                    {filteredFruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {numbersList.map((numbers, index) => (
                        <li key={index}><EvenCheck nums={numbers} /></li>
                    ))}
                </ul>
            </div>
            <div>
                <input
                    id="maxValue"
                    type="text"
                    placeholder="Max Value..."
                    value={maxValue}
                    onChange={(e) => setMaxValue(e.target.value)}
                />
                <ul>
                    {filteredPriceItems.map(({ item, price }, index) => (
                        <PriceItemCard key={index} item={item} price={price} />
                    ))}
                </ul>
            </div>
            <div>
                <ButtonTag label="Click Me" color="blue" size="large" />
            </div>

            <div>
                {/*//change from local to global reusable variables*/}
                <button onClick={() => setSearchFilter("All")}>All</button>
                <button onClick={() => setSearchFilter("clothing")}>Clothing</button>
                <button onClick={() => setSearchFilter("books")}>Books</button>

                <ul>
                    {filteredSearchItems.map(({ item }, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {initialSumItemList.map(({ name , price , quantity  }, index) => (
                        <EachItemPrice name={name} price ={price} quantity={quantity}/>
                    ))}
                </ul>
                <ul>
                    <h3>
                        {initialSumItemList.reduce((sum ,initialSumItemList) =>  sum +(initialSumItemList.quantity * initialSumItemList.price),0 )
                        }
                    </h3>
                </ul>
            </div>


        </div>
    );
}

export default App;