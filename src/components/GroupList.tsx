import EventTile from "./GroupTile";
import { GroupStateObj } from "../utils/globalTypes";
import Grid from "@mui/material/Grid"; // Grid version 2

const GroupList = ({ groups }: GroupStateObj) => {
  const renderedGroups = groups.map((group) => (
    <EventTile key={group.id} {...group} />
  ));

  return (
    <Grid container spacing={{ lg: 6 }}>
      {renderedGroups.map((group) => (
        <Grid item xs={12} lg={6}>
          {group}
        </Grid>
      ))}
    </Grid>
  );
};

export default GroupList;
