import React, { useState } from "react";
import './App.css';

const App = () =>{
    const purple="#8e44ad";
    const [bg, setBg]= useState(purple);
    const [name, setname] = useState("Click Me");

    const bgChange= () =>
    {
        let yellow="#fce605";
        setBg(yellow);
        setname('Ballay wo! 👍');

    }

    const bg2Change = () =>{
        let pink="#fc0590";
        setBg(pink);
        setname('Click Me');

    }
    return(
         <>
         <div style={{backgroundColor: bg, paddingBottom:'350px'}}>
             <button onClick={bgChange} onDoubleClick={bg2Change}>{name}</button>
         </div>

         </>

    );

}
export default App;