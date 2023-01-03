import { useParams, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import PageTitle from "../components/Layouts/PageTitle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReturnHome from "../components/ReturnHome";

export default function RenderEventInfo() {
  const { eventID } = useParams<{ eventID: string }>();
  const path = useLocation().pathname;

  // use the ID from URL to query Firebase API

  const pageTitle = "TITLE";

  return (
    <>
      <ReturnHome />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PageTitle
          title={pageTitle}
          subtitle="événement"
          icon={EventAvailableIcon}
        />
      </Box>
    </>
  );
}
