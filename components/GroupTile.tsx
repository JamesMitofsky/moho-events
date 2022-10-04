import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { GroupInfo } from "../typeUtils";

// this should be marked as a NextComponentType, but it's not accepting the Props param
// in the traditional <Props> fashion
const GroupTile = ({
  name,
  id,
  description,
  startTime,
  endTime,
}: GroupInfo) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default GroupTile;
