import React from 'react'
import { useState } from 'react'
import "./Signin.css"
function Signup() {
 const[username,setUsername]=useState('');
 const[password,setPassword]=useState('');
 const[email,setEmail]=useState('');
 const[cPassword,setCPassword]=useState('');
 const [phone, setPhone] = useState('');

 const [userData,setUserData]=useState({
    username: '',
    password: '',
    email:'',
    cPassword:'',
    phone:'',
})
 const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(username,password,email,cPassword,phone)
 }

 
  return (
   <>
     <div class="form-container">
     <div class="signup-container">
        <form class="signup-form">
            <h2>Sign In</h2>
           
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e)=>(setEmail(e.target.value))} required/>
            </div>
           
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e)=>(setPassword(e.target.value))} required/>
            </div>
           
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
    </div>
     </div>
   </>
  )
}

export default Signup