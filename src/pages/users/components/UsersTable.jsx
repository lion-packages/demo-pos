import { Grid } from "gridjs-react";
import { Fragment } from "react";

export default function UsersTable() {
  return (
    <Grid
      fixedHeader={true}
      search={true}
      sort={true}
      autoWidth={true}
      pagination={{
        enabled: true,
        limit: 10,
      }}
      language={{
        search: {
          placeholder: "🔍 Buscar...",
        },
      }}
      columns={[
        "#",
        "Nombres",
        "Apellidos",
        "Documento",
        "Correo",
        "Télefono",
        "Creado",
        "Eliminado",
        "Estado",
        // "Actions",
      ]}
      server={{
        url: "/users.json",
        then: (data) =>
          data.map((supplier) => [
            supplier.id,
            supplier.name,
            supplier.last_name,
            supplier.document,
            supplier.email,
            supplier.phone,
            supplier.created_at,
            supplier.updated_at,
            null === supplier.deleted_at ? "Activo" : "Inactivo",
          ]),
      }}
    />
  );
}
