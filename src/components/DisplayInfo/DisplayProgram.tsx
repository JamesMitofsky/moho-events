import returnStartAndEndTimes from "@/functions/returnStartAndEndTimes";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid";
import { v4 as uuid4 } from "uuid";
import { ProgramInputs } from "../../types/globalTypes";
import { TitledGroup } from "../layouts/TitledGroup";
import TitledArrayOfElements from "../layouts/TitledItemFromArray";
import DisplayList from "./DisplayFormats/DisplayList";
import DisplayText from "./DisplayFormats/DisplayText";

export default function DisplayProgram(props: ProgramInputs) {
  const { events, comments } = props;

  function getDateWithHourAndMinuteFromISO8601(dateString: string): Date {
    const dt = new Date(dateString);
    const hour = dt.getHours();
    const minute = dt.getMinutes();
    const fixedDate = new Date(2000, 0, 1, hour, minute); // Fixed date with year, month, and day set to 2000-01-01
    return fixedDate;
  }

  const eventsOrderedByStartTime = events.sort((a, b) => {
    const hourA = getDateWithHourAndMinuteFromISO8601(a.time.start as string);
    const hourB = getDateWithHourAndMinuteFromISO8601(b.time.start as string);

    if (hourA < hourB) return -1;
    if (hourA > hourB) return 1;
    return 0;
  });

  return (
    <TitledGroup icon={DateRangeIcon} title="Programme">
      {eventsOrderedByStartTime[0].time.start !== "" ? (
        eventsOrderedByStartTime.map((event, index) => {
          const formattedTime = returnStartAndEndTimes(event.time);
          return (
            <TitledArrayOfElements
              key={uuid4()}
              nameOfThisItem={event.title}
              subtitle={formattedTime}
              index={index}
            >
              <DisplayList items={event.place} label="Lieu" />
              <DisplayText
                content={event.numberOfPeople}
                label="Nombre de personnes"
              />
              <DisplayText
                content={event.furnitureUsed}
                label="Mobilier utilisé"
              />
              <DisplayList items={event.catering} label="Traiteurs" />
            </TitledArrayOfElements>
          );
        })
      ) : (
        <Grid xs={12}>
          <Typography sx={{ color: grey[600], fontSize: 12 }}>
            Acune partie d'évènement
          </Typography>
        </Grid>
      )}
      <DisplayText content={comments} label="Remarques" />
    </TitledGroup>
  );
}
