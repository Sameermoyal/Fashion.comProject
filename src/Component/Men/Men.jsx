import React, { useEffect, useState } from 'react'
import jsonData from "../Json_File/product.json"
import { Link } from 'react-router-dom';

function Men() {
  const [mensProducts,setMensProducts]=useState([]);
useEffect(()=>setMensProducts(jsonData.mens) ,[])

const [search, setSearch] = useState('');
const filterData= mensProducts.filter((ele)=>ele.title.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
   <>
   <div className="home-container">
    
   <input type='text' placeholder='search value' value={search}  style={{backgroundColor:"orange",color:"white",border:"2px solid black",fontSize:"20px"}}
       onChange={(e)=>setSearch(e.target.value)} />
     
    <div className="section">
        <h2>Men's Collection</h2>
        <div className="product-container">
          {filterData.map((item) => (
            
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