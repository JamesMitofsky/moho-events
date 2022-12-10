import { Box, Fab } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

const AddGroupButton = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: 1.5,
        marginRight: 2,
      }}
    >
      <Fab component={Link} to="/creer" aria-label="ajouter un groupe">
        <AddCircleIcon sx={{ fontSize: 70, color: "primary.main" }} />
      </Fab>
    </Box>
  );
};

export default AddGroupButton;
