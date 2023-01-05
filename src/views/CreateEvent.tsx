import { Box } from "@mui/material";
import EventSubmissionForm from "../components/FormInputGroups/EventSubmissionForm";
import PageTitle from "../components/Layouts/PageTitle";
import ReturnHome from "../components/ReturnHome";
import IsReadOnly from "../services/IsReadOnly";

const NewEvent = () => {
  return (
    <IsReadOnly.Provider value={false}>
      <ReturnHome />
      <PageTitle title="Créer un Evénement" />
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
    </IsReadOnly.Provider>
  );
};

export default NewEvent;
