import { fetchAllEvents } from "../services/cloudFirestore";
import { useEffect, useState } from "react";
import { ListItem, List, ListItemText } from "@mui/material";
import { ModifiedServerResponse } from "../utils/globalTypes";
import { Link } from "react-router-dom";
import { EventAvailableTwoTone } from "@mui/icons-material";

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
        return (
          <Link to={`/evenement/${event.docId}`}>
            <ListItem divider key={event.docId}>
              <ListItemText
                primary={event?.society?.associationName}
                secondary={event.society.eventName}
              />
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
}
