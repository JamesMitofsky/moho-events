import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { GroupInfo } from "../typeUtils";
import { deleteGroup } from "../utils/manageLocalStorage";
import { useNavigate } from "react-router-dom";

interface Props {
  group: GroupInfo;
}

const DeleteTile = ({ group }: Props) => {
  const navigate = useNavigate();
  const routeUser = (path: string) => {
    navigate(path);
  };
  const deleteTile = () => {
    // check with user to make sure they meant to delete this event
    const deleteConfirmed: boolean = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cet événement ?"
    );
    if (!deleteConfirmed) return;

    // if the user was sure, delete event and navigate home
    deleteGroup(group);
    routeUser("/");
  };

  return (
    <IconButton onClick={deleteTile} edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteTile;
