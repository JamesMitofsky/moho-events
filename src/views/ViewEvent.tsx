import { useParams } from "react-router-dom";
import { getLocalGroups } from "../utils/manageLocalStorage";
import { List, ListItem, ListItemText } from "@mui/material";
import PageTitle from "../components/PageTitle";
import { GroupInfo } from "../typeUtils";

const ViewEvent = () => {
  const { eventID } = useParams<{ eventID: string }>();

  const group = getLocalGroups().find((group) => group.id === eventID);

  return (
    <>
      {group && (
        <>
          <PageTitle title={group.associationName} subtitle="événement" />
          <List>
            {group &&
              Object.keys(group).map((key: string) => {
                if (group[key as keyof GroupInfo] === group.id) return null;
                return (
                  <ListItem divider>
                    <ListItemText
                      primary={group[key as keyof GroupInfo]}
                      secondary={key.toString()}
                    />
                  </ListItem>
                );
              })}
          </List>
        </>
      )}
    </>
  );
};

export default ViewEvent;
