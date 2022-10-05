import { List } from "@mui/material";
import EventTile from "./GroupTile";
import { GroupStateObj } from "../typeUtils";

export type GroupInfo = {
  name: string;
  id: string;
  description: string;
  startTime: Date;
  endTime: Date;
};

const GroupList = ({ groups, setGroups }: GroupStateObj) => {
  return (
    <List>
      {groups.map((group) => (
        <EventTile key={group.id} {...group} setGroups={setGroups} />
      ))}
    </List>
  );
};

export default GroupList;
