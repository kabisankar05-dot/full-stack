import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Admin from "./Admin";

function App() {
  return (
<>

      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="login" element={<Login />} />
          <Route path="user" element={<Dashboard />} />
          <Route path="admin" element={<Admin />} />
          <Route path="main" element={<Dashboard />} />
        </Route>
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Dashboard />} />
          <Route path="main" element={<Dashboard />} />
      
      </Routes>
    </>
  );
}

export default App;