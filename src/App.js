import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import React from "react";
import Weather from "./components/Weather";


let App = () => {

    return (<>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Weather stateButton='0'/>}/>
            </Routes>
        </>
    )
}

export default App;
