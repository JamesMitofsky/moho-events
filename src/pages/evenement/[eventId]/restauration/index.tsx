import DisplayCatering from "@/components/DisplayInfo/DisplayCatering";
import Loading from "@/components/Loading";
import useParamsToFetchEvent from "@/hooks/useParamsToFetchEvent";
import { Typography } from "@mui/material";

export default function CateringPage() {
  const event = useParamsToFetchEvent();
  return event ? (
    <>
      <Typography variant="h1">{event.generalInfo.associationName}</Typography>
      <Typography sx={{ mb: 4 }} variant="subtitle1">
        Evènement
      </Typography>
      <DisplayCatering {...event.program} />
    </>
  ) : (
    <Loading />
  );
}
