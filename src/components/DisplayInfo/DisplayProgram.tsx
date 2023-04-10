import DateRangeIcon from "@mui/icons-material/DateRange";
import { ProgramInputs } from "../../types/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
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
