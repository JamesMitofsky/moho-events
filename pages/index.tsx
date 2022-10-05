import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Typography, Container, Box } from "@mui/material";
import Head from "next/head";

import type { NextPage } from "next";
import { GroupInfo, GroupStateObj } from "../typeUtils";

import { getLocalGroups, setLocalGroups } from "../utils/manageLocalStorage";

import EventList from "../components/GroupList";
import AddGroup from "../components/AddGroup";

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

  // as a secondary effect, when the group state changes, push to local in the background
  useEffect(() => {
    // push response to the group state
    setLocalGroups(groups);
  }, [groups]);

  const addGroup = () => {
    console.log("opening page for group creation now!");
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

        <AddGroup setGroups={setGroups} groups={groups} />
        <EventList groups={groups} setGroups={setGroups} />
      </Container>
    </Box>
  );
};

export default Home;
