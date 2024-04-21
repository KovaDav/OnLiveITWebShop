import "./ProductCard.css"
import React, {useEffect, useState, useRef} from 'react';
import { Link } from "react-router-dom";

const ProductCard = ({name, price, image}) => {


    return(
        <div id='ProductCard'>
            <p id="ProductName">{name}</p>
            <p id="ProductPrice">{price} $</p>
            <img id="ProductImage" src={image} alt="" />
            <button id="ForwardButton">Forward</button>
        </div>
    )
}

export default ProductCard