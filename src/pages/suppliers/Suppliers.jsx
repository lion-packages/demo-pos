import { Fragment } from "react";
import SuppliersTable from "./components/SuppliersTable";
import { Container } from "react-bootstrap";
import SuppliersTitle from "./components/SuppliersTitle";

export default function Suppliers() {
  return (
    <Fragment>
      <Container>
        <div className="my-5">
          <SuppliersTitle />

          <SuppliersTable />
        </div>
      </Container>
    </Fragment>
  );
}
