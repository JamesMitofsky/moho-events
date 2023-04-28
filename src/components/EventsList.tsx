import useFetchEventsGroupedByDate from "@/hooks/useFetchEventsGroupedByDate";
import { Link, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function EventsList() {
  const events = useFetchEventsGroupedByDate();

  console.log(events);

  return (
    <>
      {/* <SpacedChildren
        flexDirection="row"
        additionalStyles={{ alignItems: "center" }}
      >
        <Typography variant="subtitle1">Aujourd'hui </Typography>
        <Typography variant="subtitle2">{new Date().toDateString()}</Typography>
      </SpacedChildren> */}
      {/* <List></List> */}

      {/* TODO: filter these to be in a chronology */}
      {events?.map((eventGroup) => {
        const trimDateString = () => {
          const stringifiedDate = eventGroup[0].generalInfo.eventDate;
          const dateObj = new Date(stringifiedDate);
          const trimmedDate = dateObj.toLocaleString("fr", {
            month: "short",
            day: "numeric",
          });
          return trimmedDate;
        };

        const trimmedDate = trimDateString();
        const constructedGroup = eventGroup.map((event) => {
          const associationName = event.generalInfo?.associationName;

          return (
            <Link key={event.docId} href={`/evenement/${event.docId}`}>
              <ListItem divider>
                <ListItemText
                  primary={`${associationName}`}
                  secondary={"Event type information here"}
                />
              </ListItem>
            </Link>
          );
        });
        return (
          <List>
            <Typography>{trimmedDate}</Typography>
            {constructedGroup}
          </List>
        );
      })}
    </>
  );
}
