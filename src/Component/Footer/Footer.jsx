import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="flex w-full">
            <div className="flex justify-around w-full h-80  items-center text-white font-serif font-bold  bg-blue-300">
                <div className=""> <Link to="/">HOME</Link></div>
                
                <div className=""><Link to="/cart">CART</Link></div>
                <div className=""><Link to="/about">ABOUT</Link></div>
                <div className=""><Link to="/contact">CONTACT</Link></div>
                <div className=""><Link to="/blog" >BLOGS</Link></div>
            </div>
        </div>
    </>
  ) 
}

export default Footer