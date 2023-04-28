import { fetchAllEvents } from "@/services/cloudFirestore";
import { ModifiedServerResponse } from "@/types/globalTypes";
import { useEffect, useState } from "react";

export default function useFetchEventsGroupedByDate() {
  const [events, setEvents] = useState<ModifiedServerResponse[][] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchAllEvents();
        const eventsGroupedByDate = groupEventsByDate(res);
        setEvents(eventsGroupedByDate);
      } catch (error) {
        alert("Désolé, il y avait un problème avec la requête.");
      }
    };
    fetchData();
  }, []);

  return events;
}

function groupEventsByDate(
  events: ModifiedServerResponse[]
): ModifiedServerResponse[][] {
  // Create a map to group events by date
  const eventsByDate = new Map<string, ModifiedServerResponse[]>();
  events.forEach((event) => {
    console.log(event);
    // Get the date of the event in yyyy-mm-dd format
    const dateKey = new Date(event.generalInfo.eventDate as string)
      .toISOString()
      .slice(0, 10);
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
