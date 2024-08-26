import React from 'react'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import Men from './Component/Men/Men'
import Women from './Component/Women/Women'
import Child from './Component/Child/Child'
import Cart from './Component/Cart/Cart'
// import About from './Component/About/About'
// import Blog from './Component/Blog/Blog'

import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>}/>
      <Route path="/child" element={<Child/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App