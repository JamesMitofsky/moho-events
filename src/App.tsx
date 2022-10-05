import "./App.css";
import { useEffect, useState } from "react";
import { Typography, Container, Box } from "@mui/material";
import { GroupInfo, GroupStateObj } from "./typeUtils";

import { getLocalGroups, setLocalGroups } from "./utils/manageLocalStorage";

import EventList from "./components/GroupList";
import AddGroup from "./components/AddGroup";

type GroupStateArray = [
  groups: GroupInfo[],
  setGroups: GroupStateObj["setGroups"]
];

function App() {
  // store all group objects in this highest level array
  const [groups, setGroups]: GroupStateArray = useState<GroupInfo[]>([]);
  console.log(groups);

  // on page load, push groups to rendered state
  useEffect(() => {
    // TODO reactivate this with checking page readiness
    // push response to the group state
    setGroups(getLocalGroups());
  }, []);

  // as a secondary effect, when the group state changes, push to local in the background
  useEffect(() => {
    // TODO find simpler way to avoid clearing the local storage
    if (groups.length === 0) return;
    // push response to the group state
    setLocalGroups(groups);
  }, [groups]);

  return (
    <>
      {/* <Head>
        <title>Moho Events</title>
        <meta name="description" content="Gérer des événements à Moho" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Container>
        <Typography color="primary.main" variant="h1" sx={{ fontSize: 50 }}>
          MOHO EVENTS
        </Typography>

        <AddGroup setGroups={setGroups} groups={groups} />
        <EventList groups={groups} setGroups={setGroups} />
      </Container>
    </>
  );
}

export default App;
