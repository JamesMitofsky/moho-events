import addIdToEventData from "@/functions/addIdToEventData";
import {
  ModifiedServerResponse,
  ModifiedServerResponsePaths,
} from "@/types/globalTypes";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../cloudFirestore";

/**
 * @param {string} eventsFilter - "upcoming" or "past", otherwise all events
 */
type Props = (
  eventsFilter: "upcoming" | "past" | "all"
) => Promise<ModifiedServerResponse[]>;

const getEvents: Props = async (eventsFilter) => {
  const filterDirection = eventsFilter === "upcoming" ? ">=" : "<";

  const today = new Date().toISOString();

  const eventDate: ModifiedServerResponsePaths = "generalInfo.dateAsISO";
  const queryParams = query(
    collection(db, "eventsData"),
    orderBy(eventDate),
    where(eventDate, filterDirection, today)
  );
  const querySnapshot = await getDocs(queryParams);
  let allEvents: ModifiedServerResponse[] = [];
  querySnapshot.forEach((doc) => {
    const eventWithId = addIdToEventData(doc);

    allEvents.push(eventWithId);
  });
  console.log("sorted, ordered", allEvents.length, allEvents);
  return allEvents;
};

export default getEvents;
