import React, { useState } from "react";
import './App.css';

const App = () =>{

    const [name, setName]= useState("");
    const [fullName, setfullName]= useState("");

    const InputEvent =(event)=>{
        setName(event.target.value);

    }
    const onsubmit=()=>{
        setfullName(name);
    }
    return(
        <>
        <div className="maindiv">
        <h1>Hello!{fullName}</h1>
        <input
            type="text" placeholder="enter your name" 
                onChange={InputEvent}
                value={name}
            />
        <button onClick={onsubmit}>Click Me</button>



        </div>
            
        </>
    )
}
export default App;