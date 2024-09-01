import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
     <div className='m-0 p-5  text-white bg-blue-900 flex'>
        <div className= 'm-2  flex-none font-bold  hover:text-orange-600 hover:font-extrabold' >FASHION.COM</div>
        <div className='m-2 flex-auto w-64  flex'> 
            <Link to ="/" className='flex-auto w-16 hover:font-bold  hover:text-yellow-400'>HOME</Link>
            <Link to="/men" className='flex-auto w-16 hover:font-bold  hover:text-yellow-400'>MEN</Link>
            <Link to="/women" className='flex-auto w-16 hover:font-bold  hover:text-yellow-400'>WOMEN</Link>
            <Link to="/child" className='flex-auto w-16 hover:font-bold  hover:text-yellow-400' >CHILD</Link>
        </div>
        <div className='m-2 mr-0 flex-initial flex-row w-20' > 
          <Link to="cart" style={{padding:"5px"}} className='flex-auto w-16 hover:font-bold  hover:text-yellow-400' ><i class="fa-solid fa-cart-shopping"></i></Link>
           <Link to="contact"  style={{padding:"5px"}}className='flex-auto w-16 hover:font-bold  hover:text-yellow-400' ><i class="fa-solid fa-address-book"></i></Link>

             </div>
     </div>
    </>
  )
}

export default Header