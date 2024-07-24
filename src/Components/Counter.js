import React, {useState} from "react";
import './style.css';

 const  Counter = () => {
    const [Value, SetValue] = useState(0);

    const Increment = () => {
        SetValue(Value + 1);

    };

    const Decrement = () => {
        SetValue(Value - 1);
    };

    return (
        
            
        
        

        <div id="counter">
            <div id="value">
            <h1 style={{width:"100%"}}>
            {Value}
            </h1>
            </div>
           
           
            <button id="add" onClick={Increment}>ADD</button>
            <button id="add" onClick={Decrement}>MINUS</button>
        </div>
    )




}

export default Counter;