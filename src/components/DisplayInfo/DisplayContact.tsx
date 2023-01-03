import { ContactInputs } from "../../utils/globalTypes";
import { TitledGroup } from "../Layouts/TitledGroup";
import DisplayText from "./DisplayText";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

export default function DisplayContact({
  comments,
  individuals,
}: ContactInputs) {
  return (
    <TitledGroup icon={AddIcCallIcon} title="Contact">
      <DisplayText content={comments} label="Remarques" />
    </TitledGroup>
  );
}
