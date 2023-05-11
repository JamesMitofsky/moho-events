import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Box, IconButton } from "@mui/material";

export default function CateringButton({ onClick }: { onClick: () => void }) {
  return (
    <Box>
      <IconButton onClick={onClick}>
        <RestaurantMenuIcon />
      </IconButton>
    </Box>
  );
}
