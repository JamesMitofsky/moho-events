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
  associationName,
  eventName,
  eventType,
  numberOfQuote,
  category,
  soldBy,
  comments,
  id,
  contact: { companyName, contactName, telephoneNumber, email },
  setGroups,
}: Props) => {
  const deleteTile = () => {
    setGroups((prevGroups) => prevGroups.filter((group) => group.id !== id));
  };

  return (
    <ListItem
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
