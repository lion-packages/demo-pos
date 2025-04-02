import BoxMovementsTable from "./components/BoxMovementsTable";
import { Col, Container, Row } from "react-bootstrap";
import CreateBoxMovementsModal from "./components/CreateBoxMovementsModal";
import CreateBoxMovementsForm from "./components/CreateBoxMovementsForm";

export default function BoxMovements() {
  return (
    <Container>
      <div className="my-5">
        <div className="hstack gap-3">
          <div className="p-2">
            <h1>Cajas</h1>
          </div>

          <div className="p-2 ms-auto d-block d-sm-none">
            <CreateBoxMovementsModal />
          </div>
        </div>

        <hr />

        <div className="d-none d-sm-block">
          <Row>
            <Col sm={12} md={12} lg={3}>
              <CreateBoxMovementsForm addButtonSubmit={true} />
            </Col>

            <Col sm={12} md={12} lg={9}>
              <BoxMovementsTable />
            </Col>
          </Row>
        </div>

        <div className="d-block d-sm-none">
          <BoxMovementsTable />
        </div>
      </div>
    </Container>
  );
}
