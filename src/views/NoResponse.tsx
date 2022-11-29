import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MetaTags from "../utils/MetaTags";

const NoResponse = () => {
  return (
    <>
      <MetaTags title="Page Introuvable" />
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
        <Box component={Link} to="/">
          <Button variant="contained">Revenir à l'Accueil</Button>
        </Box>
      </Box>
    </>
  );
};

export default NoResponse;
