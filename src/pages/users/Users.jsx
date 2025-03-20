import { Container } from "react-bootstrap";
import UsersTable from "./components/UsersTable";
import CreateUsersModal from "./components/CreateUsersModal";

export default function Users() {
  return (
    <Container fluid>
      <div className="my-5">
        <div className="hstack gap-3">
          <div className="p-2">
            <h1>Usuarios</h1>
          </div>

          <div className="p-2 ms-auto">
            <CreateUsersModal />
          </div>
        </div>

        <hr />

        <UsersTable />
      </div>
    </Container>
  );
}
