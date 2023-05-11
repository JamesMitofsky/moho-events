import DisplayCatering from "@/components/DisplayInfo/DisplayCatering";
import DisplayGeneralInfo from "@/components/DisplayInfo/DisplayGeneralInfo";
import Loading from "@/components/Loading";
import useParamsToFetchEvent from "@/hooks/useParamsToFetchEvent";

export default function CateringPage() {
  const event = useParamsToFetchEvent();
  return event ? (
    <>
      <DisplayGeneralInfo
        createdBy={event.creationDetails.createdBy}
        {...event.generalInfo}
      />
      <DisplayCatering {...event.program} />
    </>
  ) : (
    <Loading />
  );
}
