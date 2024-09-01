import React from 'react'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import Men from './Component/Men/Men'
import Women from './Component/Women/Women'
import Child from './Component/Child/Child'
import Cart from './Component/Cart/Cart'
import Buy from './Component/Buy/Buy'
import About from './Component/About/About'
import Blog from './Component/Blog/Blog'
import Contact from './Component/Contact/Contact'
import { Route,Routes} from 'react-router-dom'
import Details from './Component/Details/Details'
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>}/>
      <Route path="/child" element={<Child/>}/>
      <Route path="/cart/:id/" element={<Cart/>}/>
      <Route path="/Details/:id/" element={<Details/>}/>
      <Route path="/buy/:id/" element={<Buy/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App
