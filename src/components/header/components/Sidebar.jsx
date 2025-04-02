import { Fragment } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router";

export default function Sidebar({ companyName, show, setShow }) {
  const NavigationItems = () => {
    return (
      <Fragment>
        <div className="mb-5">
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
            className="border-bottom"
            onClick={() => setShow(false)}
          >
            Registrarse
          </Nav.Link>
        </div>

        <div className="mb-5">
          <div className="py-3 bg-light w-100">
            <span className="text-muted ms-2">Administrar</span>
          </div>

          <Nav.Link
            as={Link}
            to={"/administration/boxes"}
            className="border-bottom"
            onClick={() => setShow(false)}
          >
            Cajas
          </Nav.Link>

          <Nav.Link
            as={Link}
            to={"/administration/suppliers"}
            className="border-bottom"
            onClick={() => setShow(false)}
          >
            Proveedores
          </Nav.Link>

          <Nav.Link
            as={Link}
            to={"/administration/users"}
            className="border-bottom"
            onClick={() => setShow(false)}
          >
            Usuarios
          </Nav.Link>
        </div>

        <div className="mb-5">
          <div className="py-3 bg-light w-100">
            <span className="text-muted ms-2">Movimientos de Caja</span>
          </div>

          <Nav.Link
            as={Link}
            to={"/box-movements/box-movements"}
            className="border-bottom"
            onClick={() => setShow(false)}
          >
            Movimientos de Caja
          </Nav.Link>
        </div>
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
