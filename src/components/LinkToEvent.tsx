import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import NextLink from "next/link";
import { NextRouter, useRouter } from "next/router";
import EventTimeIndicator from "./EventTimeIndicator";
import CateringButton from "./buttons/CateringButton";

type Props = {
  docId: string;
  associationName: string;
  eventStartTime: string;
  eventDate: string;
  eventEndTime: string;
};

export default function LinkToEvent({
  docId,
  associationName,
  eventStartTime,
  eventDate,
  eventEndTime,
}: Props) {
  const router = useRouter();
  return (
    <Grid xs={12} key={docId} sx={{ alignItems: "center" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <CardContent
            href={`/evenement/${docId}`}
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
          <CateringButton
            onClick={() => navigateToRestaurationView(docId, router)}
          />
        </Box>
      </Card>
    </Grid>
  );
}

function navigateToRestaurationView(docId: string, router: NextRouter) {
  router.push(`/evenement/${docId}/restauration`);
}
