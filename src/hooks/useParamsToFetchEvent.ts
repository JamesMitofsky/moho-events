import { fetchSpecificEvent } from "@/services/cloudFirestore";
import { ModifiedServerResponse } from "@/types/globalTypes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useParamsToFetchEvent() {
  // Define your state variables
  const [event, setEvent] = useState<ModifiedServerResponse | null>(null);

  const router = useRouter();
  const { id } = router.query;

  // query firebase using the eventId
  useEffect(() => {
    if (!id) return;
    const getEvent = async function () {
      const res = await fetchSpecificEvent(id as string);
      setEvent(res);
    };
    getEvent();
  }, [id]);

  return event;
}
