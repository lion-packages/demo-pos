import { Fragment } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export default function CreateBoxesForm({ addSubmitButton = false }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="boxes.name">
        <Form.Label>Nombre de Caja</Form.Label>

        <Form.Control type="text" placeholder="Nombre de caja..." required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="boxes.cash_available">
        <Form.Label>Efectivo en Caja</Form.Label>

        <Form.Control
          type="number"
          placeholder="Efectivo en Caja..."
          required
        />
      </Form.Group>

      {addSubmitButton && <Button type="submit">Agregar</Button>}
    </Form>
  );
}
