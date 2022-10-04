import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Typography, Container, Box, Button } from "@mui/material";
import EventList from "../components/GroupList";
import { GroupInfo, GroupStateObj } from "../typeUtils";
import { useEffect, useState } from "react";
import getLocalGroups from "../utils/getLocalGroups";

type GroupStateArray = [
  groups: GroupInfo[],
  setGroups: GroupStateObj["setGroups"]
];

const Home: NextPage = () => {
  const isPageReady = useRouter().isReady;

  // store all group objects in this highest level array
  const [groups, setGroups]: GroupStateArray = useState<GroupInfo[]>([]);
  console.log(groups);

  // on page load, push groups to rendered state
  useEffect(() => {
    // push response to the group state
    const localGroups = getLocalGroups(isPageReady);
    setGroups(localGroups);
  }, []);

  const addGroup = () => {
    console.log("adding group now!");
  };

  return (
    <Box>
      <Head>
        <title>Moho Events</title>
        <meta name="description" content="Gérer des événements à Moho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Typography color="primary.main" variant="h1" sx={{ fontSize: 50 }}>
          Moho Events
        </Typography>

        <EventList groups={groups} setGroups={setGroups} />
        <Button onClick={addGroup}>Add Event</Button>
      </Container>
    </Box>
  );
};

export default Home;
