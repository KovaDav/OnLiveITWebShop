import { Outlet, Link } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import ProductMozaique from "../Components/ProductMozaique/ProductMozaique";

const HomePage = () => {

const [productList, setProductList] = useState(null)

  useEffect(() =>{
    fetch(
			`http://localhost:3001/products`
			,
			{
				method: 'GET',
			})
			.then((response) => response.json()
			)
			.then((result) => {	
				setProductList(result)
        console.log(result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
  }, [])
      
  return(
      <>
        <div >
          <h2 id="DeveloperInfo">Kovács Dávid +36 30 5469 993</h2>
        </div>
        <ProductMozaique productList={productList}/>
      </>
  )
  };
    
    export default HomePage;