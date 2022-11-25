import { Typography, Box } from "@mui/material";
import PageTitle from "./Layouts/PageTitle";

const Welcome = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <PageTitle title="Salut! 👋" />
        <Typography>
          Il n'y a pas deja des evenements, mais vous pouvez en ajouter un
          nouveau.
        </Typography>
        <Typography>
          Cliquez sur le bouton ci-dessous pour commencer!
        </Typography>
      </Box>
    </>
  );
};

export default Welcome;
