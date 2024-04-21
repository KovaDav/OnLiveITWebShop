import { Outlet, Link } from "react-router-dom";
import "./layout.css"
import React, {useEffect, useState, useRef} from 'react';
import "../../Components/Toolbar/Toolbar"
import Toolbar from "../../Components/Toolbar/Toolbar";
const Layout = () => {

      
  return(
      <div className="Background">
         <Toolbar></Toolbar>
         <Outlet />
      </div>
  )
  };
    
    export default Layout;