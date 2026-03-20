import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <h1>Admin Page</h1>
    <input type="text" placeholder="Enter admin name" /> <br />
    <input type="password" placeholder="Enter password" /> <br />
    <button>Login</button> <br />

      <Link to="/">Home</Link><br />
      <Link to="user">User Dashboard</Link><br />
      <Outlet />

      <hr />
      <h2>Main Dashboard</h2>
      <Link to="main">Main Dashboard</Link><br />

      
    </div>
  )
}

export default Admin;
