import type { NextPage } from "next";
import Head from "next/head";
import { Typography, Container, Box, Button } from "@mui/material";
import { GroupInfo } from "../typeUtils";
import { useStorageState } from "react-storage-hooks";

const NewEvent: NextPage = () => {
  const [groupsArray, setGroupsArray] = useStorageState<GroupInfo[]>(
    localStorage,
    "groupsArray",
    []
  );
  return (
    <Box>
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
    </Box>
  );
};

export default NewEvent;
