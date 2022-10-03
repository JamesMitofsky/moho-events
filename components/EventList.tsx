import { List } from "@mui/material";
import EventTile from "./EventTile";
import { GroupInfo } from "../typeUtils";

// this should be marked as a NextComponentType, but it's not accepting the Props param
// in the traditional <Props> fashion
const EventList = (groups: GroupInfo[]) => {
  return (
    <List>
      {groups.map((group: GroupInfo) => (
        <EventTile {...group} />
      ))}
    </List>
  );
};

export default EventList;
