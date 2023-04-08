import EventsList from "@/components/EventsList";
import PageTitle from "@/components/layouts/PageTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button, Link } from "@mui/material";

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
          href="/creer"
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
