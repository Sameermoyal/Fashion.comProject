import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import jsonData from "../Json_File/product.json"
import { Link } from 'react-router-dom'

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
          
            <div  key={item.key} style={{border: "2px solid skyblue",display :"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <h1 style={{fontWeight:"800",fontSize:"1.5rem"}}>YOU BOUGHT THIS PRODUCT CONFIRM</h1>
            <img className="details-image" src={item.img} alt={item.title} />
            <div className="details-title">{item.title}</div>
            <div className="details-price">{item.price}</div>
            <div className="details-description">{item.description}</div>
            
           <Link to={"/signin"}><button >Sign In</button></Link> 
           <button style={{width:"220px",padding:"5px" ,margin:"5px"}}> Your Address & Further Details </button>
          </div>
        ))}
      </div>
  )
}

export default Buy