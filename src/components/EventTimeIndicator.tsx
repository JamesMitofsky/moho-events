import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

type Props = {
  eventStartTime: string;
  eventEndTime: string;
  eventDate: string;
};

export default function EventTimeIndicator({
  eventStartTime,
  eventEndTime,
  eventDate,
}: Props) {
  const startTimeObj = new Date(eventStartTime);
  const endTimeObj = new Date(eventEndTime);
  const dateObj = new Date(eventDate);

  const eventStartTimeAndDate = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate(),
    startTimeObj.getHours(),
    startTimeObj.getMinutes()
  );

  const eventEndTimeAndDate = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate(),
    endTimeObj.getHours(),
    endTimeObj.getMinutes()
  );

  const isAfterEventStart = eventStartTimeAndDate < new Date();
  const isNotYetFinished = eventEndTimeAndDate > new Date();

  const isEventActive = isAfterEventStart && isNotYetFinished;
  return isEventActive ? (
    <Box
      sx={{
        m: 1,
        height: "fit-content",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: 1,
      }}
    >
      <Typography component="span" sx={{ fontSize: 12, color: grey[600] }}>
        Actif
      </Typography>
      <Box
        sx={{
          backgroundColor: "#03bd03",
          borderRadius: "50%",
          height: 10,
          width: 10,
        }}
      />
    </Box>
  ) : null;
}
