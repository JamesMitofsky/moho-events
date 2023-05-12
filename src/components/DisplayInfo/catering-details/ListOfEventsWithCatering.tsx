import LinkToEvent from "@/components/LinkToEvent";
import getEventEndTime from "@/functions/getEventEndTime";
import groupEventsByDate from "@/functions/groupEventsByDate";
import trimDateString from "@/functions/trimDateString";
import useFetchEvents from "@/hooks/useFetchEvents";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/system/Unstable_Grid";
import { v4 as uuid4 } from "uuid";

type Props = {
  eventsFilter: "upcoming" | "past" | "all";
  order?: "asc" | "desc";
};

export default function ListOfEventsWithCatering({
  eventsFilter,
  order = "asc",
}: Props) {
  const events = useFetchEvents(eventsFilter);

  const eventsWithCatering = events?.filter((event) => {
    return event.program?.events.some((event) => {
      return event.involvesRestaurant;
    });
  });

  const cateringEventsGroupedByDay = eventsWithCatering
    ? groupEventsByDate(eventsWithCatering)
    : [];

  const renderedEventGroups = cateringEventsGroupedByDay?.map((eventGroup) => {
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
          linkToSpecificEventSection="restauration"
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
      {order === "asc" ? renderedEventGroups : renderedEventGroups?.reverse()}
    </Grid>
  );
}
