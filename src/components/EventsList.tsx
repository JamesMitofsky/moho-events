import {
  Card,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import filterDateOrNumberToDate from "../functions/filterDateOrNumberToDate";
import { fetchAllEvents } from "../services/cloudFirestore";
import { ModifiedServerResponse } from "../types/globalTypes";
import SpacedChildren from "./layouts/SpacedChildren";

export default function EventsList() {
  const [events, setEvents] = useState<ModifiedServerResponse[]>([]);
  const [pastEvents, setPastEvents] = useState<ModifiedServerResponse[]>([]);

  function returnEventSummaryCards() {
    const eventSummaries = events.flatMap((event) => {
      const eventDateAsSeconds = (
        event.generalInfo?.eventDate as { seconds: number }
      ).seconds;

      // if date doesn't match today, return empty array
      const date = filterDateOrNumberToDate(eventDateAsSeconds);
      if (date) {
        const associationName = event.generalInfo?.associationName;
        const today = new Date();
        if (date.getDate() !== today.getDate()) {
          return [];
        } else
          return [
            <Link
              component={NextLink}
              key={event.docId}
              href={`/evenement/${event.docId}`}
            >
              <Card>
                <CardContent>
                  <Typography variant="h3">
                    {event.generalInfo?.eventName}
                  </Typography>
                </CardContent>
              </Card>
            </Link>,
          ];
      }
    });
    return eventSummaries;
  }

  useEffect(() => {
    const getEvents = async function () {
      const res = await fetchAllEvents();

      // sort res array by decending date and when there is no date, put it at the end
      res.sort((a, b) => {
        const dateA = a.generalInfo?.eventDate as { seconds: number };
        const dateB = b.generalInfo?.eventDate as { seconds: number };

        if (dateA && dateB) {
          return dateB.seconds - dateA.seconds;
        } else if (dateA && !dateB) {
          return -1;
        } else if (!dateA && dateB) {
          return 1;
        } else {
          return 0;
        }
      });
      setPastEvents(pastEvents);
    };
    getEvents();
  }, []);

  return (
    <>
      <SpacedChildren
        flexDirection="row"
        additionalStyles={{ alignItems: "center" }}
      >
        <Typography variant="subtitle1">Aujourd'hui </Typography>
        <Typography variant="subtitle2">{new Date().toDateString()}</Typography>
      </SpacedChildren>
      <List></List>
      <Typography variant="subtitle2" sx={{ mt: 10 }}>
        évènements passés
      </Typography>
      <List>
        {pastEvents.map((event) => {
          const eventName = event.generalInfo?.eventName;
          const associationName = event.generalInfo?.associationName;

          const dateFromServer = event.generalInfo?.eventDate as {
            seconds: number;
          };

          const formattedDate = dateFromServer
            ? filterDateOrNumberToDate(
                dateFromServer.seconds
              ).toLocaleDateString("fr-FR", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })
            : "Pas de date";

          return (
            <Link key={event.docId} href={`/evenement/${event.docId}`}>
              <ListItem divider>
                <ListItemText
                  primary={`${eventName} - ${associationName}`}
                  secondary={formattedDate}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );
}
