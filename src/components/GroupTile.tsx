import {
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { GroupInfo, DispatchSetEvents } from "../typeUtils";
import { Link as RouterLink } from "react-router-dom";

interface Props extends GroupInfo {
  setGroups: DispatchSetEvents["setGroups"];
}

const GroupTile = ({ associationName, id, setGroups }: Props) => {
  const deleteTile = () => {
    setGroups((prevGroups) => prevGroups.filter((group) => group.id !== id));
  };

  return (
    <ListItem
      component={RouterLink}
      to={`/evenement/${id}`}
      divider
      disablePadding
      secondaryAction={
        <IconButton onClick={deleteTile} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton>
        <ListItemText primary={associationName} />
      </ListItemButton>
    </ListItem>
  );
};

export default GroupTile;
