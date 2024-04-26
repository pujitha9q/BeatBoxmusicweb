import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import './signup.css'
import config from '../config';
export default function SignUp() {

  const [formData, setFormData] = useState({
    fullname:'',
    email: '',
    password: '',
    location: '',
   
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');



  const handleChange = (e) => 
  {
    
    setFormData({...formData, [e.target.id]: e.target.value});
    
    // It updates the state `formData` by adding or updating a property with a key equal to 
    //the ID of the input field 
    //that triggered the change event (e.target.id). The value of this property is 
    //set to the new value entered in that input field (e.target.value).
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2029/insertuser', formData);
      if (response.status === 200) 
      {
        //It will set all fields to ""
        setFormData({
          fullname:'',
          email: '',
          password: '',
          location: '',
        
        });
      }
      setMessage(response.data);
      setError('')
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); 
    }
  };
  
 


  return (
    <div>        <div className='space'>
    <br/>
</div>

{
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form  onSubmit={handleSubmit}>
        <div>


       <h1 align="center"> Sign Up</h1>
            <div>
            <label>Fullname</label>
          <input type="text" id="fullname"   value={formData.fullname} onChange={handleChange} required />
             </div>

      

          <label>Email</label>
          <input type="email" id="email"   value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password"  value={formData.password} onChange={handleChange}  required />
        </div>
        <div>
          <label>Location</label>
          <input type="text" id="location"   value={formData.location} onChange={handleChange} required />
        </div>

        <button type="submit">Register</button>
      </form>
    



        
    </div>
  )
}
