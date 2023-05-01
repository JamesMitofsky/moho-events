import useParamsToFetchEvent from "@/hooks/useParamsToFetchEvent";

export default function SpecificEventInformation() {
  const event = useParamsToFetchEvent();

  return (
    <>specific event info here, thanks. and voila, an id: kachow {event?.id}</>
  );
}
