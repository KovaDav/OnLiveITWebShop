import { Outlet, Link, Route, Navigate } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import LoginForm from "../Components/LoginForm/LoginForm";
const LoginPage = () => {

const [loggedIn, setLoggedIn] = useState(false)
      
  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn])

  return(
      <div id="Login">
         <LoginForm setLoggedIn={setLoggedIn}></LoginForm>
         {loggedIn && <Navigate to="/product" state={{loggedIn: loggedIn}} replace/>}
      </div>
  )
  };
    
    export default LoginPage;