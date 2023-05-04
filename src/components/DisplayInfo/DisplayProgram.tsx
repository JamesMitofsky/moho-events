import DateRangeIcon from "@mui/icons-material/DateRange";
import { v4 as uuid4 } from "uuid";
import { ProgramInputs } from "../../types/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";
import DisplayHTML from "./DisplayFormats/DisplayHTML";
import DisplayText from "./DisplayFormats/DisplayText";
import DisplayTimeRange from "./DisplayFormats/DisplayTimeRange";

export default function DisplayProgram({ events, comments }: ProgramInputs) {
  return (
    <TitledGroup icon={DateRangeIcon} title="Programme">
      {events.map((event, index) => {
        return (
          <TitledArrayOfElements
            key={uuid4()}
            label="Partie"
            index={index}
            listLength={events.length}
          >
            <DisplayText content={event.title} label="Type" />
            <DisplayText content={event.place} label="Lieu" />
            <DisplayTimeRange
              startTime={event.time.start as string}
              endTime={event.time.end as string}
              label="Heure"
            />

            <DisplayText content={event.numberOfPeople} label="Nombre de pax" />
            <DisplayHTML html={event.furnitureUsed} label="Mobilier utilisé" />
            <DisplayText content={event.catering} label="Traiteurs" />
          </TitledArrayOfElements>
        );
      })}
      <DisplayHTML html={comments} label="Remarques" />
    </TitledGroup>
  );
}
