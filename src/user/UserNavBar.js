import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import './navbar.css'; // Assuming you have a CSS file named navbar.css
// import AdminLogin from './AdminLogin';
import Home from './Home';
import UserLogin from './UserLogin';
import UserHome from './UserHome';
import AdminLogin from '../admin/AdminLogin'



export default function UserNavBar() {
 
 


  

  return (
    <div className='url'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/adminlogin">AdminLogin</Link></li>
          <li><Link to="/userlogin">UserLogin</Link></li>
        
         
          
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}  exact/>
        <Route path="/signup" element={<SignUp />}  exact/>
        <Route path="/adminlogin" element={<AdminLogin/>} exact />
        <Route path="/userlogin" element={<UserLogin />}  exact/>
        <Route path="/userhome" element={<UserHome />} exact />
        

      </Routes>
    </div>
  );
}
