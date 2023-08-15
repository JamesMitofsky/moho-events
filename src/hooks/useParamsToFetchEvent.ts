import { verifySchemaOfOneEvent } from "@/functions/schemaVerificicationFunctions";
import { fetchSpecificEvent } from "@/services/cloudFirestore";
import { ModifiedServerResponse } from "@/types/globalTypes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * Expects to get eventId from the router.query
 *
 * State begins as undefined, then becomes either the actual event object or null if the eventId is invalid
 */
export default function useParamsToFetchEvent() {
  // Define your state variables
  const [event, setEvent] = useState<ModifiedServerResponse | null | undefined>(
    undefined
  );

  const router = useRouter();
  const { eventId } = router.query;

  // query firebase using the eventeventId
  useEffect(() => {
    if (!eventId) return;

    const getEvent = async function () {
      const res = await fetchSpecificEvent(eventId as string);

      if (!res) throw new Error("Unable to fetch individual event.");

      const onlyEventsMatchingCurrentSchema = verifySchemaOfOneEvent(res);

      onlyEventsMatchingCurrentSchema
        ? setEvent(onlyEventsMatchingCurrentSchema)
        : setEvent(null);
    };
    getEvent();
  }, [eventId]);

  return event;
}
