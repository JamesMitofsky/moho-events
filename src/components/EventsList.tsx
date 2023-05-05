import useFetchEventsGroupedByDate from "@/hooks/useFetchEventsGroupedByDate";
import { ModifiedServerResponse } from "@/types/globalTypes";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid";
import { v4 as uuid4 } from "uuid";
import LinkToEvent from "./LinkToEvent";

export default function EventsList() {
  const events = useFetchEventsGroupedByDate();

  const eventsGroupedByDay = events?.map((eventGroup) => {
    const trimmedDate = trimDateString(eventGroup[0]);
    const constructedGroup = eventGroup.map((event) => {
      return (
        <LinkToEvent
          key={event.id}
          associationName={event.generalInfo?.associationName}
          docId={event.id}
          numberOfPeople={event.generalInfo?.numberOfPeople}
          eventStartTime={event.program?.events[0].time.start as string}
          eventStartDate={event.generalInfo?.dateAsISO}
        />
      );
    });
    return (
      <>
        <Grid xs={12} key={uuid4()}>
          <Typography sx={{ mt: 4, color: grey[700] }}>
            {trimmedDate}
          </Typography>
        </Grid>
        <Grid container spacing={2} xs={12} key={uuid4()}>
          {constructedGroup}
        </Grid>
      </>
    );
  });

  return (
    <Grid container spacing={2}>
      {eventsGroupedByDay}
    </Grid>
  );
}

function trimDateString(eventGroup: ModifiedServerResponse) {
  const dateObj = new Date(eventGroup.generalInfo.dateAsISO);
  const trimmedDate = dateObj.toLocaleString("fr", {
    month: "short",
    day: "numeric",
  });
  return trimmedDate;
}
