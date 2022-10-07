import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { GroupInfo } from "../typeUtils";
import { Link as RouterLink } from "react-router-dom";

const GroupTile = ({ associationName, id }: GroupInfo) => {
  return (
    <ListItem component={RouterLink} to={`/evenement/${id}`} dense divider>
      <ListItemButton>
        <ListItemText primary={associationName} />
      </ListItemButton>
    </ListItem>
  );
};

export default GroupTile;
