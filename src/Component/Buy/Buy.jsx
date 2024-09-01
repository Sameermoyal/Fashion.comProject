import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import jsonData from "../Json_File/product.json"
function Buy() {
  const{id}=useParams()
  const[buyProduct,setBuyProduct]=useState([])
   
  useEffect(()=>{
    const productList=[...jsonData.mens,...jsonData.womens,...jsonData.childs]
    const selPDT= productList.filter((item)=>item.id==id)
   setBuyProduct(selPDT)
  },[])


  return (
    <div className="details-container">
        <h2 style={{fontWeight:"800",fontSize:"1.5rem"}}> BUY Page</h2>
        {buyProduct.map((item) => (
          
            <div  key={item.key}>
              <h1 style={{fontWeight:"800",fontSize:"1.5rem"}}>YOU BOUGHT THIS PRODUCT CONFIRM</h1>
            <img className="details-image" src={item.img} alt={item.title} />
            <div className="details-title">{item.title}</div>
            <div className="details-price">{item.price}</div>
            <div className="details-description">{item.description}</div>
           
          </div>
        ))}
      </div>
  )
}

export default Buy