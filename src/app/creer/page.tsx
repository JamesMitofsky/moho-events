"use client";
import { Box } from "@mui/material";
import EventSubmissionForm from "../../components/FormInputGroups/EventSubmissionForm";
import PageTitle from "../../components/layouts/PageTitle";
import ReturnHome from "../../components/ReturnHome";

export default function NewEvent() {
  return (
    <>
      <PageTitle title="Créer un Evénement" />
      <ReturnHome />
      <Box
        component="form"
        sx={{
          m: 1,
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <EventSubmissionForm />
      </Box>
    </>
  );
}
