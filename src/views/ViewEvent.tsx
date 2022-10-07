import { useParams } from "react-router-dom";
import { getLocalGroups } from "../utils/manageLocalStorage";
import { List, ListItem } from "@mui/material";
import PageTitle from "../components/PageTitle";

const ViewEvent = () => {
  const { eventID } = useParams<{ eventID: string }>();

  const group = getLocalGroups().find((group) => group.id === eventID);

  return (
    <>
      <PageTitle title={`Evénement: ${group?.associationName}`} />
      <List>
        {group &&
          Object.values(group).map((value: string) => {
            if (value === group.id) return null;
            return <ListItem>{value}</ListItem>;
          })}
      </List>
    </>
  );
};

export default ViewEvent;
