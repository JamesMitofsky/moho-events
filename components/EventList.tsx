import { List } from "@mui/material";
import EventTile from "./EventTile";
import { GroupStateObj } from "../typeUtils";

const EventList = ({ groups, setGroups }: GroupStateObj) => {
  return (
    <List>
      {groups.map((group) => (
        <EventTile {...group} />
      ))}
    </List>
  );
};

export default EventList;
