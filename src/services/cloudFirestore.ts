import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { AllEventGroups, ModifiedServerResponse } from "../types/globalTypes";

// get already initialized instance of firebase app
import addIdToEventData from "@/functions/addIdToEventData";
import { app, auth } from "./firebase";

export const db = getFirestore(app);

export async function uploadEventData(
  data: AllEventGroups
): Promise<string | boolean> {
  console.log(data);
  const authorIncluded = {
    ...data,
    creationDetails: {
      createdBy: auth.currentUser?.displayName,
      creatorEmail: auth.currentUser?.email,
      creatorId: auth.currentUser?.uid,
      createdAt: serverTimestamp(),
    },
  };
  try {
    const docRef = await addDoc(collection(db, "eventsData"), authorIncluded);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}

export async function fetchAllEvents(): Promise<ModifiedServerResponse[]> {
  const querySnapshot = await getDocs(collection(db, "eventsData"));
  let allEvents: ModifiedServerResponse[] = [];
  querySnapshot.forEach((doc) => {
    const eventWithId = addIdToEventData(doc);

    allEvents.push(eventWithId);
  });
  return allEvents;
}

export async function fetchSpecificEvent(
  eventId: string,
  databaseName: string
): Promise<ModifiedServerResponse | null> {
  const docRef = doc(db, databaseName, eventId);

  const eventData = await getDoc(docRef);
  if (eventData.exists()) {
    const res = eventData.data();
    const eventDataWithId = {
      ...res,
      id: eventId,
    } as ModifiedServerResponse;

    return eventDataWithId;
  } else {
    return null;
  }
}
