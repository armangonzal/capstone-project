import React, { useState } from 'react'
import { Link } from "react-router-dom";
import BlogServices from "../../services/BlogServices.js";
import { useHistory } from "react-router-dom";
import logo from "../../static/logo.png"
import "./Login.css"


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory();

    const loginToApp = async (e) => {         //  rest end point  get auth 
        e.preventDefault();
        // BlogServices.getLoginCredential(email, password)
        //     .then(userAuth =>
        //         userAuth.data()
        //     ).catch(err => alert(err))
        history.push("/")
    };



    return (
        <div className="login">
            <img
                src={logo}
                alt="Team logo"
            />


            <form className="login_form">
                <h1>Sign in</h1>
                <p>Welcome to join the Team 4 | Blog </p>

                <input type="text" placeholder="Email or Phone"
                    value={email} onChange={e => setEmail(e.target.value)} />


                <input type="password" placeholder="Password"
                    value={password} onChange={e => setPassword(e.target.value)} />

                <div className="login_passwordReset">
                    <span>Forgot password?</span>
                </div >
                <button onClick={loginToApp}>Sign in</button>
            </form>

            <p>
                New to Team 4 | Blog?
                <span className="login_register">
                    <Link to="/register" className="login_join"> Join now</Link>
                </span>
            </p>
        </div>
    )
}

export default Login;