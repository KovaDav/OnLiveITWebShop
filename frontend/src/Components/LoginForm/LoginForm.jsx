import "./LoginForm.css"
import React, {useEffect, useState, useRef} from 'react';
import { Outlet, Link } from "react-router-dom";

const LoginForm = ({setLoggedIn}) => {

const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null)

    const validate = () => {

        fetch(
			`http://localhost:3001/login`
			,
			{
				method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
				body: JSON.stringify(
                {
                        email: email,
                        password: password
                }),
			})
			.then((response) => response.json()
			)
			.then((result) => {	
				if(result.success){
                    setLoggedIn(true)
                }
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    }



    return(
        <div id="LoginForm">
            <h2>Please Login</h2>  
            <input className="LoginFormInput" type="email" name="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}></input>
            <input className="LoginFormInput" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            <button id="SubmitButton" onClick={() => validate()}>Login</button>
      </div>
    )
}

export default LoginForm