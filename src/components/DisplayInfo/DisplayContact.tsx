import { ContactInputs } from "../../utilities/globalTypes";
import { TitledGroup } from "../Layouts/TitledGroup";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import DisplayText from "./DisplayFormats/DisplayText";
import { Box } from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

export default function DisplayContact({
  comments,
  individuals,
}: ContactInputs) {
  return (
    <TitledGroup icon={AddIcCallIcon} title="Contact">
      {individuals.map((individual) => {
        return (
          <Box sx={{ mb: 2, display: "grid", gap: 1 }}>
            <DisplayText
              content={individual.contactName}
              label="Nom de la personne"
            />
            <DisplayText
              content={individual.companyName}
              label="Nom de la société"
            />
            <DisplayText content={individual.email} label="Email" />
            <DisplayText
              content={individual.telephoneNumber}
              label="Téléphone"
            />
          </Box>
        );
      })}
      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}
