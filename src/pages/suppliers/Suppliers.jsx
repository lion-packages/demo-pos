import { Fragment } from "react";
import TableSuppliers from "./components/TableSuppliers";
import { Container } from "react-bootstrap";
import TitleSuppliers from "./components/TitleSuppliers";

export default function Suppliers() {
  return (
    <Fragment>
      <Container>
        <div className="my-5">
          <TitleSuppliers />

          <TableSuppliers />
        </div>
      </Container>
    </Fragment>
  );
}
