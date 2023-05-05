import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

type Props = {
  eventStartTime: string;
  eventStartDate: string;
};

export default function EventTimeIndicator({
  eventStartTime,
  eventStartDate,
}: Props) {
  const eventTimeAsDateObj = new Date(eventStartTime);
  const eventDateAsDateObj = new Date(eventStartDate);

  const inferredSpecificStartDate = new Date(
    eventDateAsDateObj.getFullYear(),
    eventDateAsDateObj.getMonth(),
    eventDateAsDateObj.getDate(),
    eventTimeAsDateObj.getHours(),
    eventTimeAsDateObj.getMinutes()
  );

  const isEventActive = inferredSpecificStartDate < new Date();
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
