import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewUsers() {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${config.url}/viewuser`);
      setUser(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const deleteUser = async (email) => {
    try {
      await axios.delete(`${config.url}/deleteuser/${email}`);
      fetchUser();
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
            user.map((userData, index) => (
              <tr key={index}>
                <td>{userData.fullname}</td>
                <td>{userData.email}</td>
                <td>{userData.location}</td>
                <td>
                  <button onClick={() => deleteUser(userData.email)} className='button'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" align='center'>Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

