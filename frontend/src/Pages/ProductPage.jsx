import { Outlet, Link } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import ProductForm from "../Components/ProductForm/ProductForm";

const ProductPage = () => {

      
  return(
      <div id="Product">
         <ProductForm></ProductForm>
        
      </div>
  )
  };
    
    export default ProductPage;