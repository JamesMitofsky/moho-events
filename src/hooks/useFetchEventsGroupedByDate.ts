import groupEventsByDate from "@/functions/groupEventsByDate";
import getEvents from "@/services/database/getEvents";
import { ModifiedServerResponse } from "@/types/globalTypes";
import { useEffect, useState } from "react";

export default function useFetchEventsGroupedByDate(
  eventsFilter: "all" | "upcoming" | "past"
) {
  const [events, setEvents] = useState<ModifiedServerResponse[][] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getEvents(eventsFilter);
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
