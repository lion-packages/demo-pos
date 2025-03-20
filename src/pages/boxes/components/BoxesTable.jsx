import { Grid } from "gridjs-react";

export default function BoxesTable() {
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
        "Efectivo Disponible",
        "Estado",
        // "Actions",
      ]}
      server={{
        url: "/boxes.json",
        then: (data) =>
          data.map((box) => [
            box.id,
            box.name,
            box.cash_available,
            null === box.deleted_at ? "Activo" : "Inactivo",
            // _(
            //   <button
            //     key={box.id}
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
