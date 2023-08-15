import addIdToEventData from "@/functions/addIdToEventData";
import { verifySchemaOfMultipleEvents } from "@/functions/schemaVerificicationFunctions";
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
  const queryParamToGetEventsBasedOnDate = where(
    eventDate,
    filterDirection,
    yesterdayAsISO
  );

  const queryParams = query(
    collection(db, "eventsData"),
    orderBy(eventDate),
    queryParamToGetEventsBasedOnDate
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(queryParams, (querySnapshot) => {
      const temporaryEventsHolder: ModifiedServerResponse[] = [];
      querySnapshot.forEach((doc) => {
        const eventWithId = addIdToEventData(doc);

        // if the event is archived, do nothing. Otherwise add it to the array of events to send the user.
        if (eventWithId.eventIsArchived) {
          return;
        } else {
          temporaryEventsHolder.push(eventWithId);
        }
      });

      console.log(temporaryEventsHolder);

      const eventsMatchingCurrentSchema = verifySchemaOfMultipleEvents(
        temporaryEventsHolder
      );

      setEvents(eventsMatchingCurrentSchema);
    });

    return unsubscribe;
  }, [eventsFilter]);

  return events;
};

export default useListenToAllEvents;
