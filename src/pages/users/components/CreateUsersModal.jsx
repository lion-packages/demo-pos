import { Fragment, useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";

export default function CreateUsersModal() {
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
          <Modal.Title>Agregar Usuarios</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Alert variant={"warning"}>
            Por defecto los usuarios se crean como estado{" "}
            <strong>"Activo"</strong>.
          </Alert>

          <Form>
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className="mb-3" controlId="users.name">
                  <Form.Label>Nombres</Form.Label>

                  <Form.Control type="text" placeholder="Nombres..." required />
                </Form.Group>
              </Col>

              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className="mb-3" controlId="users.last_name">
                  <Form.Label>Apellidos</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Apellidos..."
                    required
                  />
                </Form.Group>
              </Col>

              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className="mb-3" controlId="users.email">
                  <Form.Label>Correo</Form.Label>

                  <Form.Control type="email" placeholder="Correo..." required />

                  <Form.Text className="text-muted">
                    Nunca compartiremos su correo electrónico con nadie más.
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col xs={12} sm={12} md={12} lg={6}>
                <Form.Group className="mb-3" controlId="users.password">
                  <Form.Label>Contraseña</Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Contraseña..."
                    required
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
