"use client";
import PageTitle from "@/components/Layouts/PageTitle";
import { Button, Box, Typography } from "@mui/material";
import Link from "next/link";

const NoResponse = () => {
  return (
    <>
      <PageTitle title="Page Introuvable" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 3,
          mt: 3,
          mb: 3,
        }}
      >
        <Typography>
          Oup la, pardonnez-nous! C'est un page introuvable.
        </Typography>
        <Typography>Nous n'avons pas trouvé ce que vous cherchez.</Typography>
        <Box component={Link} href="/tout">
          <Button variant="contained">Revenir à l'Accueil</Button>
        </Box>
      </Box>
    </>
  );
};

export default NoResponse;
