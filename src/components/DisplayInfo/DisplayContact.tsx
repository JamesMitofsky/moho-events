import { Box } from "@mui/material";
import { ContactInputs } from "../../utils/globalTypes";
import { TitledGroup } from "../Layouts/TitledGroup";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export default function DisplayContact({
  comments,
  individuals,
}: ContactInputs) {
  const [individualsWithId, setIndividualsWithId] = useState<GridRowsProp>();

  useEffect(() => {
    if (!individuals) return;

    const formattedWithId: GridRowsProp = individuals.map((individual) => ({
      ...individual,
      id: uuidv4(),
    }));

    setIndividualsWithId(formattedWithId);
  }, [individuals]);

  const columns: GridColDef[] = [
    { field: "companyName", headerName: "Nom de société", flex: 1 },
    { field: "contactName", headerName: "Nom de la personne", flex: 1 },
    { field: "telephoneNumber", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
  ];
  console.log(comments);
  return (
    <TitledGroup icon={AddIcCallIcon} title="Contact">
      {individualsWithId && (
        <DataGrid autoHeight rows={individualsWithId} columns={columns} />
      )}

      <DisplayHTML html={comments || ""} label="Remarques" />
    </TitledGroup>
  );
}
