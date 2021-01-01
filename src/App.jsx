import React, { useState } from 'react';
import './index.css';

const App = () =>{

    const [time,newTime]=useState( new Date().toLocaleTimeString());

    return(
        <>
            <h1>{time}</h1>
            
            <button onClick={ ()=> 
            newTime( new Date().toLocaleTimeString())
            }>Click ME</button>
        </>
    )
}

export default App;