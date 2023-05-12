import { ModifiedServerResponse } from "@/types/globalTypes";

export default async function updateEvent(
  newData: ModifiedServerResponse,
  eventId: string
) {
  try {
    // Update the document in Firestore
    // await
    // collection(db, "eventsData"),.doc(eventId).update(newData);

    // Handle success or update UI accordingly
    console.log("Data updated successfully");
  } catch (error) {
    // Handle error and update UI accordingly
    console.error("Error updating data:", error);
  }
}
