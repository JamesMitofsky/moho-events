import { fetchAllEvents } from "../services/cloudFirestore";
import { useEffect, useState } from "react";
import { ListItem, List, ListItemText } from "@mui/material";
import { ModifiedServerResponse } from "../utils/globalTypes";
import { Link } from "react-router-dom";
import { EventAvailableTwoTone } from "@mui/icons-material";
import { toDate } from "date-fns";

export default function EventsList() {
  const [events, setEvents] = useState<ModifiedServerResponse[]>([]);

  useEffect(() => {
    const getEvents = async function () {
      const res = await fetchAllEvents();
      setEvents(res);
    };
    getEvents();
  }, []);

  return (
    <List>
      {events.map((event) => {
        const eventName = event.society?.eventName;
        const associationName = event.society?.associationName;
        // TODO fix this any type override — it's a timestamp received from date-fns while using MUI time picker
        const date: any = event.program?.eventDate;
        const formattedDate = date
          ? toDate(date.seconds).toString()
          : "Pas de date";
        console.log(typeof date, formattedDate);

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
  );
}
