import { List } from "@mui/material";
import EventTile from "./GroupTile";
import { GroupStateObj } from "../typeUtils";

const GroupList = ({ groups }: GroupStateObj) => {
  const renderedGroups = groups.map((group) => (
    <EventTile key={group.id} {...group} />
  ));

  return <List>{renderedGroups}</List>;
};

export default GroupList;
