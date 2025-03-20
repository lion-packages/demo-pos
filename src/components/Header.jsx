import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary border-bottom shadow-sm">
      <Container>
        <Navbar.Brand href="#home">Lion-Packages</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/"}>
              Inicio
            </Nav.Link>

            <Nav.Link as={Link} to={"/suppliers"}>
              Proveedores
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
