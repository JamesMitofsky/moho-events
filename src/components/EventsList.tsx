import { Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import filterDateOrNumberToDate from "../functions/filterDateOrNumberToDate";
import { fetchAllEvents } from "../services/cloudFirestore";
import { ModifiedServerResponse } from "../types/globalTypes";

export default function EventsList() {
  const [events, setEvents] = useState<ModifiedServerResponse[]>([]);
  const [pastEvents, setPastEvents] = useState<ModifiedServerResponse[]>([]);

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

      // remove events which have no date or the date is passed
      const upcomingEvents = res.filter((event) => {
        const date = event.generalInfo?.eventDate as { seconds: number };
        if (date) {
          return date.seconds > Date.now() / 1000;
        } else {
          return false;
        }
      });
      setEvents(upcomingEvents);

      // array of events which have no date or the date is passed
      const pastEvents = res.filter((event) => {
        const date = event.generalInfo?.eventDate as { seconds: number };
        if (date) {
          return date.seconds < Date.now() / 1000;
        } else {
          return true;
        }
      });
      setPastEvents(pastEvents);
    };
    getEvents();
  }, []);

  return (
    <>
      <Typography variant="subtitle2">Prochains événements</Typography>
      <List>
        {events.map((event) => {
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
            <Link
              component={NextLink}
              key={event.docId}
              href={`/evenement/${event.docId}`}
            >
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
      <Typography variant="subtitle2" sx={{ mt: 10 }}>
        Événements passés
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
