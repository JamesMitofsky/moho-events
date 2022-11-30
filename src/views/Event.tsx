import { useParams, Link as RouterLink, useLocation } from "react-router-dom";
import { List, ListItem, ListItemText, Box, Link, Button } from "@mui/material";
import PageTitle from "../components/Layouts/PageTitle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { v4 as uuidv4 } from "uuid";
import EditIcon from "@mui/icons-material/Edit";
import ReturnHome from "../components/ReturnHome";
import EventData from "../components/EventData";

export default function Event() {
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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link component={RouterLink} to={`${path}/edit`}>
          <Button variant="outlined" startIcon={<EditIcon fontSize="small" />}>
            Mettre à jour
          </Button>
        </Link>
        {/* <DeleteTile group={group} /> */}
      </Box>
      <Box>
        <EventData />
      </Box>
    </>
  );
}
