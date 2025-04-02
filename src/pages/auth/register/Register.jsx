import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router";

export default function Register() {
  return (
    <Container>
      <Col
        xs={12}
        sm={12}
        md={10}
        lg={8}
        className="mx-auto my-5 border rounded p-4"
      >
        <Form>
          <div className="text-center w-100">
            <h5>REGISTRO</h5>
          </div>

          <hr />

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

                <Form.Control type="text" placeholder="Apellidos..." required />
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

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Registrarse
            </Button>

            <Button as={Link} variant="link" type="button" to={"/auth/login"}>
              Ingresar
            </Button>
          </div>
        </Form>
      </Col>
    </Container>
  );
}
