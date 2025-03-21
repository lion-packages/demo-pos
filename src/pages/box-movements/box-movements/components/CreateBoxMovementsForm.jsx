import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function CreateBoxMovementsForm({ addButtonSubmit = false }) {
  const [boxes, setBoxes] = useState([]);
  const [boxMovementsType, setBoxMovementsType] = useState([]);

  const readBoxes = () => {
    fetch("/boxes.json")
      .then((response) => response.json())
      .then((json) => {
        setBoxes(json);
      });
  };

  const readBoxMovementsType = () => {
    fetch("/box-movements-type.json")
      .then((response) => response.json())
      .then((json) => {
        setBoxMovementsType(json);
      });
  };

  useEffect(() => {
    readBoxes();

    readBoxMovementsType();
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="box.id" required>
        <Form.Label>Caja</Form.Label>

        <Form.Select>
          <option>Seleccione</option>

          {boxes.map((box) => (
            <option key={box.id} value={box.id}>
              {box.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="box_movements_type.name" required>
        <Form.Label>Tipo de Movimiento</Form.Label>

        <Form.Select>
          <option>Seleccione</option>

          {boxMovementsType.map((boxMovement) => (
            <option key={boxMovement.id} value={boxMovement.id}>
              {boxMovement.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="box_movements_type.name">
        <Form.Label>Monto</Form.Label>

        <Form.Control type="number" placeholder="Monto..." required />
      </Form.Group>

      {addButtonSubmit && (
        <Button type="submit" variant="primary">
          Agregar
        </Button>
      )}
    </Form>
  );
}
