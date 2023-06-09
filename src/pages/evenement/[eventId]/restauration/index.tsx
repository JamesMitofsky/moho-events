import DisplayCatering from "@/components/DisplayInfo/DisplayCatering";
import Loading from "@/components/Loading";
import useParamsToFetchEvent from "@/hooks/useParamsToFetchEvent";
import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function CateringPage() {
  const event = useParamsToFetchEvent("eventsData");
  return event ? (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h1">
            {event.generalInfo.associationName}
          </Typography>
          <Typography sx={{ mb: 4 }} variant="subtitle1">
            Evènement
          </Typography>
        </Box>
        <Box>
          <Link component={NextLink} href={`/evenement/${event.id}`}>
            <Typography>Voir tout l'évènement</Typography>
          </Link>
        </Box>
      </Box>
      <DisplayCatering {...event.program} />
    </>
  ) : (
    <Loading />
  );
}
