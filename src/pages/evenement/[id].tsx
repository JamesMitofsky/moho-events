import { fetchSpecificEvent } from "@/services/cloudFirestore";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SpecificEventInformation() {
  const router = useRouter();
  const { id } = router.query;

  // query firebase using the eventId
  useEffect(() => {
    if (!id) return;
    const getEvent = async function () {
      const res = await fetchSpecificEvent(id as string);
      // setEventData(res);
      console.log(res);
    };
    getEvent();
  }, [id]);

  return <>specific event info here, thanks. and voila, an id: {id}</>;
}
