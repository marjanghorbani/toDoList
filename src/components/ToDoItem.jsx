import { useState } from "react";


function ToDoItem(props){
const [isDone  , setIsDone] =  useState(false);

const handleClick = () => {
    setIsDone(prevV=>{
        return !prevV;
    })
}    


    return(
        <div onClick={handleClick}> 
            <li style={{textDecoration: isDone ? 'line-through' : 'none'}}>
                {props.task}
            </li>
        </div>
    );
}

export default ToDoItem;