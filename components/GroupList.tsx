import { List } from "@mui/material";
import EventTile from "./GroupTile";
import { GroupStateObj } from "../typeUtils";

const GroupList = ({ groups, setGroups }: GroupStateObj) => {
  return (
    <List>
      {groups.map((group) => (
        <EventTile {...group} />
      ))}
    </List>
  );
};

export default GroupList;
