import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import jsonData from "../Json_File/product.json"
import "./Cart.css"
import { Link } from 'react-router-dom'
function Cart() {
  const{id}=useParams()
 
const[cartProduct,setCartProduct]= useState([]) 
// const productArray =[]
  
useEffect(()=>{
 
  // productArray.push(id);


  localStorage.setItem('ids', JSON.stringify(id));
  const identity = JSON.parse(localStorage.getItem('ids'));
console.log(identity); 

  const productList =[...jsonData.mens,...jsonData.womens,...jsonData.childs]
const selectProduct=productList.filter((i)=> identity==i.id)
// localStorage.setItem('user', JSON.stringify(user));

setCartProduct(selectProduct)
console.log("this is jsondata",jsonData)
console.log("this is jsonmensdata",jsonData.mens)
console.log("after select product",selectProduct)
},[id])


// useEffect(() => {
//   // Retrieve the existing array from localStorage, or create an empty array if it doesn't exist
//   const existingIds = JSON.parse(localStorage.getItem('ids')) || [];

//   // Add the new id to the array if it isn't already present
//   if (!existingIds.includes(id)) {
//     existingIds.push(id);
//     localStorage.setItem('ids', JSON.stringify(existingIds));
//   }

//   // Combine all products into a single list
//   const productList = [...jsonData.mens, ...jsonData.womens, ...jsonData.childs];
  
//   // Filter for the selected products based on the array of ids
//   const selectedProducts = productList.filter((product) => existingIds.includes(String(product.id)));

//   // Set the selected products to state
//   setCartProduct(selectedProducts);
// }, [id]);


 
 
 return (
    <>
     <div className="details-container">
        <h2>CART PAGE</h2>
        {cartProduct.map((item) => (
          
            <div  key={item.id} style={{border: "2px solid skyblue",display :"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
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