import type { NextPage } from "next";
import Head from "next/head";
import { Typography, Container, Button } from "@mui/material";
import { LocalStorageKey, GroupInfo } from "../typeUtils";
import { useEffect, useState } from "react";

const NewEvent: NextPage = () => {
  // react state for tracking form data
  const [formData, setFormData] = useState<GroupInfo>();

  // allow undefined state for initialization
  const setGroup = (group: GroupInfo | undefined) => {
    // save a group to local storage
    const localKey: LocalStorageKey = "groups";
    // convert group to json string
    const groupString: string = JSON.stringify(group);
    localStorage.setItem(localKey, groupString);
  };

  // when form data changes, push immediately to local storage
  useEffect(() => {
    setGroup(formData);
  }, [formData]);

  return (
    <>
      <Head>
        <title>Créer un Evénement</title>
      </Head>
      <Container>
        <Typography color="primary.main" variant="h1" sx={{ fontSize: 50 }}>
          Créer un Evénement
        </Typography>
        <Typography>Here is a little input field</Typography>
        <Button>Submit</Button>
      </Container>
    </>
  );
};

export default NewEvent;
