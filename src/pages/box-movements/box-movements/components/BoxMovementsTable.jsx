import { Grid } from "gridjs-react";
import { useEffect, useState } from "react";

export default function BoxMovementsTable() {
  const [boxes, setBoxes] = useState([]);
  const [boxMovementsType, setBoxMovementsType] = useState([]);

  const readBoxes = () => {
    fetch("/boxes.json")
      .then((response) => response.json())
      .then((json) => {
        setBoxes(json);
      });
  };

  const readBoxMovementsType = () => {
    fetch("/box-movements-type.json")
      .then((response) => response.json())
      .then((json) => {
        setBoxMovementsType(json);
      });
  };

  const filterBoxes = (id) => {
    return boxes.find((box) => box.id === id);
  };

  const filterMovementsType = (id) => {
    return boxMovementsType.find((type) => type.id === id);
  };

  useEffect(() => {
    readBoxes();

    readBoxMovementsType();
  }, []);

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
            filterBoxes(1).name,
            filterMovementsType(box.box_movement_type_id).name,
            box.amount,
          ]),
      }}
    />
  );
}
