import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import PageTitle from "../components/Layouts/PageTitle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReturnHome from "../components/ReturnHome";
import { fetchSpecificEvent } from "../services/cloudFirestore";
import { useEffect, useState } from "react";
import { ModifiedServerResponse } from "../utils/globalTypes";

export default function RenderEventInfo() {
  const { eventId } = useParams<{ eventId: string }>();

  const [eventData, setEventData] = useState<ModifiedServerResponse>(
    {} as ModifiedServerResponse
  );

  // query firebase suing the eventId
  useEffect(() => {
    const getEvent = async function () {
      const res = await fetchSpecificEvent(eventId as string);
      setEventData(res);
    };
    getEvent();
  }, [eventId]);

  return (
    <>
      <ReturnHome />
      <Box sx={{ display: "grid", gap: 2 }}>
        <PageTitle
          title={eventData?.society?.eventName}
          subtitle="événement"
          icon={EventAvailableIcon}
        />
        {eventData?.society?.category && (
          <Box sx={{ display: "grid", gap: 2 }}>
            <Typography>
              Association Name: {eventData.society.associationName}
            </Typography>
            <Typography>Category: {eventData.society.category}</Typography>
            <Typography>Event Name: {eventData.society.eventName}</Typography>
            <Typography>
              Number of Quote: {eventData.society.numberOfQuote}
            </Typography>
            <Typography>Sold by: {eventData.society.soldBy}</Typography>
            <Typography>Comments: {eventData.society.comments}</Typography>
          </Box>
        )}
      </Box>
    </>
  );
}
