"use client";

import { Box, Button, Link } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import EventsList from "@/components/EventsList";
import PageTitle from "@/components/layouts/PageTitle";

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
