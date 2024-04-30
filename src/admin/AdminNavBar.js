import React from 'react';
import { Routes, Route, Link,useNavigate } from 'react-router-dom';

import AdminHome from './AdminHome';
import ViewUsers from './ViewUsers';



export default function AdminNavBar() {
  
  


  return (
    <div className='url'>
      <nav>
        <ul>
          <li>
            <Link to="/adminhome">AdminHome</Link> &nbsp; &nbsp; &nbsp; &nbsp;
          </li>
          <li>
            <Link to="/viewusers">ViewUsers</Link> &nbsp; &nbsp; &nbsp; &nbsp;
          </li>

          

          
        </ul>
      </nav>
      <Routes>
    

        <Route path='/adminhome' element={<AdminHome />}  exact/>
        <Route path='/viewusers' element={<ViewUsers />}  exact/>
      </Routes>
    </div>
  );
}
