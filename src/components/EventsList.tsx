import { AllEventGroups } from "../utils/globalTypes";
import { fetchAllEvents } from "../services/cloudFirestore";
import { useEffect, useState } from "react";
import { ListItem, List, ListItemText } from "@mui/material";

interface EventWithMetadata extends AllEventGroups {
  creationDetails: {
    creatorId: string;
    createdAt: Date;
    createdBy: string;
    creatorEmail: string;
  };
  docId: string;
}

export default function EventsList() {
  const [events, setEvents] = useState<EventWithMetadata[]>([]);

  useEffect(() => {
    const getEvents = async function () {
      const res = await fetchAllEvents();
      setEvents(res);
      console.log(events);
    };
    getEvents();
  }, []);

  return (
    <List>
      {events.map((event) => {
        return (
          <ListItem divider key={event.docId}>
            <ListItemText
              primary={event?.society?.associationName}
              secondary={event.society.eventName}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
