import React, { useState } from "react";
import {FaPlus, FaTrash} from "react-icons/fa";
import "./App.css";
import Item from "./Item";

function App(){

    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [bar, setBar] = useState(false);

    function addTodo(e){
        if(e.keyCode === 13){
            setItems(prevNotes => [...prevNotes, input]);
            setInput("");
            e.target.value=""
        }
    }

    function createTodo(item, index){
        return(<Item key={index} id={index} content={item} onDelete={deleteItem}/>);
    }

    function deleteItem(id){
        items.splice(id, 1);
        setItems(prevItems => [...prevItems]);
    }

    function handleInputBar(){
        setBar(!bar);
    }

    return(
        <section className="todoSection">
            <div className="container">
                <div className="header">
                    <h1>Todo List</h1>
                    <FaPlus className="icon" onClick={handleInputBar}/>
                </div>
                <input className={bar?"hide":""} onKeyDown={addTodo} onChange={(e)=>setInput(e.target.value)}type="text" name="new" id="newItem" placeholder="Add new Item in the list"/>
                <ul className="todo-list">
                    {items.map(createTodo)}
                </ul>
            </div>
        </section>
    );
}

export default App;