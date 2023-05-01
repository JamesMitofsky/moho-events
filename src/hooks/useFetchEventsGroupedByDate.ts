import getEvents from "@/services/database/getEvents";
import { ModifiedServerResponse } from "@/types/globalTypes";
import { useEffect, useState } from "react";

export default function useFetchEventsGroupedByDate() {
  const [events, setEvents] = useState<ModifiedServerResponse[][] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getEvents("upcoming");
        const eventsGroupedByDate = groupEventsByDate(res);
        setEvents(eventsGroupedByDate);
      } catch (error) {
        alert("Désolé, il y avait un problème avec la requête.");
      }
    };
    fetchData();
  }, []);
  console.log(events);
  return events;
}

function groupEventsByDate(
  events: ModifiedServerResponse[]
): ModifiedServerResponse[][] {
  // Create a map to group events by date
  const eventsByDate = new Map<string, ModifiedServerResponse[]>();
  events.forEach((event) => {
    const dateKey = event.generalInfo.dateAsISO.slice(0, 10);
    console.log(dateKey);
    if (!eventsByDate.has(dateKey)) {
      eventsByDate.set(dateKey, []);
    }
    eventsByDate.get(dateKey)?.push(event);
  });

  // Convert the map to an array of arrays
  const eventGroups: ModifiedServerResponse[][] = [];
  eventsByDate.forEach((events) => eventGroups.push(events));

  return eventGroups;
}
