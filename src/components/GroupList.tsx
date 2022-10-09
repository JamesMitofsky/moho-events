import EventTile from "./GroupTile";
import { GroupStateObj, GroupInfo } from "../utils/globalTypes";
import Grid from "@mui/material/Grid"; // Grid version 2

const GroupList = ({ groups }: GroupStateObj) => {
  return (
    <Grid container spacing={{ lg: 6 }}>
      {groups.map((group) => (
        <Grid key={group.id} item xs={12} lg={6}>
          <EventTile {...group} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GroupList;
