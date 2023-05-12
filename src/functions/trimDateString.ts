import { ModifiedServerResponse } from "@/types/globalTypes";

export default function trimDateString(eventGroup: ModifiedServerResponse) {
  const dateObj = new Date(eventGroup.generalInfo.dateAsISO);
  const trimmedDate = dateObj.toLocaleString("fr", {
    month: "short",
    day: "numeric",
  });
  return trimmedDate;
}
