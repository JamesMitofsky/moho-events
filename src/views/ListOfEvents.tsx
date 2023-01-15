import { Box, Button } from "@mui/material";
import EventsList from "../components/EventsList";
import PageTitle from "../components/Layouts/PageTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

const ListOfEvents = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <PageTitle title="L'Accueil" />
        <Button
          component={Link}
          to="/creer"
          startIcon={<AddCircleIcon />}
          variant="outlined"
        >
          Ajouter un événement
        </Button>
      </Box>
      <EventsList />
    </>
  );
};

export default ListOfEvents;
