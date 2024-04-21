import "./ProductForm.css"
import React, {useEffect, useState,} from 'react';
import {useLocation} from "react-router-dom"


const ProductForm = () => {

const [productName, setProductName] = useState(null)
const [productPrice, setProductPrice] = useState(null)
const [active, setActive] = useState(false)
const [base64, setBase64] = useState(null)
const location = useLocation();
const data = location.state?.loggedIn
    const saveProduct = () => {

        fetch(
			`http://localhost:3001/product`
			,
			{
				method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
				body: JSON.stringify(
                {
                        name: productName,
                        price: productPrice,
                        image: base64,
                        active: active
                }),
			})
			.then((response) => response.json()
			)
			.then((result) => {	
				
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

    const changeHandler = async (event) => {
        const image = await convertToBase64(event.target.files[0])
        setBase64(image)
    };

  
    return(
        <div id="ProductForm">
            <h2>Add new product</h2>  
            <input className="ProductFormInput" type="email" name="email" placeholder="Product's Name" onChange={(e) => setProductName(e.target.value)}></input>
            <input className="ProductFormInput" type="password" name="password" placeholder="Product's Price" onChange={(e) => setProductPrice(e.target.value)}></input>
            <input type="file" label="Image" name="file" accept=".jpeg, .png, .jpg" onChange={(e) => changeHandler(e)} />
            <label>Active:</label>    
            <input className="ProductFormInput" type="checkbox" name="active" onChange={() => setActive(!active)}></input>
            <button id="SubmitButton" disabled={!data} onClick={() => saveProduct()}>Add</button>
      </div>
    )
}

export default ProductForm