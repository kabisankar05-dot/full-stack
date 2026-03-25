import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout?.();
    navigate("/login");
  };

  return (
    <div style={styles.nav}>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/category" style={styles.link}>Category</Link>
      </div>

      {isLoggedIn ? (
        <button style={styles.logout} onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button style={styles.login} onClick={() => navigate("/login")}>
          Login
        </button>
      )}
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    background: "#222",
    padding: "10px 20px"
  },
  link: {
    color: "white",
    marginRight: "15px",
    textDecoration: "none"
  },
  login: {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px"
  },
  logout: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px"
  }
};

export default Navbar;