import { Grid } from "gridjs-react";

export default function MovementsTable() {
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
      columns={["#", "Caja", "Tipo Movimiento", "Monto"]}
      server={{
        url: "/box-movements.json",
        then: (data) =>
          data.map((box) => [
            box.id,
            // filterBoxes(1).name,
            // filterMovementsType(box.box_movement_type_id).name,
            box.amount,
          ]),
      }}
    />
  );
}
