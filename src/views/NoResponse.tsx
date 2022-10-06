import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NoResponse = () => {
  return (
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
      <Typography>Oup la! Pardonnez-nous!</Typography>
      <Typography>Nous n'avons pas trouvé ce que vous cherchez.</Typography>
      <Box component={Link} to="/">
        <Button variant="contained">Revenir à l'Accueil</Button>
      </Box>
    </Box>
  );
};

export default NoResponse;
