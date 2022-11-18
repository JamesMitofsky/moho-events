import { Box } from "@mui/material";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SubmitEvent from "../components/SubmitEvent";
import AllTextInputs from "../components/AllTextInputs";
import PageTitle from "../components/PageTitle";
import { emptyFormState } from "../utils/globalVars";
import ReturnHome from "../components/ReturnHome";
import { useStorageState } from "react-storage-hooks";

const NewEvent = () => {
  const [formData, setFormData, writeError] = useStorageState(
    localStorage,
    import.meta.env.VITE_UNFINISHED_GROUP,
    { ...emptyFormState, id: uuidv4() }
  );

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
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
        <AllTextInputs updateFormData={updateFormData} formData={formData} />
        <SubmitEvent
          emptyFormState={emptyFormState}
          formData={formData}
          setFormData={setFormData}
          updateOrAdd="add"
        />
      </Box>
    </>
  );
};

export default NewEvent;
