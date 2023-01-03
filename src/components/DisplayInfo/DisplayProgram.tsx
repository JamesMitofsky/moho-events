import { Box, Typography } from "@mui/material";
import { ProgramInputs } from "../../utils/globalTypes";
import DisplayText from "./DisplayFormats/DisplayText";
import { TitledGroup } from "../Layouts/TitledGroup";
import DateRangeIcon from "@mui/icons-material/DateRange";

export default function DisplayProgram({
  events,
  eventDate,
  departureTime,
  numberOfPeople,
  comments,
}: ProgramInputs) {
  return (
    <TitledGroup icon={DateRangeIcon} title="Programme">
      <DisplayText content={comments} label="Nom de la société" />
    </TitledGroup>
  );
}
