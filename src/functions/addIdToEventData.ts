import { ModifiedServerResponse } from "@/types/globalTypes";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export default function addIdToEventData(
  doc: QueryDocumentSnapshot<DocumentData>
): ModifiedServerResponse {
  const docData = doc.data() as Omit<ModifiedServerResponse, "id">;

  const completeEvent: ModifiedServerResponse = {
    ...docData,
    id: doc.id,
  };

  return completeEvent;
}
