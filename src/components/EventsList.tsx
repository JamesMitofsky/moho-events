import useFetchEventsGroupedByDate from "@/hooks/useFetchEventsGroupedByDate";
import { EventComponent, ModifiedServerResponse } from "@/types/globalTypes";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid";
import { v4 as uuid4 } from "uuid";
import LinkToEvent from "./LinkToEvent";

type Props = {
  eventsFilter: "upcoming" | "past" | "all";
  order?: "asc" | "desc";
};

export default function EventsList({ eventsFilter, order = "asc" }: Props) {
  const events = useFetchEventsGroupedByDate(eventsFilter);

  const eventsGroupedByDay = events?.map((eventGroup) => {
    const trimmedDate = trimDateString(eventGroup[0]);
    const constructedGroup = eventGroup.map((event) => {
      const eventEndTime = getEventEndTime(event.program?.events);

      return (
        <LinkToEvent
          key={event.id}
          associationName={event.generalInfo?.associationName}
          docId={event.id}
          eventStartTime={event.program?.events[0].time.start as string}
          eventEndTime={eventEndTime}
          eventDate={event.generalInfo?.dateAsISO}
        />
      );
    });
    return (
      <>
        <Grid xs={12} key={uuid4()}>
          <Typography sx={{ mt: 6, color: grey[700] }}>
            {trimmedDate}
          </Typography>
        </Grid>
        <Grid container spacing={2} xs={12}>
          {constructedGroup}
        </Grid>
      </>
    );
  });

  return (
    <Grid container spacing={2}>
      {order === "asc" ? eventsGroupedByDay : eventsGroupedByDay?.reverse()}
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

function getEventEndTime(events: EventComponent[]): string {
  const lastEvent = events[events.length - 1];
  const endTime = lastEvent.time.end as string;
  return endTime;
}
