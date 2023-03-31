import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { ModifiedServerResponse } from "../utilities/globalTypes";
import { auth } from "./firebase";

// get already initialized instance of firebase app
import { app } from "./firebase";

export const db = getFirestore(app);

export async function uploadEventData(data: any): Promise<string | boolean> {
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
  let allEvents: any = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());

    const docData = doc.data();
    const docId = doc.id;
    const docWithId = { ...docData, docId: docId };

    allEvents.push(docWithId);
  });
  return allEvents;
}

export async function fetchSpecificEvent(
  eventId: string
): Promise<ModifiedServerResponse> {
  const querySnapshot = await getDocs(collection(db, "eventsData"));
  let specificEvent: any = {};
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());

    const docData = doc.data();
    const docId = doc.id;
    const docWithId = { ...docData, docId: docId };

    if (docId === eventId) {
      specificEvent = docWithId;
    }
  });
  return specificEvent;
}
