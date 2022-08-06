import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from "../LandingPage/landing-page";
import Login from "../Login/login";

function App() {
    const [token, setToken] = useState();
    if(!token) return <Login setToken={setToken} />

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;