import { Col, Container, Row } from "react-bootstrap";
import BoxesTable from "./components/BoxesTable";
import CreateBoxesForm from "./components/CreateBoxesForm";
import CreateBoxesModal from "./components/CreateBoxesModal";

export default function Boxes() {
  return (
    <Container>
      <div className="my-5">
        <div className="hstack gap-3">
          <div className="p-2">
            <h1>Cajas</h1>
          </div>

          <div className="p-2 ms-auto d-block d-sm-none">
            <CreateBoxesModal />
          </div>
        </div>

        <hr />

        <div className="d-none d-sm-block">
          <Row>
            <Col sm={12} md={12} lg={3}>
              <CreateBoxesForm addSubmitButton={true} />
            </Col>

            <Col sm={12} md={12} lg={9}>
              <BoxesTable />
            </Col>
          </Row>
        </div>

        <div className="d-block d-sm-none">
          <BoxesTable />
        </div>
      </div>
    </Container>
  );
}
