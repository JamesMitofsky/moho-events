import { Box } from "@mui/material";
import { GroupInfo, EmptyForm } from "../typeUtils";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SubmitEvent from "../components/SubmitEvent";
import AllTextInputs from "../components/AllTextInputs";
import PageTitle from "../components/PageTitle";

const NewEvent = () => {
  // track form data
  const emptyFormState: EmptyForm = {
    associationName: "",
    eventName: "",
    eventType: "",
    numberOfQuote: "",
    category: "",
    soldBy: "",
    comments: "",
    companyName: "",
    contactName: "",
    telephoneNumber: "",
    email: "",
  };
  const [formData, setFormData] = useState<GroupInfo>({
    ...emptyFormState,
    id: uuidv4(),
  });

  // track state of local storage to avoid overwriting it
  const [localChecked, setLocalChecked] = useState<boolean>(false);

  // check for pre-existing data before making React state the point of truth
  useEffect(() => {
    const localData = localStorage.getItem(
      import.meta.env.VITE_UNFINISHED_GROUP
    );
    if (localData) {
      setFormData(JSON.parse(localData));
    }
    setLocalChecked(true);
  }, []);

  // when form data changes, push immediately to local storage
  useEffect(() => {
    if (!localChecked) return;

    localStorage.setItem(
      import.meta.env.VITE_UNFINISHED_GROUP,
      JSON.stringify(formData)
    );
  }, [formData]);

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
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
        />
      </Box>
    </>
  );
};

export default NewEvent;
