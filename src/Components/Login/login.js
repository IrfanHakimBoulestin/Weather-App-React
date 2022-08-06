import React, {useState} from 'react';
import './login.css';
import PropTypes from "prop-types";
const axios = require('axios');

async function loginUser(credentials) {
    const config = {
        method: 'GET',
        url: 'http://localhost:9000/login',
        body: JSON.stringify(credentials)
    };
    return axios(config)
        .then(res => JSON.stringify(res.data))
        .catch(error => console.log(error))
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({username, password });
        setToken(token);
    }

    return(
        <center>
            <div className="login-wrapper center-element">
                <h1>Please Log In</h1>
                <form onSubmit={handleSubmit}>
                    <label className="m-3">
                        <p>Username</p>
                        <input type="text" onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label className="m-3">
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div>
                        <button type="submit" className="btn btn-dark">Login</button>
                    </div>
                </form>
            </div>
        </center>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}