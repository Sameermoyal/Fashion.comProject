import React, { useEffect, useState } from 'react'
import jsonData from "../Json_File/product.json"
import { Link } from 'react-router-dom';

function Men() {
  const [mensProducts,setMensProducts]=useState([]);
useEffect(()=>setMensProducts(jsonData.mens) ,[])

  
  return (
   <>
   <div className="home-container">
     
    <div className="section">
        <h2>Men's Collection</h2>
        <div className="product-container">
          {mensProducts.map((item) => (
            
            <div key={item.id} className="product-card">
              <Link to={`/Details/${item.id}`}>
              <img src={item.img} alt={item.title} />
              <div className="product-title">{item.title}</div>
              <div className="product-price">{item.price}</div>
              <div className="product-description">{item.description}</div></Link>
            </div>
          ))}
        </div>
      </div>
      </div>
   </>
  )
}

export default Men