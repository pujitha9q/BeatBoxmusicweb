import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserNavBar from './user/UserNavBar';
import AdminNavBar from './admin/AdminNavBar';


function App() {
  

  

  return (
    <div className="App">
      <h1 align="center">Music Streaming API</h1>
      <Router>
       {/* <AdminNavBar/> */}
       <UserNavBar/>

      </Router>
    </div>
  );
}

export default App;
