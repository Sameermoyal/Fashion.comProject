import React from 'react'
import jsonData from "../Json_File/product.json"
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
function Women() {
  const [womensProducts,setWomensProducts]=useState([]);
  useEffect(()=>setWomensProducts(jsonData.womens) ,[])
  
  return (
    <div className="home-container">
     
    <div className="section">
        <h2>Women's Collection</h2>
        <div className="product-container">
          {womensProducts.map((item) => (
            
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
  )
}

export default Women