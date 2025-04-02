import { Fragment } from "react";
import { Button, Card, Container } from "react-bootstrap";

export default function Dashboard() {
  return (
    <Fragment>
      <Container>
        <Card className="my-5">
          <Card.Header>Dashboard</Card.Header>

          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>

            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </Fragment>
  );
}
