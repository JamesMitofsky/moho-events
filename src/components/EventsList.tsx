import useFetchEventsGroupedByDate from "@/hooks/useFetchEventsGroupedByDate";
import { ModifiedServerResponse } from "@/types/globalTypes";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { List, Typography } from "@mui/material";
import { v4 as uuid4 } from "uuid";
import LinkToEvent from "./LinkToEvent";

export default function EventsList() {
  const events = useFetchEventsGroupedByDate();

  console.log(events);

  const eventsGroupedByDay = events?.map((eventGroup) => {
    const trimmedDate = trimDateString(eventGroup[0]);
    const constructedGroup = eventGroup.map((event) => {
      return (
        <LinkToEvent
          associationName={event.generalInfo?.associationName}
          docId={event.docId}
          numberOfPeople={event.generalInfo?.numberOfPeople}
        />
      );
    });
    return (
      <List key={uuid4()}>
        <Typography mt={4} variant="h3">
          <CalendarTodayIcon sx={{ mr: 2 }} />
          {trimmedDate}
        </Typography>
        {constructedGroup}
      </List>
    );
  });

  return <>{eventsGroupedByDay}</>;
}

function trimDateString(eventGroup: ModifiedServerResponse) {
  const stringifiedDate = eventGroup.generalInfo.eventDate;
  const dateObj = new Date(stringifiedDate);
  const trimmedDate = dateObj.toLocaleString("fr", {
    month: "short",
    day: "numeric",
  });
  return trimmedDate;
}
