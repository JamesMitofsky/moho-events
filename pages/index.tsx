import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moho Events</title>
        <meta name="description" content="Gérer des événements à Moho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography color="primary.main" variant="h1">
          Moho Events
        </Typography>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
