import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function RNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">
          <img src="../public/image.png" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Menu</Nav.Link>
            <Nav.Link href="#">Chefs</Nav.Link>

            <NavDropdown title="Features">
              <NavDropdown.Item href="#">Features Page 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Features Page 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Features Page 3</NavDropdown.Item>
              <NavDropdown.Item href="#">Features Page 4</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RNavbar;
