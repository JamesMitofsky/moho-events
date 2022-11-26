import EventTile from "./GroupTile";
import Grid from "@mui/material/Unstable_Grid2";

const GroupList = ({ groups }: any) => {
  return (
    <Grid container spacing={{ lg: 6 }}>
      {groups.map((group: any) => (
        <Grid key={group.id} xs={12} lg={6}>
          <EventTile {...group} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GroupList;
