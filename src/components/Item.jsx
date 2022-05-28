import React from "react";
import "./Item.css";
import {FaTrash} from "react-icons/fa";

function Item(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return(
    
            <div className="todo-item">
                <li>
                    {props.id+1}. {props.content}
                </li>
                <FaTrash className="delete-icon" onClick={handleClick}/>
            </div>
    );
}

export default Item;