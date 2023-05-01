import DisplayContact from "@/components/DisplayInfo/DisplayContact";
import DisplayGeneralInfo from "@/components/DisplayInfo/DisplayGeneralInfo";
import useParamsToFetchEvent from "@/hooks/useParamsToFetchEvent";
import { Container } from "@mui/system";

export default function SpecificEventInformation() {
  const event = useParamsToFetchEvent();

  return (
    <Container>
      {event ? (
        <>
          <DisplayGeneralInfo {...event.generalInfo} />
          <DisplayContact {...event.contact} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}
