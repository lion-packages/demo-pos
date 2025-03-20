import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import Sidebar from "./components/Sidebar";

const companyName = "Lion-Packages";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <Navbar
      expand={false}
      className="bg-body-tertiary border-bottom shadow-sm py-3"
    >
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          {companyName}
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShow(!show)}
        />

        <Sidebar companyName={companyName} show={show} setShow={setShow} />
      </Container>
    </Navbar>
  );
}
