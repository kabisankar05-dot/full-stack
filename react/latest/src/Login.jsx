import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      setError("All fields required");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Invalid Email");
      return;
    }

    if (form.password.length < 4) {
      setError("Password min 4 chars");
      return;
    }

    onLogin?.();
    navigate("/category");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2>Login</h2>

        <input name="username" placeholder="Username" onChange={handleChange} style={styles.input}/>
        <input name="email" placeholder="Email" onChange={handleChange} style={styles.input}/>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} style={styles.input}/>

        <button type="submit" style={styles.btn}>Login</button>

        <p style={{ color: "red" }}>{error}</p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5"
  },
  card: {
    padding: "20px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
  },
  input: {
    display: "block",
    width: "250px",
    margin: "10px 0",
    padding: "10px"
  },
  btn: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none"
  }
};

export default Login;