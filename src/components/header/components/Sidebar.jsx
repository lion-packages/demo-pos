import { Fragment } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router";

export default function Sidebar({ companyName, show, setShow }) {
  const NavigationItems = () => {
    return (
      <Fragment>
        <Fragment>
          <Nav.Link
            as={Link}
            to={"/auth/login"}
            className="border-bottom"
            onClick={() => setShow(false)}
          >
            Ingresar
          </Nav.Link>

          <Nav.Link
            as={Link}
            to={"/auth/register"}
            className="border-bottom mb-5"
            onClick={() => setShow(false)}
          >
            Registrarse
          </Nav.Link>
        </Fragment>

        <Fragment>
          <span className="text-muted py-3 bg-light">
            <span className="ms-2">Administrar</span>
          </span>

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

          <Nav.Link
            as={Link}
            to={"/users"}
            className="border-bottom"
            onClick={() => setShow(false)}
          >
            Usuarios
          </Nav.Link>
        </Fragment>
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
