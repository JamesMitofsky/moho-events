import DisplayCatering from "@/components/DisplayInfo/DisplayCatering";
import DisplayContact from "@/components/DisplayInfo/DisplayContact";
import DisplayGeneralInfo from "@/components/DisplayInfo/DisplayGeneralInfo";
import DisplayProgram from "@/components/DisplayInfo/DisplayProgram";
import DisplaySignage from "@/components/DisplayInfo/DisplaySignage";
import Loading from "@/components/Loading";
import DeleteButton from "@/components/buttons/DeleteButton";
import useParamsToFetchEvent from "@/hooks/useParamsToFetchEvent";

export default function SpecificEventInformation() {
  const event = useParamsToFetchEvent();

  console.log("event loaded", event);

  return (
    <>
      {event ? (
        <>
          <DisplayGeneralInfo
            createdBy={event.creationDetails.createdBy}
            {...event.generalInfo}
          />
          <DisplayContact {...event.contact} />
          <DisplayProgram {...event.program} />
          <DisplayCatering {...event.program} />
          <DisplaySignage {...event.signage} />
          <DeleteButton event={event} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
