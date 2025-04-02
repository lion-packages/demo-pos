import { _, Grid } from "gridjs-react";

export default function SuppliersTable() {
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
        "Nombre",
        "Razón Social",
        "Télefono",
        "Correo",
        "Dirección",
        "Estado",
        // "Actions",
      ]}
      server={{
        url: "/suppliers.json",
        then: (data) =>
          data.map((supplier) => [
            supplier.id,
            supplier.name,
            supplier.nit,
            supplier.phone,
            supplier.email,
            supplier.address,
            null === supplier.deleted_at ? "Activo" : "Inactivo",
            // _(
            //   <button
            //     key={supplier.id}
            //     className={"py-2 px-4 border rounded-md text-white bg-blue-600"}
            //     onClick={() => console.log("Clicked")}
            //   >
            //     {"Edit"}
            //   </button>
            // ),
          ]),
      }}
    />
  );
}
