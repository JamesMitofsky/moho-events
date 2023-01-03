import { ContactInputs } from "../../utils/globalTypes";
import { TitledGroup } from "../Layouts/TitledGroup";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import DisplayText from "./DisplayFormats/DisplayText";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

export default function DisplayContact({
  comments,
  individuals,
}: ContactInputs) {
  return (
    <TitledGroup icon={AddIcCallIcon} title="Contact">
      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}
