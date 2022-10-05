import {
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { GroupInfo, DispatchSetEvents } from "../typeUtils";

interface Props extends GroupInfo {
  setGroups: DispatchSetEvents["setGroups"];
}

const GroupTile = ({
  name,
  id,
  description,
  startTime,
  endTime,
  setGroups,
}: Props) => {
  const deleteTile = () => {
    console.log("delete tile");
    setGroups((prevGroups) => prevGroups.filter((group) => group.id !== id));
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton onClick={deleteTile} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default GroupTile;
