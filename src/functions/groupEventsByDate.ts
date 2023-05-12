import { ModifiedServerResponse } from "@/types/globalTypes";

export default function groupEventsByDate(
  events: ModifiedServerResponse[]
): ModifiedServerResponse[][] {
  const eventsOrderedByStartTime = events.sort((a, b) => {
    const aTime = a.program.events[0].time.start as string;
    const bTime = b.program.events[0].time.start as string;
    return bTime.localeCompare(aTime);
  });

  // Create a map to group events by date
  const eventsByDate = new Map<string, ModifiedServerResponse[]>();
  eventsOrderedByStartTime.forEach((event) => {
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
