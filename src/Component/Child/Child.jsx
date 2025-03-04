import React from 'react'
import jsonData from "../Json_File/product.json"
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
function Child() {
  const [childProducts,setChildProducts]=useState([]);
  useEffect(()=>setChildProducts(jsonData.childs) ,[])
  

  const [search, setSearch] = useState('');
  const[sort,setSort]=  useState('')
  const filterData= childProducts.filter((ele)=>ele.title.toLowerCase().includes(search.toLocaleLowerCase()))
  const [filteredData,setFilteredData ]=useState('')
const fiterAndSort =()=>{
  if(sort==='asc'){
    return [...filterData].sort((a,b)=>a.price-b.price);
  }
  if(sort==='des') {
    return [...filterData].sort((a,b)=>b.price-a.price);
  }
  return filterData
}
  return (
    <>
    <div className="home-container">
    <input type='text' placeholder='search value' value={search}  style={{backgroundColor:"#9fd3c7",color:"#385170",border:"2px solid black",fontSize:"20px"}}
       onChange={(e)=>setSearch(e.target.value)} />

<div>
<button onClick={()=>setSort('asc')}>High to low</button>
<button onClick={()=>setSort('des')}>Low to High</button>
</div>
      
  
     
     <div className="section">
         <h2>Women's Collection</h2>
         <div className="product-container">
           {fiterAndSort().map((item) => (
             
             <div key={item.id} className="product-card">
               <Link to={`/Details/${item.id}`}>
               <img src={item.img} alt={item.title} />
               <div className="product-title">{item.title}</div>
               <div className="product-price">{item.price} $</div>
               <div className="product-description">{item.description}</div></Link>
             </div>
           ))}
         </div>
       </div>
       </div>
    </>
  )
}

export default Child