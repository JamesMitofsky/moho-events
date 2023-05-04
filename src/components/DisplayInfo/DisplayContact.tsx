import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { v4 as generateId } from "uuid";
import { ContactInputs } from "../../types/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import DisplayText from "./DisplayFormats/DisplayText";

export default function DisplayContact({
  comments,
  individuals,
}: ContactInputs) {
  return (
    <TitledGroup icon={AddIcCallIcon} title="Contact">
      {individuals.map((individual, index) => {
        return (
          <TitledArrayOfElements
            key={generateId()}
            label="Contact"
            index={index}
            listLength={individuals.length}
          >
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
          </TitledArrayOfElements>
        );
      })}
      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}
