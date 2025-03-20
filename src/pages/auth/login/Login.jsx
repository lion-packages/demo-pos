import { Button, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router";

export default function Login() {
  return (
    <Container>
      <Col
        xs={12}
        sm={12}
        md={9}
        lg={5}
        className="mx-auto my-5 border rounded p-4"
      >
        <Form>
          <div className="text-center w-100">
            <h5>INGRESAR</h5>
          </div>

          <hr />

          <Form.Group className="mb-3" controlId="users.email">
            <Form.Label>Correo</Form.Label>

            <Form.Control type="email" placeholder="Correo..." required />

            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="users.password">
            <Form.Label>Contraseña</Form.Label>

            <Form.Control
              type="password"
              placeholder="Contraseña..."
              required
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Ingresar
            </Button>

            <Button
              as={Link}
              variant="link"
              type="button"
              to={"/auth/register"}
            >
              Registrarse
            </Button>
          </div>
        </Form>
      </Col>
    </Container>
  );
}
