import { ModifiedServerResponse } from "@/types/globalTypes";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../cloudFirestore";

export default async function archiveEvent(
  existingEvent: ModifiedServerResponse
) {
  try {
    // create duplicate of event in archive
    const docRef = doc(db, "archivedEvents", existingEvent.id);
    await setDoc(docRef, existingEvent);
    console.log("Archived a copy using the same ID");

    // delete event from eventsData
    await deleteDoc(doc(db, "eventsData", existingEvent.id));
    console.log("Deleted original event from main database");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
