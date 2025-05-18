import  "../Components/Count.css"
import React from "react";
import { useState } from "react";
const Count = () => {
    const [Count,setcount] = useState(0)
    const clickHandler = () =>{
        setcount(Count+1);
    }
    return(
        <div>
            <h1>{Count}</h1>
            <button onClick={clickHandler}>Click me</button>
        </div>
    )
}

export default Count;