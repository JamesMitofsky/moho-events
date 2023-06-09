import DisplayCatering from "@/components/DisplayInfo/DisplayCatering";
import DisplayConfiguration from "@/components/DisplayInfo/DisplayConfiguration";
import DisplayContact from "@/components/DisplayInfo/DisplayContact";
import DisplayGeneralInfo from "@/components/DisplayInfo/DisplayGeneralInfo";
import DisplayProgram from "@/components/DisplayInfo/DisplayProgram";
import DisplaySignage from "@/components/DisplayInfo/DisplaySignage";
import EventDoesNotExist from "@/components/EventDoesNotExist";
import Loading from "@/components/Loading";
import DeleteButton from "@/components/buttons/DeleteButton";
import useParamsToFetchEvent from "@/hooks/useParamsToFetchEvent";

export default function SpecificEventInformation() {
  const event = useParamsToFetchEvent("eventsData");

  // const eventExists = event !== undefined || event !== null;
  // const eventExists = useMemo(
  //   () => event !== undefined || event !== null,
  //   [event]
  // );

  return (
    <>
      {event ? (
        <>
          <DisplayGeneralInfo
            createdBy={event.creationDetails.createdBy}
            id={event.id}
            {...event.generalInfo}
          />
          <DisplayContact {...event.contact} />
          <DisplayProgram {...event.program} />
          <DisplayCatering {...event.program} />
          <DisplaySignage {...event.signage} />
          <DisplayConfiguration configurations={event.configuration} />
          <DeleteButton event={event} />
        </>
      ) : event === undefined ? (
        <Loading />
      ) : (
        <EventDoesNotExist />
      )}
    </>
  );
}
