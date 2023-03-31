import { SignageInputs } from "../../utilities/globalTypes";
import { TitledGroup } from "../Layouts/TitledGroup";
import SignpostIcon from "@mui/icons-material/Signpost";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import DisplayText from "./DisplayFormats/DisplayText";

export default function DisplaySignage({ lobby, comments }: SignageInputs) {
  return (
    <TitledGroup icon={SignpostIcon} title="Signalétique">
      <DisplayText content={lobby} label="Tableau d'accueil" />
      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}
