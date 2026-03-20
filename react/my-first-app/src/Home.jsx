

import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="login">Go to Login</Link><br />
      <Link to="admin">Go to admin</Link><br />
      <Link to="main">Go to main</Link> <br />

      <Outlet />  
    </div>
  );
}

export default Home;