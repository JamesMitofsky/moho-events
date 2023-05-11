import { fetchSpecificEvent } from "@/services/cloudFirestore";
import { ModifiedServerResponse } from "@/types/globalTypes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useParamsToFetchEvent() {
  // Define your state variables
  const [event, setEvent] = useState<ModifiedServerResponse | null>(null);

  const router = useRouter();
  const { eventId } = router.query;

  // query firebase using the eventeventId
  useEffect(() => {
    if (!eventId) return;
    const getEvent = async function () {
      const res = await fetchSpecificEvent(eventId as string);
      setEvent(res);
    };
    getEvent();
  }, [eventId]);

  return event;
}
