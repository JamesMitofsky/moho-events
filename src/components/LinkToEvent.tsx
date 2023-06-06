import getEventEndTime from "@/functions/getEventEndTime";
import { ModifiedServerResponse } from "@/types/globalTypes";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import NextLink from "next/link";
import EventTimeIndicator from "./EventTimeIndicator";
import DeleteButtonIcon from "./buttons/DeleteButtonIcon";

type Props = {
  event: ModifiedServerResponse;
  eventDate: string;
  linkToSpecificEventSection?: "restauration";
};

export default function LinkToEvent({
  event,
  eventDate,
  linkToSpecificEventSection,
}: Props) {
  const docId = event.id;
  const associationName = event.generalInfo?.associationName;
  const eventStartTime = event.program?.events[0].time.start as string;

  const eventEndTime = getEventEndTime(event.program?.events);

  return (
    <Grid xs={12} key={docId} sx={{ alignItems: "center" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CardContent
          href={`/evenement/${docId}${
            linkToSpecificEventSection ? `/${linkToSpecificEventSection}` : ""
          }`}
          component={NextLink}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            textDecoration: "none",
          }}
        >
          <Box>
            <Typography variant="h3" color="primary" sx={{ mb: 1 }}>
              {associationName}
            </Typography>
            <EventTimeIndicator
              eventStartTime={eventStartTime}
              eventEndTime={eventEndTime}
              eventDate={eventDate}
            />
          </Box>
        </CardContent>
        <DeleteButtonIcon event={event} />
      </Card>
    </Grid>
  );
}
