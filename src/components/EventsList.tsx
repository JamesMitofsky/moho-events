import { fetchAllEvents } from "../services/cloudFirestore";
import { useEffect, useState } from "react";
import { ListItem, List, ListItemText, Typography } from "@mui/material";
import { ModifiedServerResponse } from "../utils/globalTypes";
import { Link } from "react-router-dom";
import filterDateOrNumberToDate from "../utils/filterDateOrNumberToDate";

export default function EventsList() {
  const [events, setEvents] = useState<ModifiedServerResponse[]>([]);
  const [pastEvents, setPastEvents] = useState<ModifiedServerResponse[]>([]);

  useEffect(() => {
    const getEvents = async function () {
      const res = await fetchAllEvents();

      // sort res array by decending date and when there is no date, put it at the end
      res.sort((a, b) => {
        const dateA = a.program?.eventDate as { seconds: number };
        const dateB = b.program?.eventDate as { seconds: number };

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
        const date = event.program?.eventDate as { seconds: number };
        if (date) {
          return date.seconds > Date.now() / 1000;
        } else {
          return false;
        }
      });
      setEvents(upcomingEvents);

      // array of events which have no date or the date is passed
      const pastEvents = res.filter((event) => {
        const date = event.program?.eventDate as { seconds: number };
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
          const eventName = event.society?.eventName;
          const associationName = event.society?.associationName;

          const dateFromServer = event.program?.eventDate as {
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
            <Link key={event.docId} to={`/evenement/${event.docId}`}>
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
          const eventName = event.society?.eventName;
          const associationName = event.society?.associationName;

          const dateFromServer = event.program?.eventDate as {
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
            <Link key={event.docId} to={`/evenement/${event.docId}`}>
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
