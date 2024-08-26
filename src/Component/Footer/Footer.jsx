import React from 'react'

function Footer() {
  return (
    <>
      <div className="flex w-full">
            <div className="flex justify-around w-full h-40  items-center text-white font-serif font-bold  bg-blue-300">
                <div className=""> <a href="index.html">HOME</a></div>
                
                <div className=""><a href="cart.html">CART</a></div>
                <div className=""><a href="about.html">ABOUT</a></div>
                <div className=""><a href="contact.html">CONTACT</a></div>
                <div className=''> <a href='' ></a>BLOG</div>
            </div>
        </div>
    </>
  )
}

export default Footer