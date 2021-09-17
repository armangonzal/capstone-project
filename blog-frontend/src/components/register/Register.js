import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap"
import BlogServices from "../../services/BlogServices.js";
import logo from "../../static/logo.png"
import "./Register.css"


function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const register = async (e) => {
        e.preventDefault()
        // BlogServices.createNewUser(name, password)                  rest end point  => register new user 
        //     .then(userAuth =>
        //         userAuth.data()
        //     ).catch(err => alert(err))
        // console.log(">>>", user)
        history.push("/")

    };

    return (
        <div className="register">
            <img
                src={logo}
                alt="LinkedIn logo"
            />
            <h1>Start Here, Making Good Choice, Learn From Past, Let's Blog ... </h1>
            <label>Team 4 | Blog</label>
            <br />
            <Form className="register_form">
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="inlineFormInput" className="register_label">Name</Form.Label>
                    <Form.Control
                        className="mb-2 register__input"
                        id="inlineFormInput"
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="register_label">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className="register_input"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="register_label">Password (6 or more characters)</Form.Label>
                    <Form.Control type="password" placeholder="Password" className="register_input"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" className="register_button" onClick={register}>
                    Agree & Join
                </Button>
            </Form>
        </div>
    )
}

export default Register;