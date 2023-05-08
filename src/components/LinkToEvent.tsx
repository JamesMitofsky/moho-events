import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import NextLink from "next/link";
import EventTimeIndicator from "./EventTimeIndicator";

type Props = {
  docId: string;
  associationName: string;
  numberOfPeople: string;
  eventStartTime: string;
  eventStartDate: string;
};

export default function LinkToEvent({
  docId,
  associationName,
  numberOfPeople,
  eventStartTime,
  eventStartDate,
}: Props) {
  return (
    <Grid
      xs={12}
      key={docId}
      href={`/evenement/${docId}`}
      component={NextLink}
      sx={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography variant="h3" color="primary">
            {associationName}
          </Typography>
          <Typography variant="subtitle1">
            {numberOfPeople && `${numberOfPeople} personnes`}
          </Typography>
        </CardContent>
        <EventTimeIndicator
          eventStartTime={eventStartTime}
          eventStartDate={eventStartDate}
        />
      </Card>
    </Grid>
  );
}
