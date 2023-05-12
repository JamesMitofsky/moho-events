import { ModifiedServerResponse } from "@/types/globalTypes";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../cloudFirestore";

export default async function updateEvent(
  eventToUpdate: ModifiedServerResponse
) {
  try {
    console.log("eventToUpdate", eventToUpdate);
    // create new event
    const docRef = await addDoc(collection(db, "eventsData"), eventToUpdate);
    console.log(
      "Created a new event with the modifications, creating a new ID"
    );

    // delete existing event from eventsData
    await deleteDoc(doc(db, "eventsData", eventToUpdate.id));
    console.log(
      "Deleted original event. Now navigate to the 'updated version' of the event"
    );

    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
