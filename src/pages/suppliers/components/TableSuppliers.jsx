import { _, Grid } from "gridjs-react";

export default function TableSuppliers() {
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
        "Nombre",
        "Razón Social",
        "Télefono",
        "Correo",
        "Dirección",
        // "Actions",
      ]}
      server={{
        url: "/suppliers.json",
        then: (data) =>
          data.map((card) => [
            card.name,
            card.nit,
            card.phone,
            card.email,
            card.address,
            // _(
            //   <button
            //     key={card.id}
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
