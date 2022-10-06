import { Typography, Box } from "@mui/material";
import { GroupInfo } from "../typeUtils";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet-async";
import TextInput from "../components/TextInput";
import SubmitEvent from "../components/SubmitEvent";

const NewEvent = () => {
  // react state for tracking form data
  const [formData, setFormData] = useState<GroupInfo>({
    associationName: "",
    eventName: "",
    eventType: "",
    numberOfQuote: 0,
    category: "",
    soldBy: "",
    comments: "",
    contact: {
      companyName: "",
      contactName: "",
      telephoneNumber: 0,
      email: "",
    },
    id: uuidv4(),
    startTime: new Date(),
    endTime: new Date(),
  });

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
      <>
        <Helmet>
          <title>Créer un Evénement</title>
        </Helmet>
        <Typography color="primary.main" variant="h2">
          Créer un Evénement
        </Typography>
        <Box
          component="form"
          sx={{
            m: 1,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          noValidate
          autoComplete="off"
        >
          <TextInput
            value={formData.associationName}
            label={"Nom de la société"}
            name={"associationName"}
            onChange={updateFormData}
          />
          <TextInput
            value={formData.category}
            label={"Catégorie (Mécénes,MIC...)"}
            name={"category"}
            onChange={updateFormData}
          />
          <SubmitEvent formData={formData} />
        </Box>
      </>
    </>
  );
};

export default NewEvent;
