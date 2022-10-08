import { useParams, Link as RouterLink, useLocation } from "react-router-dom";
import { getLocalGroups } from "../utils/manageLocalStorage";
import { List, ListItem, ListItemText, Box, Link } from "@mui/material";
import PageTitle from "../components/PageTitle";
import { GroupInfo } from "../typeUtils";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { v4 as uuidv4 } from "uuid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteTile from "../components/DeleteTile";
import ReturnHome from "../components/ReturnHome";

const ViewEvent = () => {
  const { eventID } = useParams<{ eventID: string }>();

  const group: GroupInfo | undefined = getLocalGroups().find(
    (group) => group.id === eventID
  );

  const path = useLocation().pathname;

  return (
    <>
      {group && (
        <>
          <ReturnHome />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PageTitle
              title={group.eventName}
              subtitle="événement"
              icon={EventAvailableIcon}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link component={RouterLink} to={`${path}/edit`}>
              <EditIcon fontSize="small" /> Mettre à jour
            </Link>
            <DeleteTile group={group} />
          </Box>

          <List>
            {group &&
              Object.keys(group).map((key: string) => {
                if (group[key as keyof GroupInfo] === group.id) return null;
                return (
                  <ListItem key={uuidv4()} divider>
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
