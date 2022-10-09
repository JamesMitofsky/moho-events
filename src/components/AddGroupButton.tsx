import { Box, IconButton } from "@mui/material";
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
      <IconButton component={Link} to="creer" aria-label="add group">
        <AddCircleIcon sx={{ fontSize: 70, color: "primary.main" }} />
      </IconButton>
    </Box>
  );
};

export default AddGroupButton;
