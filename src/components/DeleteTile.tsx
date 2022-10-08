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
