import { Fragment, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import CreateBoxesForm from "./CreateBoxesForm";

export default function CreateBoxesModal() {
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
          <Modal.Title>Agregar Caja</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Alert variant={"warning"}>
            Por defecto las cajas se crean como estado <strong>"Activo"</strong>
            .
          </Alert>

          <CreateBoxesForm addSubmitButton={false} />
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
