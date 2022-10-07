import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { GroupInfo } from "../typeUtils";
import { Link as RouterLink } from "react-router-dom";

const GroupTile = ({ eventName, associationName, id }: GroupInfo) => {
  return (
    <ListItem component={RouterLink} to={`/evenement/${id}`} dense divider>
      <ListItemButton>
        <ListItemText primary={eventName} secondary={associationName} />
      </ListItemButton>
    </ListItem>
  );
};

export default GroupTile;
