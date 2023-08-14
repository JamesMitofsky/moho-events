import useParamsToFetchEvent from "@/hooks/useParamsToFetchEvent";
import { Alert, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DisplayCatering from "./DisplayInfo/DisplayCatering";
import DisplayConfiguration from "./DisplayInfo/DisplayConfiguration";
import DisplayContact from "./DisplayInfo/DisplayContact";
import DisplayGeneralInfo from "./DisplayInfo/DisplayGeneralInfo";
import DisplayProgram from "./DisplayInfo/DisplayProgram";
import DisplaySignage from "./DisplayInfo/DisplaySignage";
import Loading from "./Loading";

/**
 * Check if the event exists in the deleted events database.
 */
export default function EventDoesNotExist() {
  const eventFromArchive = useParamsToFetchEvent("archivedEvents");

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {eventFromArchive ? (
        <>
          <Alert sx={{ mb: 5 }} severity="warning">
            <Typography>Cet évènement a été supprimé.</Typography>
          </Alert>
          <DisplayGeneralInfo
            createdBy={eventFromArchive.creationDetails.createdBy}
            id={eventFromArchive.id}
            {...eventFromArchive.generalInfo}
          />
          <DisplayContact {...eventFromArchive.contact} />
          <DisplayProgram {...eventFromArchive.program} />
          <DisplayCatering {...eventFromArchive.program} />
          <DisplaySignage {...eventFromArchive.signage} />
          <DisplayConfiguration {...eventFromArchive.program} />
        </>
      ) : eventFromArchive === undefined ? (
        <Loading />
      ) : (
        <Typography>Cet évènement n'a jamais existé.</Typography>
      )}
    </Box>
  );
}
