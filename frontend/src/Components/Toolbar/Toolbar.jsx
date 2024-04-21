import "./Toolbar.css"
import React, {useEffect, useState, useRef} from 'react';
import { Link } from "react-router-dom";

const Toolbar = () => {


    return(
        <div id='Toolbar'>
            <Link to={"/"}>
            <button className='toolbarButton' >HOME</button> 
            </Link>
            <Link to={"/login"}>
            <button className='toolbarButton'>LOGIN</button>
            </Link>
            
        </div>
    )
}

export default Toolbar