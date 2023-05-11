import EventsList from "@/components/EventsList";
import PageTitle from "@/components/layouts/PageTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button, Link, Typography } from "@mui/material";
import NextLink from "next/link";

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
        <Box>
          <PageTitle title="L'Accueil" />
          <Typography>
            <Link component={NextLink} href="/evenements-passes">
              Les Evènements Passés
            </Link>
          </Typography>
        </Box>
        <Button
          component={Link}
          href="/creer"
          startIcon={<AddCircleIcon />}
          variant="outlined"
        >
          Ajouter un évènement
        </Button>
      </Box>
      <EventsList eventsFilter="upcoming" />
    </>
  );
};

export default ListOfEvents;
