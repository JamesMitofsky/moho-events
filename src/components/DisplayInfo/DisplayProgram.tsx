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
import DisplayTimeRange from "./DisplayFormats/DisplayTimeRange";

export default function DisplayProgram(props: ProgramInputs) {
  const { events, comments } = props;
  return (
    <TitledGroup icon={DateRangeIcon} title="Programme">
      {events[0].time.start !== "" ? (
        events.map((event, index) => {
          return (
            <TitledArrayOfElements key={uuid4()} label="Partie" index={index}>
              <DisplayText content={event.title} label="Type" />
              <DisplayList items={event.place} label="Lieu" />
              <DisplayTimeRange
                startTime={event.time.start as string}
                endTime={event.time.end as string}
                label="Heure"
              />

              <DisplayText
                content={event.numberOfPeople}
                label="Nombre de pax"
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
