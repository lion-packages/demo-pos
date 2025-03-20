import { Fragment } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router";

export default function Sidebar({ companyName, show, setShow }) {
  const NavigationItems = () => {
    return (
      <Fragment>
        <Nav.Link
          as={Link}
          to={"/boxes"}
          className="border-bottom"
          onClick={() => setShow(false)}
        >
          Cajas
        </Nav.Link>

        <Nav.Link
          as={Link}
          to={"/suppliers"}
          className="border-bottom"
          onClick={() => setShow(false)}
        >
          Proveedores
        </Nav.Link>
      </Fragment>
    );
  };

  return (
    <Navbar.Offcanvas
      show={show}
      onHide={() => setShow(false)}
      id={`offcanvasNavbar-expand`}
      aria-labelledby={`offcanvasNavbarLabel-expand`}
      placement="end"
    >
      <Offcanvas.Header
        closeButton
        aria-pressed="true"
        className="bg-light border-bottom"
      >
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
          {companyName}
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavigationItems />
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
}
