import { Fragment } from "react";
import CreateSuppliersModal from "./CreateSuppliersModal";

export default function SuppliersTitle() {
  return (
    <Fragment>
      <div className="hstack gap-3">
        <div className="p-2">
          <h1>Proveedores</h1>
        </div>

        <div className="p-2 ms-auto">
          <CreateSuppliersModal />
        </div>
      </div>

      <hr />
    </Fragment>
  );
}
