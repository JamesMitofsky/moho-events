import DisplayCatering from "@/components/DisplayInfo/DisplayCatering";
import DisplayContact from "@/components/DisplayInfo/DisplayContact";
import DisplayGeneralInfo from "@/components/DisplayInfo/DisplayGeneralInfo";
import DisplayProgram from "@/components/DisplayInfo/DisplayProgram";
import DisplaySignage from "@/components/DisplayInfo/DisplaySignage";
import Loading from "@/components/Loading";
import useParamsToFetchEvent from "@/hooks/useParamsToFetchEvent";
import { Container } from "@mui/system";

export default function SpecificEventInformation() {
  const event = useParamsToFetchEvent();

  return (
    <Container sx={{ height: "100%" }}>
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
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
