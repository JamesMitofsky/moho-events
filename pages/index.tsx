import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Typography, Container, Box } from "@mui/material";
import EventList from "../components/EventList";
import { GroupInfo, GroupStateObj } from "../typeUtils";
import { useEffect, useState } from "react";
import AddEvent from "../components/AddEvent";

type GroupStateArray = [
  groups: GroupInfo[],
  setGroups: GroupStateObj["setGroups"]
];

const Home: NextPage = () => {
  // store all group objects in this highest level array
  const [groups, setGroups]: GroupStateArray = useState<GroupInfo[]>([]);
  console.log(groups);

  // initialize router to track page readiness
  const router = useRouter();

  // every time the state for group changes, push it to the local storage
  useEffect(() => {
    // exit function if the page isn't ready
    if (!router.isReady) return;

    // push local storage to the group state
    const res: string = localStorage.getItem("groupsArray") || "";
    const parsedRes: GroupInfo[] = JSON.parse(res);

    // push response to the group state
    setGroups(parsedRes);
  }, []);

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
        <AddEvent groups={groups} setGroups={setGroups} />
      </Container>
    </Box>
  );
};

export default Home;
