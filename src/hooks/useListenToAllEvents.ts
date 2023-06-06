import addIdToEventData from "@/functions/addIdToEventData";
import { db } from "@/services/cloudFirestore";
import {
  ModifiedServerResponse,
  ModifiedServerResponsePaths,
} from "@/types/globalTypes";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

type Props = (
  eventsFilter: "upcoming" | "past" | "all"
) => ModifiedServerResponse[];

const useListenToAllEvents: Props = (eventsFilter) => {
  const [events, setEvents] = useState<ModifiedServerResponse[]>([]);

  const filterDirection = eventsFilter === "upcoming" ? ">=" : "<";

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const yesterdayAsISO = yesterday.toISOString();

  const eventDate: ModifiedServerResponsePaths = "generalInfo.dateAsISO";
  const queryParams = query(
    collection(db, "eventsData"),
    orderBy(eventDate),
    where(eventDate, filterDirection, yesterdayAsISO)
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(queryParams, (querySnapshot) => {
      const temporaryEventsHolder: any = [];
      querySnapshot.forEach((doc) => {
        const eventWithId = addIdToEventData(doc);
        temporaryEventsHolder.push(eventWithId);
      });
      setEvents(temporaryEventsHolder);
    });

    return unsubscribe;
  }, [eventsFilter]);

  return events;
};

export default useListenToAllEvents;
