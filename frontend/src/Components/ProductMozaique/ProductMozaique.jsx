import "./ProductMozaique.css"
import React, {useEffect, useState, useRef} from 'react';
import ProductCard from "../ProductCard/ProductCard";

const ProductMozaique = ({productList}) => {

    const renderProducts = () =>{
        if(productList !== null){
            return productList.map(product =><ProductCard name={product.name} price={product.price} image={product.image} />)
        }else{
            return 
        }
    }

    return(
        <div id='ProductMozaique'> 
          {renderProducts()}
        </div>
    )
}

export default ProductMozaique