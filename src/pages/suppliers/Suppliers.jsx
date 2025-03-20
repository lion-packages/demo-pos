import { Fragment } from "react";
import { Container } from "react-bootstrap";
import SuppliersTable from "./components/SuppliersTable";
import CreateSuppliersModal from "./components/CreateSuppliersModal";

export default function Suppliers() {
  return (
    <Fragment>
      <Container>
        <div className="my-5">
          <div className="hstack gap-3">
            <div className="p-2">
              <h1>Proveedores</h1>
            </div>

            <div className="p-2 ms-auto">
              <CreateSuppliersModal />
            </div>
          </div>

          <hr />

          <SuppliersTable />
        </div>
      </Container>
    </Fragment>
  );
}
