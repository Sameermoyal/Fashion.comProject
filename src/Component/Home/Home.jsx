import React, { useState, useEffect } from 'react';
import jsonData from "../Json_File/product.json"
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const[mensProducts,setMensProducts]=useState([]);
  const[womensProducts,setWomensProducts]=useState([]);
  const[childsProducts,setChildsProducts]=useState([]);
   
   function dataFetch(){
    setMensProducts(jsonData.mens);
    setWomensProducts(jsonData.womens);
    setChildsProducts(jsonData.childs);

   }

   useEffect(()=>
     dataFetch(),[]
  )

  return (
    <div className="home-container">
      {/* Men's Section */}
      <div className="section">
        <h2>Men's Collection</h2>
        <div className="product-container">
          {mensProducts.map((item) => (
            
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.title} />
              <Link to={`/Details/${item.id}`}><div className="product-title">{item.title}</div></Link>
              <div className="product-price">{item.price}</div>
              <div className="product-description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Women's Section */}
      <div className="section">
        <h2>Women's Collection</h2>
        <div className="product-container">
          {womensProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.title} />
              <Link to={`/Details/${item.id}`}> <div className="product-title">{item.title}</div></Link>
              <div className="product-price">{item.price}</div>
              <div className="product-description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Children's Section */}
      <div className="section">
        <h2>Children's Collection</h2>
        <div className="product-container">
          {childsProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.title} />
              <Link to={`/Details/${item.id}`}><div className="product-title">{item.title}</div></Link>
              <div className="product-price">{item.price}</div>
              <div className="product-description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

