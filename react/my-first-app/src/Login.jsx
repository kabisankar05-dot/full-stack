import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.email === "admin@gmail.com" &&
      user.password === "1234"&&
      user.name === "admin"
    ) {
      localStorage.setItem("token", "true"); // login success
      navigate("/admin");
    } else {
      setError("Invalid Email or Password ");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <br />
          
        <button type="submit">Login</button>
      </form>

      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default Login;