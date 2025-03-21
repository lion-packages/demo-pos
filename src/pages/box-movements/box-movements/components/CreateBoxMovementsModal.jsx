import { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CreateBoxMovementsForm from "./CreateBoxMovementsForm";

export default function CreateBoxMovementsModal() {
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
        <i className="bi bi-archive-fill fs-5 text-success"></i>
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Movimiento de Caja</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CreateBoxMovementsForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancelar
          </Button>

          <Button variant="primary" onClick={() => setShow(false)}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
