import { ModifiedServerResponse } from "@/types/globalTypes";

export default function groupEventsByDate(
  events: ModifiedServerResponse[]
): ModifiedServerResponse[][] {
  const eventsOrderedByStartTime = events.sort((a, b) => {
    const aTime = a.program.events[0].time.start as string;
    const bTime = b.program.events[0].time.start as string;
    return bTime.localeCompare(aTime);
  });

  const eventsByDate = new Map<string, ModifiedServerResponse[]>();
  eventsOrderedByStartTime.forEach((event) => {
    const dateKey = event.generalInfo.dateAsISO.slice(0, 10);
    if (!eventsByDate.has(dateKey)) {
      eventsByDate.set(dateKey, []);
    }
    eventsByDate.get(dateKey)?.push(event);
  });

  const eventGroups: ModifiedServerResponse[][] = Array.from(
    eventsByDate.values()
  );

  const sortedEventGroups = eventGroups.sort((a, b) => {
    const aMonth = a[0].generalInfo.dateAsISO.slice(0, 7);
    const bMonth = b[0].generalInfo.dateAsISO.slice(0, 7);
    return aMonth.localeCompare(bMonth);
  });

  return sortedEventGroups;
}
