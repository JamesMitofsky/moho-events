import { Box, Typography } from "@mui/material";
import { ProgramInputs } from "../../utilities/globalTypes";
import DisplayText from "./DisplayFormats/DisplayText";
import { TitledGroup } from "../Layouts/TitledGroup";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DisplayHTML from "./DisplayFormats/DisplayHTML";

export default function DisplayProgram({
  events,
  eventDate,
  departureTime,
  numberOfPeople,
  comments,
}: ProgramInputs) {
  return (
    <TitledGroup icon={DateRangeIcon} title="Programme">
      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}
