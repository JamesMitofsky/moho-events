import SignpostIcon from "@mui/icons-material/Signpost";
import { SignageInputs } from "../../types/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
import DisplayHTML from "./DisplayFormats/DisplayHTML";

export default function DisplaySignage({ comments }: SignageInputs) {
  return (
    <TitledGroup icon={SignpostIcon} title="Signalétique">
      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}
