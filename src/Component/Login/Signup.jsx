import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Signup.css"
function Signup() {
 const[username,setUsername]=useState('');
 const[password,setPassword]=useState('');
 const[email,setEmail]=useState('');
 const[cPassword,setCPassword]=useState('');
 const [phone, setPhone] = useState('');
 const navigate = useNavigate();
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
    navigate('/home'); 
}

 
  return (
   <>
     <div class="form-container">
     <div class="signup-container">
        <form class="signup-form">
            <h2>Sign Up</h2>
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" onChange={(e)=>(setUsername(e.target.value))} required/>
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e)=>(setEmail(e.target.value))} required/>
            </div>
            <div class="input-group">
                <label for="phone">Number</label>
                <input type="number" id="phone" name="phone" onChange={(e)=>(setPhone(e.target.value))} required/>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e)=>(setPassword(e.target.value))} required/>
            </div>
            <div class="input-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" onChange={(e)=>(setCPassword(e.target.value))} required/>
            </div>
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
    </div>
     </div>
   </>
  )
}

export default Signup