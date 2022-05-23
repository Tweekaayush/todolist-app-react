import React from "react";
import "./Item.css";
import {FaTrash} from "react-icons/fa";

function Item(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return(
            <li className="todo-item">
                <span className="text">
                    {props.content}
                </span>
                <FaTrash className="delete-icon" onClick={handleClick}/>
            </li>
    );
}

export default Item;