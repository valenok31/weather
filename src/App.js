import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import React from "react";
import Weather from "./components/Weather";


let App = () => {

    return (<>

            <Routes>
                <Route path='/' element={<Weather stateButton='0'/>}/>
                <Route path='/current' element={<Weather stateButton='0'/>}/>
            </Routes>
        </>
    )
}

export default App;
