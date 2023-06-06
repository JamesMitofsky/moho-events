import archiveEvent from "@/services/database/archiveEvent";
import { ModifiedServerResponse } from "@/types/globalTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";

type Props = {
  event: ModifiedServerResponse;
};

// TODO actually delete the thing
export default function DeleteButtonIcon({ event }: Props) {
  const deleteTile = () => {
    // check with user to make sure they meant to delete this event
    const deleteConfirmed: boolean = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cet évènement ?"
    );
    if (!deleteConfirmed) return;
    // navigate home
    archiveEvent(event);
  };

  return (
    <Box sx={{ mr: 5, my: "auto" }}>
      <IconButton onClick={deleteTile} edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
