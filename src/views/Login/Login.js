import React from "react";
import './Login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {
    return (
        <div className="Login">
            <label>Acount</label>
            <input type="text" placeholder="Acount"></input>
            <label>Password</label>
            <input type="text" placeholder="Password"></input>
        </div>
    );
}

export default Login;
