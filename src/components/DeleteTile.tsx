import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";

// TODO actually delete the thing
const DeleteTile = ({ group }: any) => {
  const router = useRouter();
  const deleteTile = () => {
    // check with user to make sure they meant to delete this event
    const deleteConfirmed: boolean = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cet évènement ?"
    );
    if (!deleteConfirmed) return;
    // navigate home
    router.push("/");
  };

  return (
    <IconButton onClick={deleteTile} edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteTile;
