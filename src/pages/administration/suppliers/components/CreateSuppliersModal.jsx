import { Fragment, useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";

export default function CreateSuppliersModal() {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <Button
        type="button"
        variant="light"
        size="lg"
        className="border"
        onClick={() => setShow(true)}
      >
        <i className="bi bi-person-fill-add fs-5 text-success"></i>
      </Button>

      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Proveedor</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Alert variant={"warning"}>
            Por defecto los proveedores se crean como estado{" "}
            <strong>"Activo"</strong>.
          </Alert>

          <Form>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3" controlId="suppliers.name">
                  <Form.Label>Razón Social</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Razón social del proveedor..."
                  />
                </Form.Group>
              </Col>

              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3" controlId="suppliers.nit">
                  <Form.Label>NIT</Form.Label>

                  <Form.Control
                    type="number"
                    placeholder="NIT del proveedor..."
                  />
                </Form.Group>
              </Col>

              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3" controlId="suppliers.phone">
                  <Form.Label>Télefono</Form.Label>

                  <Form.Control
                    type="number"
                    placeholder="Télefono del proveedor..."
                  />
                </Form.Group>
              </Col>

              <Col sm={12} md={6} lg={6}>
                <Form.Group className="mb-3" controlId="suppliers.email">
                  <Form.Label>Correo</Form.Label>

                  <Form.Control
                    type="email"
                    placeholder="Correo del proveedor..."
                  />
                </Form.Group>
              </Col>

              <Col sm={12} md={12} lg={12}>
                <Form.Group className="mb-3" controlId="suppliers.address">
                  <Form.Label>Dirección</Form.Label>

                  <Form.Control
                    as={"textarea"}
                    placeholder="Dirección del proveedor..."
                    style={{ height: "100px" }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancelar
          </Button>

          <Button variant="success" onClick={() => setShow(false)}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
