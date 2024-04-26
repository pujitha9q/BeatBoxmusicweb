import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';

export default function ViewUsers() {
  const navigate = useNavigate();
  const [user, setuser] = useState([]);


  const fetchuser = async () => {
    try {
      const response = await axios.get(`${config.url}/viewuser`);
      setuser(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchuser();
  }, []);

  const deleteuser = async (email) => {
    try {
      await axios.delete(`${config.url}/deleteuser/${email}`);
      fetchuser();
    } catch (error) {
      console.error(error.message);
    }
  }


  return (
    <div>
      <h1 align="center">Users</h1>
      <table border={1} align="center" style={{ width: 'auto', height: 'auto'}}>
        <thead>
          <tr>
            <th>Full Name</th>
            
           
            <th>Email</th>
            <th>Location</th>
           
          </tr>
        </thead>
        <tbody>
          {Array.isArray(user) && user.length > 0 ? (
            user.map((user, index) => (
              <tr key={index}>
                <td>{user.fullname}</td>
                
                
                <td>{user.email}</td>
                <td>{user.location}</td>
                
                <td>
                  {/* <button onClick={() => viewuser(user.email)} className='button'>View</button> */}
                  <button onClick={() => deleteuser(user.email)} className='button'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" align='center'>Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
