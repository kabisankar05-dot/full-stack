import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <img src="/logo.png" alt="Klassy Logo" />
          <div className="logo-text">
            <h2>Klassy</h2>
            <span>SINCE 1990</span>
          </div>
        </div>

        {/* Menu */}
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Chefs</li>
          <li>
            Features <span className="arrow">▼</span>
          </li>
          <li>Contact Us</li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
