import { ModifiedServerResponse } from "@/types/globalTypes";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../cloudFirestore";

export default async function archiveEvent(
  existingEvent: ModifiedServerResponse
) {
  try {
    // create duplicate of event in archive
    const docRef = doc(db, "eventsData", existingEvent.id);

    await updateDoc(docRef, {
      eventIsArchived: true,
    });
    console.log("Archived event by updating its 'archived' field to `true`");
  } catch (e) {
    console.error("Error archiving this document document: ", e);
  }
}
