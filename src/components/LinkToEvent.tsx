import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import NextLink from "next/link";
import { useRouter } from "next/router";
import EventTimeIndicator from "./EventTimeIndicator";

type Props = {
  docId: string;
  associationName: string;
  eventStartTime: string;
  eventDate: string;
  eventEndTime: string;
  linkToSpecificEventSection?: "restauration";
};

export default function LinkToEvent({
  docId,
  associationName,
  eventStartTime,
  eventDate,
  eventEndTime,
  linkToSpecificEventSection,
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
      </Card>
    </Grid>
  );
}
