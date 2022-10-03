import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Typography, Container, Box } from "@mui/material";
import EventList from "../components/EventList";
import { GroupInfo } from "../typeUtils";
import { useState } from "react";

const Home: NextPage = () => {
  const [groupsArray, setGroupsArray] = useState<GroupInfo[]>([]);
  return (
    <Box className={styles.container}>
      <Head>
        <title>Moho Events</title>
        <meta name="description" content="Gérer des événements à Moho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Typography color="primary.main" variant="h1" sx={{ fontSize: 50 }}>
          Moho Events
        </Typography>

        <EventList groups={groupsArray} />
      </Container>
    </Box>
  );
};

export default Home;
