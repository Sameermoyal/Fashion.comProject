import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import jsonData from "../Json_File/product.json"
import "./Cart.css"
import { Link } from 'react-router-dom'
function Cart() {
  const{id}=useParams()
  const[cartProduct,setCartProduct]= useState([]) 
  useEffect(()=>{
    const productList =[...jsonData.mens,...jsonData.womens,...jsonData.childs]
const selectProduct=productList.filter((i)=> id==i.id)
setCartProduct(selectProduct)
console.log("this is jsondata",jsonData)
console.log("this is jsonmensdata",jsonData.mens)
 console.log("after select product",selectProduct)
  },[id])
  

 
 return (
    <>
     <div className="details-container">
        <h2>CART PAGE</h2>
        {cartProduct.map((item) => (
          
            <div  key={item.id}>
            <img className="details-image" src={item.img} alt={item.title} />
            <div className="details-title">{item.title}</div>
            <div className="details-price">{item.price}</div>
            <div className="details-description">{item.description}</div>
            <div><Link to={`/buy/${item.id}`}><button>BUY NOW</button></Link></div>
          </div>
        ))}
      </div>
    </>

  )
}

export default Cart