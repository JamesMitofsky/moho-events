import { Box, Typography } from "@mui/material";
import { ProgramInputs, SignageInputs } from "../../utils/globalTypes";
import { TitledGroup } from "../Layouts/TitledGroup";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import DisplayText from "./DisplayFormats/DisplayText";

export default function DisplaySignage({
  lobby,
  otherInfo,
  comments,
}: SignageInputs) {
  return (
    <TitledGroup icon={DateRangeIcon} title="Programme">
      <DisplayText content={lobby} label="Tableau d'accueil" />
      <DisplayText content={otherInfo} label="Autres informations" />
      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}
